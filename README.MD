# Metin Hasanov – Online CV
A static, bilingual (English / Bulgarian) CV hosted on GitHub Pages.
Visitors can submit testimonials; the site owner approves them through a password-protected admin panel.
## Features
- Bilingual interface (EN / BG), language saved in the browser
- Tabs: About, Experience, Training, Certificates, Testimonials
- Testimonial submission form with spam protection (hidden honeypot field and length limits)
- Admin panel: log in, approve or delete testimonials
- Backend on Supabase (PostgreSQL, row-level security, built-in authentication)
## Project structure
```
index.html          Page structure
style.css           Styles
script.js           Translations, Supabase client, form and admin logic
bg-animation.js     Hero background animation
photo.jpg           Profile photo
certs/              Certificate files
supabase/
  schema.sql        Database table, policies and permissions
```
## Setup
### 1. Create the Supabase project
1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor**, paste the contents of `supabase/schema.sql`, and run it.
3. Go to **Authentication** and turn off **Allow new users to sign up**.
4. Go to **Authentication → Users → Add user** and create the admin account (email and password).
### 2. Configure the site
In `script.js`, set the first two lines to your project values (from **Project Settings → Data API** and **API Keys**):
```javascript
const SUPABASE_URL = "https://YOUR-PROJECT-REF.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_...";
```
The publishable (anon) key is designed to be public. Security is enforced by the row-level rules in `schema.sql`.
**Never** put the `sb_secret_` / `service_role` key in this repository.
### 3. Deploy on GitHub Pages
1. Go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder, then save.
The site is published at `https://<username>.github.io/<repository>/`.
## Using the admin panel
1. Click **Admin** in the footer.
2. Log in with the admin email and password.
3. Click **Approve** to publish a pending testimonial, or **Delete** to remove it.
Approved testimonials appear on the site immediately.
## Backing up data
Testimonial data is not stored in this repository. To back it up, export the `testimonials` table from the Supabase dashboard (**Table Editor → Export**) and store the file privately, outside the repository.
## Notes
- Free Supabase projects pause after about a week of inactivity. Restore them from the dashboard if needed.
- Do not commit exported data or personal information to a public repository.