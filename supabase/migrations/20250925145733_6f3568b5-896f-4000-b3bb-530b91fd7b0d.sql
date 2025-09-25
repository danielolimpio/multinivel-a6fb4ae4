-- Create enum for user types
CREATE TYPE public.user_type AS ENUM ('admin', 'affiliate');

-- Create enum for vote types
CREATE TYPE public.vote_type AS ENUM ('company', 'leader');

-- Create enum for commission status
CREATE TYPE public.commission_status AS ENUM ('pending', 'paid');

-- Create enum for withdrawal status
CREATE TYPE public.withdrawal_status AS ENUM ('pending', 'processing', 'completed', 'rejected');

-- Create profiles table
CREATE TABLE public.profiles (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
    user_type user_type NOT NULL DEFAULT 'affiliate',
    full_name TEXT,
    email TEXT,
    phone TEXT,
    pix_key TEXT,
    referral_code TEXT UNIQUE,
    referred_by UUID REFERENCES public.profiles(user_id) ON DELETE SET NULL,
    total_earnings DECIMAL(10,2) DEFAULT 0,
    available_balance DECIMAL(10,2) DEFAULT 0,
    total_withdrawals DECIMAL(10,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create companies table
CREATE TABLE public.companies (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    logo_url TEXT,
    website_url TEXT,
    vote_count INTEGER DEFAULT 0,
    total_rating DECIMAL(3,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create leaders table
CREATE TABLE public.leaders (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT,
    description TEXT,
    photo_url TEXT,
    vote_count INTEGER DEFAULT 0,
    total_rating DECIMAL(3,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create votes table
CREATE TABLE public.votes (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    vote_type vote_type NOT NULL,
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    leader_id UUID REFERENCES public.leaders(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    payment_amount DECIMAL(10,2) DEFAULT 19.90,
    payment_status BOOLEAN DEFAULT false,
    payment_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    CONSTRAINT vote_target_check CHECK (
        (vote_type = 'company' AND company_id IS NOT NULL AND leader_id IS NULL) OR
        (vote_type = 'leader' AND leader_id IS NOT NULL AND company_id IS NULL)
    ),
    CONSTRAINT one_vote_per_user_per_target UNIQUE (user_id, company_id, leader_id)
);

-- Create commissions table
CREATE TABLE public.commissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    referrer_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    vote_id UUID NOT NULL REFERENCES public.votes(id) ON DELETE CASCADE,
    level INTEGER NOT NULL CHECK (level >= 1 AND level <= 5),
    amount DECIMAL(10,2) NOT NULL,
    status commission_status DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create withdrawals table
CREATE TABLE public.withdrawals (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL CHECK (amount >= 10.00),
    pix_key TEXT NOT NULL,
    status withdrawal_status DEFAULT 'pending',
    processed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    featured_image TEXT,
    author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create support_tickets table
CREATE TABLE public.support_tickets (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'closed')),
    admin_response TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create downloads table
CREATE TABLE public.downloads (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    file_url TEXT NOT NULL,
    file_type TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leaders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.commissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.withdrawals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.downloads ENABLE ROW LEVEL SECURITY;

-- Create function to generate referral code
CREATE OR REPLACE FUNCTION public.generate_referral_code()
RETURNS TEXT AS $$
BEGIN
    RETURN upper(substring(replace(gen_random_uuid()::text, '-', ''), 1, 8));
END;
$$ LANGUAGE plpgsql;

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (user_id, email, referral_code)
    VALUES (
        NEW.id,
        NEW.email,
        public.generate_referral_code()
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create function to update updated_at column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create function to process MLM commissions
CREATE OR REPLACE FUNCTION public.process_mlm_commissions(vote_id_param UUID)
RETURNS VOID AS $$
DECLARE
    vote_record RECORD;
    current_referrer_id UUID;
    commission_amounts DECIMAL[] := ARRAY[5.00, 3.00, 2.00, 1.00, 1.00];
    current_level INTEGER := 1;
BEGIN
    -- Get vote information
    SELECT user_id INTO vote_record FROM public.votes WHERE id = vote_id_param;
    
    -- Get the voter's referrer
    SELECT referred_by INTO current_referrer_id 
    FROM public.profiles 
    WHERE user_id = vote_record.user_id;
    
    -- Process commissions up to 5 levels
    WHILE current_referrer_id IS NOT NULL AND current_level <= 5 LOOP
        -- Insert commission record
        INSERT INTO public.commissions (user_id, referrer_id, vote_id, level, amount, status)
        VALUES (vote_record.user_id, current_referrer_id, vote_id_param, current_level, commission_amounts[current_level], 'paid');
        
        -- Update referrer's balance
        UPDATE public.profiles 
        SET 
            total_earnings = total_earnings + commission_amounts[current_level],
            available_balance = available_balance + commission_amounts[current_level],
            updated_at = now()
        WHERE user_id = current_referrer_id;
        
        -- Get next level referrer
        SELECT referred_by INTO current_referrer_id 
        FROM public.profiles 
        WHERE user_id = current_referrer_id;
        
        current_level := current_level + 1;
    END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_companies_updated_at
    BEFORE UPDATE ON public.companies
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_leaders_updated_at
    BEFORE UPDATE ON public.leaders
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_votes_updated_at
    BEFORE UPDATE ON public.votes
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_commissions_updated_at
    BEFORE UPDATE ON public.commissions
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_withdrawals_updated_at
    BEFORE UPDATE ON public.withdrawals
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_support_tickets_updated_at
    BEFORE UPDATE ON public.support_tickets
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger to process commissions when vote is paid
CREATE OR REPLACE FUNCTION public.handle_vote_payment()
RETURNS TRIGGER AS $$
BEGIN
    -- Only process if payment status changed from false to true
    IF OLD.payment_status = false AND NEW.payment_status = true THEN
        NEW.payment_date = now();
        PERFORM public.process_mlm_commissions(NEW.id);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_vote_payment
    BEFORE UPDATE ON public.votes
    FOR EACH ROW EXECUTE FUNCTION public.handle_vote_payment();

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE user_id = auth.uid() AND user_type = 'admin'
        )
    );

CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can update any profile" ON public.profiles
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE user_id = auth.uid() AND user_type = 'admin'
        )
    );

-- RLS Policies for companies
CREATE POLICY "Anyone can view active companies" ON public.companies
    FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage companies" ON public.companies
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE user_id = auth.uid() AND user_type = 'admin'
        )
    );

-- RLS Policies for leaders
CREATE POLICY "Anyone can view active leaders" ON public.leaders
    FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage leaders" ON public.leaders
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE user_id = auth.uid() AND user_type = 'admin'
        )
    );

-- RLS Policies for votes
CREATE POLICY "Users can view their own votes" ON public.votes
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all votes" ON public.votes
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE user_id = auth.uid() AND user_type = 'admin'
        )
    );

CREATE POLICY "Authenticated users can create votes" ON public.votes
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own votes" ON public.votes
    FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for commissions
CREATE POLICY "Users can view their own commissions" ON public.commissions
    FOR SELECT USING (auth.uid() = referrer_id);

CREATE POLICY "Admins can view all commissions" ON public.commissions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE user_id = auth.uid() AND user_type = 'admin'
        )
    );

-- RLS Policies for withdrawals
CREATE POLICY "Users can view their own withdrawals" ON public.withdrawals
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own withdrawals" ON public.withdrawals
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view and manage all withdrawals" ON public.withdrawals
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE user_id = auth.uid() AND user_type = 'admin'
        )
    );

-- RLS Policies for blog_posts
CREATE POLICY "Anyone can view published posts" ON public.blog_posts
    FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage all posts" ON public.blog_posts
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE user_id = auth.uid() AND user_type = 'admin'
        )
    );

-- RLS Policies for support_tickets
CREATE POLICY "Users can view their own tickets" ON public.support_tickets
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own tickets" ON public.support_tickets
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view and manage all tickets" ON public.support_tickets
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE user_id = auth.uid() AND user_type = 'admin'
        )
    );

-- RLS Policies for downloads
CREATE POLICY "Authenticated users can view active downloads" ON public.downloads
    FOR SELECT USING (is_active = true AND auth.uid() IS NOT NULL);

CREATE POLICY "Admins can manage downloads" ON public.downloads
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE user_id = auth.uid() AND user_type = 'admin'
        )
    );

-- Insert some sample companies and leaders
INSERT INTO public.companies (name, description, logo_url, website_url) VALUES
('Hinode', 'Empresa japonesa especializada em cosméticos e suplementos', '/lovable-uploads/japan-flag.png', 'https://hinode.com.br'),
('Herbalife', 'Líder mundial em nutrição e controle de peso', '/lovable-uploads/brasil-flag.png', 'https://herbalife.com.br'),
('Jeunesse', 'Empresa americana focada em produtos anti-idade', '/lovable-uploads/brasil-flag.png', 'https://jeunesse.com'),
('Nu Skin', 'Empresa americana de cuidados pessoais e suplementos', '/lovable-uploads/brasil-flag.png', 'https://nuskin.com'),
('Forever Living', 'Empresa especializada em produtos à base de aloe vera', '/lovable-uploads/brasil-flag.png', 'https://foreverliving.com');

INSERT INTO public.leaders (name, company, description, photo_url) VALUES
('Carlos Silva', 'Hinode', 'Líder diamante com mais de 10 anos na empresa', '/lovable-uploads/96abc21f-04bb-4c64-8237-b0245c134f32.png'),
('Maria Santos', 'Herbalife', 'Presidente da equipe com milhares de distribuidores', '/lovable-uploads/c97e9d14-38f3-4d57-893a-6c9fb7a9b604.png'),
('João Oliveira', 'Jeunesse', 'Construtor de equipes e mentor de liderança', '/lovable-uploads/84bbf665-d8d7-4123-96b8-b5c284471a45.png'),
('Ana Costa', 'Nu Skin', 'Empreendedora digital e líder de vendas', '/lovable-uploads/e718df1a-b14f-4d62-9d4b-84342153a3c7.png'),
('Roberto Lima', 'Forever Living', 'Especialista em produtos naturais e wellness', '/lovable-uploads/219814cb-9a2a-40b5-a838-9f3076a5b95d.png');