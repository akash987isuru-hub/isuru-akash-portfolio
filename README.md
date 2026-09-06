# Isuru Akash — Portfolio V2

A modern React + Vite developer portfolio focused on a professional Gen-Z visual direction: cinematic boot intro, interactive hero, bento-grid profile section, uniform tech stack, command palette, polished project presentation, scroll progress, cursor spotlight, and improved contact experience.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Main portfolio links

- GitHub: https://github.com/akash987isuru-hub
- LinkedIn: https://www.linkedin.com/in/isuru-akash/
- Email: isuru.a.mallawa@gmail.com

## V2 interactions

- `Ctrl + K` / `Cmd + K`: open quick navigation command palette
- Intro is shown once per browser session and includes a Skip button
- Project carousel supports keyboard arrow navigation
- Contact email has a Copy action
- Motion automatically reduces for users with reduced-motion accessibility settings

## EmailJS

The contact form uses the existing EmailJS environment variables:

```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Keep `.env` out of public repositories when it contains values you do not intend to publish.
