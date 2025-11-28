# AK Tech Astra Portfolio

Modern personal portfolio for **Kashif Rehman** showcasing software engineering, IoT innovation, e‑commerce experience, and award‑winning projects.

## ✨ Features

- Responsive, mobile‑first React interface
- Accessible components (ARIA labels, semantic headings) with animated section reveal
- Project showcase with external links
- Experience timeline (work, education, awards)
- Testimonials for social proof
- Email contact form powered by `emailjs`
- Enhanced SEO (meta tags, Open Graph, Twitter, JSON‑LD Person & Organization)
- Performance touches (lazy loaded images)

## 🛠 Tech Stack

- React 19 / Create React App
- CSS Modules for scoped styling
- EmailJS for form submissions
- Lucide React icons
- Firebase Hosting (deployment)

## 🚀 Getting Started

```bash
npm install
npm start
```
App runs at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Outputs optimized bundle in `build/` ready for Firebase or any static host.

## 📬 Contact Form Configuration
Update the service ID, template ID, and public key in `src/components/Contact.js` to match your EmailJS account if you fork this repo.

## 🔧 Structure
```
public/        # Static HTML + manifest + SEO
src/components # Modular UI sections
src/images     # Local assets
```

## 🧩 SEO & Metadata
`public/index.html` includes:
- Meta description & keywords
- Canonical + robots tag
- Open Graph + Twitter cards
- JSON-LD structured data (Person + Organization)

## ✅ Accessibility
- Descriptive alt text and aria-labels
- Keyboard-focusable nav buttons
- Color contrast mindful dark theme

## 📈 Future Improvements
- Dark/light theme toggle
- Automated Lighthouse CI
- Unit tests for intersection reveal logic
- Add more structured data (Projects as CreativeWork)

## 🏆 Highlights
- Smart Helmet for Coal Miners (National PEC competition – 3rd place)
- 4 years eBay marketplace operations experience

## 📄 License
Personal portfolio source; feel free to reference structure. Remove personal data before reuse.

## 🙌 Acknowledgments
Built with Create React App and Lucide icons.

