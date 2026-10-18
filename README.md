# Editor portfolio

npm install && npm run dev

- Edit ALL your details, prices, projects, tools in `src/config/siteConfig.js`
- Project cards use optimized 9:16 videos and JPEG posters from `public/videos`; set each project's `videoUrl` and `thumbnail` in `siteConfig.js`. Original video masters in `src/videos` are not loaded by the site.
- Leads: create an EmailJS service and email template, then copy `.env.example` to `.env` and add the service ID, template ID, and public key. Set the template's recipient to `{{to_email}}` and reply-to to `{{reply_to}}`. Include these variables in the template body to receive each submitted field:

  ```text
  Name: {{name}}
  Email: {{email}}
  Phone / WhatsApp: {{phone}}
  Project type: {{type}}
  Budget: {{budget}}
  Deadline: {{deadline}}
  Project details: {{project_details}}
  ```

  `{{message}}` contains the full formatted enquiry summary, and the subject can use `{{title}}`. The recipient comes from `siteConfig.js`.

- Deploy: add the same EmailJS environment variables to your hosting provider (for example, Vercel) and rebuild the site.
- Swap tool badges in `sections/Sections.jsx` for official logo SVGs if you want
