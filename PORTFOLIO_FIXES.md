# Portfolio contact + CV update

## What changed

- Contact form now sends an explicit `to_email` value: `isuru.a.mallawa@gmail.com`.
- Sender/reply fields are normalized for EmailJS templates.
- The visible email address is clickable and still has Copy Email support.
- Added **View CV** and **Download CV** buttons in the hero section.
- Added **View CV** and **Download CV** actions to the Ctrl/Cmd + K command palette.
- Added `public/Isuru_Akash_CV.pdf` so Vercel can serve the CV directly.
- The portfolio CV copy uses the new email and the public location `Polonnaruwa, Sri Lanka` instead of the street address.
- Added `.env.example` and `EMAILJS_SETUP.md`.

## Important EmailJS step

The code cannot override a template that is hard-coded to send to an old email address.

In EmailJS Dashboard -> Email Templates -> your template, set:

- **To Email:** `{{to_email}}` (recommended) or `isuru.a.mallawa@gmail.com`
- **Reply To:** `{{reply_to}}`

Then save the template.

## Important Vercel step

Because `.env` is ignored by Git, add these manually in Vercel -> Project -> Settings -> Environment Variables:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

After adding/changing them, redeploy.

## CV URLs after deployment

- View: `/Isuru_Akash_CV.pdf`
- Download: the Download CV button uses the same file with the browser download attribute.
