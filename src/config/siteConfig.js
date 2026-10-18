// ✏️ EDIT EVERYTHING IN THIS FILE: your details, prices, skills, projects.
const currency = '₹'
const reelFrom = 299
export default {
  name: 'Karthik',
  heroA: 'I edit videos that', heroB: 'hold attention',
  tagline: 'I edit videos that hold attention',
  email: 'karthikeditor01@gmail.com',
  phone: '+91 87546 35344',
  whatsapp: '918754635344', // country code + number, no + or spaces
  location: 'Chennai, India',
  instagram: 'https://instagram.com/yourhandle',
  youtube: 'https://youtube.com/@yourchannel',
  linkedin: '',
  calendly: '', // paste your Calendly link to show "Book a call"
  currency, reelFrom,
  showreel: '', // path like /showreel.mp4 (put file in /public)
  services: [
    ['Smartphone', 'Reel / Shorts Editing', 'Fast hooks, captions and trend-ready pacing.', `Starting from ${currency}${reelFrom}`],
    ['Youtube', 'YouTube Video Editing', 'Story-driven long-form edits that boost watch time.'],
    ['Sparkles', 'Advanced Editing', 'VFX, motion graphics, speed ramps, masking, green screen / chroma key, keyframe animation, transitions, text animations, cinematic color grading, sound design, beat-sync edits.'],
    ['Captions', 'Subtitles / Captions', 'Animated, accurate captions in your brand style.'],
    ['Megaphone', 'Ads & Promo Videos', 'Punchy ads built to convert on every platform.'],
  ],
  tiers: [
    { name: 'Reel Edit', desc: 'Short-form that stops the scroll.', price: `Starts from ${currency}${reelFrom}`, cta: 'Book this edit', points: ['Up to 60s Reel / Short', 'Captions + text animation', 'Beat-sync cuts', '3 revisions', '10h delivery'] },
    { name: 'YouTube Edit', desc: 'Long-form with retention-focused pacing.', price: 'Get a Quote', badge: 'Most popular', cta: 'Get a Quote', points: ['Up to 20 min video', 'B-roll, zooms, SFX', 'Color correction', 'Thumbnail frame export', '2 revisions'] },
    { name: 'Advanced Edit', desc: 'VFX, motion graphics & cinematic grade.', price: 'Get a Quote', cta: 'Get a Quote', points: ['VFX & chroma key', 'Motion graphics', 'Cinematic color grading', 'Sound design', '3 revisions'] },
  ],
  tools: [
    { name: 'Premiere Pro', short: 'Pr', logo: '/videos/premiere%20pro.jpg', color: '#9999ff', level: 90, note: 'Main timeline, color and audio' },
    { name: 'CapCut', short: 'Cc', logo: '/videos/Capcut-icon.png', color: '#ffffff', level: 95, note: 'Fast reels, captions and effects' },
    { name: 'After Effects', short: 'Ae', logo: '/videos/AE.jpg', color: '#d291ff', level: 75, note: 'Motion graphics and VFX' },
  ],
  stats: [['100+', 'Videos edited'], ['20+', 'Happy clients'], ['2', 'Years of experience']],
  // testimonials: [
  //   { quote: 'Replace with a real client testimonial.', who: 'Client name, Brand' },
  //   { quote: 'Replace with a real client testimonial.', who: 'Client name, Brand' },
  //   { quote: 'Replace with a real client testimonial.', who: 'Client name, Brand' },
  // ],
  faq: [
    ['How fast do you deliver?', 'Reels in 24-48 hours. Longer videos depend on length; I confirm before starting.'],
    ['How many revisions do I get?', 'Each package includes revisions. Extra rounds can be added.'],
    ['Which software do you use?', 'Premiere Pro, CapCut, After Effects.'],
    ['How do I send footage and pay?', 'Share a Drive or WeTransfer link. Payment details are shared with the quote.'],
  ],
  // category: Reels / YouTube / Ads / Weddings / Corporate / Advanced Edits
  projects: [
    { title: 'Expo Highlights', category: 'Corporate', client: 'Expo', role: 'Event edit', tools: ['Capcut'], thumbnail: '/videos/expo-final-out.jpg', previewUrl: '/videos/expo-preview.mp4', videoUrl: '/videos/expo-final-out.mp4' },
    { title: 'Cinematic Video', category: 'Reels', client: 'Personal', role: 'Beach edit', tools: ['Premiere Pro'], thumbnail: '/videos/sam-beach.jpg', previewUrl: '/videos/sam-beach-preview.mp4', videoUrl: '/videos/sam-beach.mp4' },
    { title: 'Zazen Promotion', category: 'Ads', client: 'Zazen', role: 'Promotion edit', tools: ['Premiere Pro'], thumbnail: '/videos/zazen-promotion.jpg', previewUrl: '/videos/zazen-preview.mp4', videoUrl: '/videos/zazen-promotion.mp4' },
  ],
}
