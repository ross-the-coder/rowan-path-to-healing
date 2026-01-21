

## Project info

This website is for Rowan Center

We use GitHub to manage this project.

**URL**: https://lovable.dev/projects/2b7324c2-5f2f-489b-8af3-c37a77042bd7

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2b7324c2-5f2f-489b-8af3-c37a77042bd7) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/2b7324c2-5f2f-489b-8af3-c37a77042bd7) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Security Measures

To ensure the security of intake forms and sensitive data, the following measures are in place:

1.  **Row Level Security (RLS)**: Database tables are protected by Supabase RLS policies. This ensures that while anyone can submit a form (INSERT), only authorized administrators can view or access the data (SELECT).
2.  **Honeypot Anti-Spam**: All intake forms include hidden "honeypot" fields to detect and reject automated bot submissions without affecting real users.
3.  **Strict Input Validation**: We use Zod for frontend validation to ensure data conforms to expected formats (e.g., valid email addresses, maximum character lengths) before it is sent to the server.
4.  **Database Constraints**: The database itself enforces strict rules on data types, lengths, and formats (like email patterns) as a secondary layer of protection against malicious inputs.
5.  **Encryption at Rest and in Transit**: All data is encrypted while being sent to Supabase and while stored in the database.

## Email Notifications

To be alerted of new submissions, we use Supabase Edge Functions with Database Webhooks and Resend.

### Setup Instructions

1.  **Resend Account**: Create an account at [resend.com](https://resend.com) and get an API Key.
2.  **Supabase Secrets**: In your Supabase Dashboard, go to Settings -> Edge Functions and add `RESEND_API_KEY` with your key.
3.  **Deploy Function**: Deploy the code found in `supabase/functions/notify-staff/index.ts` using the Supabase CLI:
    ```sh
    supabase functions deploy notify-staff
    ```
4.  **Database Webhooks**: In the Supabase Dashboard, go to Database -> Webhooks and create a new webhook:
    - **Name**: `notify_staff_on_submission`
    - **Table**: Select each intake table (e.g., `crisis_counseling_intake`).
    - **Events**: `INSERT`
    - **Type**: `Supabase Edge Function`
    - **Function**: `notify-staff`
