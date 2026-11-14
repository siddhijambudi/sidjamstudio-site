// Indian folk art + streetwear designs. Mockups live in public/images/designs/<slug>-black.jpg and -white.jpg.
export const CONTACT_EMAIL = 'hello@sidjamstudio.com';
// Paste the Etsy shop link here to show an "Etsy shop" button on the Designs page.
export const ETSY_URL = 'https://www.etsy.com/shop/SidJamStudio';

export interface Design {
  slug: string;
  title: string;
  art: string;
  region: string;
  accent: 'sun' | 'sky' | 'leaf' | 'berry' | 'grape';
}

export const designs: Design[] = [
  { slug: 'warli-streetwear', title: 'Warli Streetwear', art: 'Warli', region: 'Maharashtra', accent: 'leaf' },
  { slug: 'madhubani-streetwear', title: 'Madhubani Streetwear', art: 'Madhubani', region: 'Bihar', accent: 'berry' },
  { slug: 'pattachitra-streetwear', title: 'Pattachitra Streetwear', art: 'Pattachitra', region: 'Odisha & West Bengal', accent: 'sun' },
  { slug: 'kutch-embroidery-streetwear', title: 'Kutch Bharat Streetwear', art: 'Kutch Bharat', region: 'Gujarat', accent: 'sky' },
  { slug: 'gond-face', title: 'Gond Face', art: 'Gond', region: 'Madhya Pradesh', accent: 'grape' },
  { slug: 'thanjavur-dancer', title: 'Thanjavur Dancer', art: 'Thanjavur painting', region: 'Tamil Nadu', accent: 'berry' },
  { slug: 'onam-pookalam', title: 'Onam Pookalam', art: 'Pookalam floral carpet', region: 'Kerala', accent: 'sun' },
  { slug: 'kalamkari-tree-of-life', title: 'Kalamkari Tree of Life', art: 'Kalamkari', region: 'Andhra Pradesh', accent: 'leaf' },
  { slug: 'chandua-joy', title: 'Chandua Joy', art: 'Chandua appliqué', region: 'Odisha', accent: 'berry' },
  { slug: 'aipan-mandala-dancer', title: 'Aipan Mandala Dancer', art: 'Aipan', region: 'Uttarakhand', accent: 'berry' },
  { slug: 'peacock-feather', title: 'Peacock Feather', art: 'Kalamkari + Madhubani', region: 'Andhra Pradesh & Bihar', accent: 'sky' },
  { slug: 'kachhi-bharat-verse', title: 'Kachhi Bharat Verse', art: 'Kutch-style Bharat border', region: 'Gujarat', accent: 'sun' },
  { slug: 'pichhwai-streetwear', title: 'Pichhwai Streetwear', art: 'Pichhwai', region: 'Rajasthan', accent: 'sky' },
  { slug: 'dance-on', title: 'Dance On', art: 'Warli-inspired street art', region: 'Maharashtra', accent: 'berry' },
];

export function mailtoFor(title?: string): string {
  const subject = title ? `Design inquiry: ${title}` : 'Custom design inquiry';
  const body = title
    ? `Hi SidJam Studio,\n\nI'm interested in the "${title}" design.\n\nTee color (black or white):\nSize:\nQuantity:\n\nThanks!`
    : `Hi SidJam Studio,\n\nI'd like a custom design.\n\nWhat I have in mind:\nTee color (black or white):\nSize:\nQuantity:\n\nThanks!`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
