-- Fix infinite recursion in profiles policies by creating security definer functions
-- and separating admin/user authentication properly

-- Create security definer function to get current user role
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
  SELECT user_type::text FROM public.profiles WHERE user_id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

-- Drop existing policies that cause recursion
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update any profile" ON public.profiles;

-- Recreate admin policies using the security definer function
CREATE POLICY "Admins can view all profiles" ON public.profiles
FOR SELECT USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can update any profile" ON public.profiles  
FOR UPDATE USING (public.get_current_user_role() = 'admin');

-- Fix other policies that reference profiles table directly
DROP POLICY IF EXISTS "Admins can manage companies" ON public.companies;
DROP POLICY IF EXISTS "Admins can manage leaders" ON public.leaders;  
DROP POLICY IF EXISTS "Admins can view all commissions" ON public.commissions;
DROP POLICY IF EXISTS "Admins can view all votes" ON public.votes;
DROP POLICY IF EXISTS "Admins can manage all posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Admins can manage downloads" ON public.downloads;
DROP POLICY IF EXISTS "Admins can view and manage all tickets" ON public.support_tickets;
DROP POLICY IF EXISTS "Admins can view and manage all withdrawals" ON public.withdrawals;

-- Recreate all admin policies using the security definer function
CREATE POLICY "Admins can manage companies" ON public.companies
FOR ALL USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can manage leaders" ON public.leaders
FOR ALL USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can view all commissions" ON public.commissions  
FOR SELECT USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can view all votes" ON public.votes
FOR SELECT USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can manage all posts" ON public.blog_posts
FOR ALL USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can manage downloads" ON public.downloads
FOR ALL USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can view and manage all tickets" ON public.support_tickets
FOR ALL USING (public.get_current_user_role() = 'admin');

CREATE POLICY "Admins can view and manage all withdrawals" ON public.withdrawals
FOR ALL USING (public.get_current_user_role() = 'admin');