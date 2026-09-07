# EmailJS setup for the portfolio contact form

The portfolio sends contact-form messages through EmailJS. The email displayed on the website does **not** automatically change the EmailJS recipient.

## 1. EmailJS template recipient

Open EmailJS Dashboard -> Email Templates -> the template used by this project.

Set **To Email** to either:

```
{{to_email}}
```

or directly to:

```
isuru.a.mallawa@gmail.com
```

Recommended template fields:

- To Name: `{{to_name}}`
- To Email: `{{to_email}}`
- Reply To: `{{reply_to}}`
- Subject: `Portfolio contact - {{subject}}`

Example body:

```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

{{message}}
```

If you want messages to be sent **from** the new Gmail account, connect `isuru.a.mallawa@gmail.com` as the EmailJS Email Service and use that service ID. If the old Gmail service remains connected, it can still send messages to the new address as long as the template recipient is correct.

## 2. Vercel environment variables

`.env` is intentionally ignored by Git. Vercel therefore does not receive the local `.env` file from GitHub.

In Vercel -> Project -> Settings -> Environment Variables, add:

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

Add them for Production and Preview, then redeploy the project.

## 3. Test

Submit the portfolio form using another email address. Check:

- `isuru.a.mallawa@gmail.com` Inbox
- Spam/Junk
- EmailJS Dashboard -> Email History / Logs

If EmailJS reports success but the new inbox is empty, the template `To Email` field is still pointing at the old recipient or the message is being filtered.
