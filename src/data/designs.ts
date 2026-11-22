// Indian folk art + streetwear designs. Mockups live in public/images/designs/<slug>-black.jpg and -white.jpg.
export const CONTACT_EMAIL = 'hello@sidjamstudio.com';
// WhatsApp: number in international format, digits only (used for wa.me links).
export const WHATSAPP_NUMBER = '14088005387';
export const WHATSAPP_DISPLAY = '+1 408 800 5387';
export const WHATSAPP_USERNAME = 'SidJamStudio';
export const PRICING = { one: 20, two: 35 };
export const SIZES = ['S', 'M', 'L'] as const;
// Bulk price per tee: 3–9 tees at $16 each, 10 or more at $14 each.
export const BULK = { from: 3, each: 16, bigFrom: 10, bigEach: 14 };
// Stripe Payment Links (Dashboard → Payment Links). Leave empty until the Stripe account is set up:
// the basket then shows only "Send order" and we reply with how to pay.
export const STRIPE_LINKS = { one: '', two: '' };
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
  { slug: 'warli-peacock-mandala', title: 'Warli Peacock Mandala', art: 'Warli', region: 'Maharashtra', accent: 'berry' },
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
    ? `Hi SidJam Studio,\n\nI'm interested in the "${title}" design.\n\nTee color (black or white):\nTee style (crew neck or women's V-neck):\nPrint (front only or front + back):\nSize:\nQuantity:\n\nThanks!`
    : `Hi SidJam Studio,\n\nI'd like a custom design.\n\nWhat I have in mind:\nTee color (black or white):\nTee style (crew neck or women's V-neck):\nPrint (front only or front + back):\nSize:\nQuantity:\n\nThanks!`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function whatsappFor(title?: string): string {
  const text = title
    ? `Hi SidJam Studio! I'm interested in the "${title}" design. Tee color (black or white): Tee style (crew neck or women's V-neck): Print (front only or front + back): Size: Quantity:`
    : `Hi SidJam Studio! I'd like to order a tee / ask about a custom design.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
