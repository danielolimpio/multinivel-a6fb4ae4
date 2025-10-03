-- Create enum for roles
CREATE TYPE public.app_role AS ENUM ('admin', 'affiliate');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    UNIQUE (user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Migrate existing data from profiles.user_type to user_roles
INSERT INTO public.user_roles (user_id, role)
SELECT 
    user_id, 
    CASE 
        WHEN user_type::text = 'admin' THEN 'admin'::app_role
        ELSE 'affiliate'::app_role
    END
FROM public.profiles
WHERE user_type IS NOT NULL;

-- Drop old policies that depend on get_current_user_role function
DROP POLICY IF EXISTS "Admins can manage all posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Admins can view all commissions" ON public.commissions;
DROP POLICY IF EXISTS "Admins can manage companies" ON public.companies;
DROP POLICY IF EXISTS "Admins can manage downloads" ON public.downloads;
DROP POLICY IF EXISTS "Admins can manage leaders" ON public.leaders;
DROP POLICY IF EXISTS "Admins can update any profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view and manage all tickets" ON public.support_tickets;
DROP POLICY IF EXISTS "Admins can view all votes" ON public.votes;
DROP POLICY IF EXISTS "Admins can view and manage all withdrawals" ON public.withdrawals;

-- Now drop old function
DROP FUNCTION IF EXISTS public.get_current_user_role();

-- Create new RLS policies using has_role function

-- Blog posts policies
CREATE POLICY "Admins can manage all posts" 
ON public.blog_posts 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));

-- Commissions policies
CREATE POLICY "Admins can view all commissions" 
ON public.commissions 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

-- Companies policies
CREATE POLICY "Admins can manage companies" 
ON public.companies 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));

-- Downloads policies
CREATE POLICY "Admins can manage downloads" 
ON public.downloads 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));

-- Leaders policies
CREATE POLICY "Admins can manage leaders" 
ON public.leaders 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));

-- Profiles policies
CREATE POLICY "Admins can update any profile" 
ON public.profiles 
FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

-- Support tickets policies
CREATE POLICY "Admins can view and manage all tickets" 
ON public.support_tickets 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));

-- Votes policies
CREATE POLICY "Admins can view all votes" 
ON public.votes 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

-- Withdrawals policies
CREATE POLICY "Admins can view and manage all withdrawals" 
ON public.withdrawals 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));

-- RLS policies for user_roles table
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles" 
ON public.user_roles 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));