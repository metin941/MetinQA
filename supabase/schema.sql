-- Testimonials table, row-level security and permissions
-- Run this in Supabase SQL Editor to recreate the database.
create table public.testimonials (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 100),
  company text check (char_length(company) <= 100),
  role text not null check (char_length(role) between 1 and 100),
  message text not null check (char_length(message) between 1 and 1000),
  status text not null default 'pending' check (status in ('pending', 'approved')),
  created_at timestamptz not null default now()
);
alter table public.testimonials enable row level security;
-- Permissions (required in addition to the policies below)
grant select, insert on public.testimonials to anon;
grant select, insert, update, delete on public.testimonials to authenticated;
grant usage, select on all sequences in schema public to anon, authenticated;
-- Visitors can submit testimonials, but only as pending
create policy "public can submit pending"
  on public.testimonials for insert
  to anon, authenticated
  with check (status = 'pending');
-- Visitors can only read approved testimonials
create policy "public can read approved"
  on public.testimonials for select
  to anon, authenticated
  using (status = 'approved');
-- Logged-in admin can read everything
create policy "admin can read all"
  on public.testimonials for select
  to authenticated
  using (true);
-- Logged-in admin can approve and delete
create policy "admin can update"
  on public.testimonials for update
  to authenticated
  using (true)
  with check (true);
create policy "admin can delete"
  on public.testimonials for delete
  to authenticated
  using (true);