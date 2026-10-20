export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  emoji: string;
  price: number;
  prevPrice: number;
  unit: string;
  change: number;
  description: string;
  markets: { name: string; price: number }[];
}

export const PRODUCTS: Product[] = [
  { id: 1, slug: "swarnamachi-rice", name: "স্বর্ণমাছি চাল", category: "চাল ও শস্য", categorySlug: "chal", emoji: "🍚", price: 64, prevPrice: 61, unit: "প্রতি কেজি", change: 4.9,
    description: "দৈনন্দিন ভাতের জন্য মধ্যবিত্তের প্রথম পছন্দ মাঝারি দানার চাল।",
    markets: [{ name: "কারওয়ান বাজার", price: 62 }, { name: "শ্যামবাজার", price: 61 }, { name: "মিরপুর-১ বাজার", price: 65 }, { name: "মহাখালী কাঁচাবাজার", price: 66 }] },
  { id: 2, slug: "miniket-rice", name: "মিনিকেট চাল", category: "চাল ও শস্য", categorySlug: "chal", emoji: "🌾", price: 76, prevPrice: 79, unit: "প্রতি কেজি", change: -3.8,
    description: "পলিশ করা চিকন মিনিকেট চাল, ঢাকা শহরের সবচেয়ে চাহিদাসম্পন্ন।",
    markets: [{ name: "কারওয়ান বাজার", price: 74 }, { name: "শ্যামবাজার", price: 73 }, { name: "মিরপুর-১ বাজার", price: 77 }, { name: "হাতিরপুল কাঁচাবাজার", price: 78 }] },
  { id: 3, slug: "hilsha-fish", name: "পদ্মার ইলিশ মাছ (১ কেজি)", category: "মাছ ও মাংস", categorySlug: "fish-meat", emoji: "🐟", price: 1850, prevPrice: 1750, unit: "প্রতি পিস", change: 5.7,
    description: "চাঁদপুরের টাটকা পদ্মার ইলিশ, চড়া চাহিদা ও সীমিত জোগানে মূল্য বৃদ্ধি।",
    markets: [{ name: "কারওয়ান বাজার", price: 1800 }, { name: "শ্যামবাজার", price: 1780 }, { name: "মিরপুর-১ বাজার", price: 1870 }, { name: "মোহাম্মদপুর কৃষি মার্কেট", price: 1900 }] },
  { id: 4, slug: "broiler-chicken", name: "ব্রয়লার মুরগি", category: "মাছ ও মাংস", categorySlug: "fish-meat", emoji: "🍗", price: 185, prevPrice: 195, unit: "প্রতি কেজি", change: -5.1,
    description: "খামারের দেশি ব্রয়লার মুরগি, সরবরাহ বৃদ্ধি পাওয়ায় দাম কিছুটা কমেছে।",
    markets: [{ name: "কারওয়ান বাজার", price: 180 }, { name: "যাত্রাবাড়ী বাজার", price: 178 }, { name: "মিরপুর-১ বাজার", price: 188 }, { name: "উত্তরা আজমপুর", price: 190 }] },
  { id: 5, slug: "local-onion", name: "দেশি পেঁয়াজ", category: "শাকসবজি ও মসলা", categorySlug: "vegetables", emoji: "🧅", price: 95, prevPrice: 88, unit: "প্রতি কেজি", change: 8.0,
    description: "ফরিদপুর ও পাবনার বাছাইকৃত কন্দ দেশি পেঁয়াজ। ঝাঁজালো ও মানসম্মত।",
    markets: [{ name: "শ্যামবাজার", price: 90 }, { name: "কারওয়ান বাজার", price: 92 }, { name: "মিরপুর-১ বাজার", price: 98 }, { name: "নিউমার্কেট কাঁচাবাজার", price: 100 }] },
  { id: 6, slug: "red-potato", name: "হল্যান্ড লাল আলু", category: "শাকসবজি ও মসলা", categorySlug: "vegetables", emoji: "🥔", price: 48, prevPrice: 52, unit: "প্রতি কেজি", change: -7.7,
    description: "মুন্সীগঞ্জের কোল্ড স্টোরেজ থেকে খালাস করা ফ্রেশ লাল গোল আলু।",
    markets: [{ name: "কারওয়ান বাজার", price: 45 }, { name: "শ্যামবাজার", price: 44 }, { name: "মিরপুর-১ বাজার", price: 50 }, { name: "মহাখালী কাঁচাবাজার", price: 50 }] },
  { id: 7, slug: "farm-eggs", name: "ফার্মের লাল ডিম", category: "মাছ ও মাংস", categorySlug: "fish-meat", emoji: "🥚", price: 145, prevPrice: 155, unit: "প্রতি ডজন", change: -6.5,
    description: "পোল্ট্রি খামারের টাটকা গ্রেড-এ লাল ডিম। প্রোটিনের সহজলভ্য উৎস।",
    markets: [{ name: "তেজগাঁও ডিমের আড়ত", price: 138 }, { name: "কারওয়ান বাজার", price: 142 }, { name: "মিরপুর-১ বাজার", price: 148 }, { name: "উত্তরা রাজলক্ষ্মী", price: 150 }] },
  { id: 8, slug: "soybean-oil", name: "বোতলজাত সয়াবিন তেল", category: "তেল ও ঘি", categorySlug: "oil-ghee", emoji: "🫙", price: 172, prevPrice: 168, unit: "প্রতি লিটার", change: 2.4,
    description: "পরিশোধিত বোতলজাত ভোজ্য তেল। ভিটামিন এ ও ডি সমৃদ্ধ।",
    markets: [{ name: "কারওয়ান বাজার", price: 170 }, { name: "শ্যামবাজার", price: 169 }, { name: "মিরপুর-১ বাজার", price: 173 }, { name: "হাতিরপুল কাঁচাবাজার", price: 175 }] },
  { id: 9, slug: "green-chilli", name: "কাঁচা মরিচ", category: "শাকসবজি ও মসলা", categorySlug: "vegetables", emoji: "🌶️", price: 160, prevPrice: 190, unit: "প্রতি কেজি", change: -15.8,
    description: "স্থানীয় ফসলের নতুন তোলন কাঁচা মরিচ। সরবরাহে গতি ফেরায় দরপতন।",
    markets: [{ name: "কারওয়ান বাজার", price: 150 }, { name: "শ্যামবাজার", price: 145 }, { name: "মিরপুর-১ বাজার", price: 165 }, { name: "যাত্রাবাড়ী বাজার", price: 160 }] },
  { id: 10, slug: "garlic-desi", name: "দেশি রসুন", category: "শাকসবজি ও মসলা", categorySlug: "vegetables", emoji: "🧄", price: 210, prevPrice: 200, unit: "প্রতি কেজি", change: 5.0,
    description: "নাটোরের শুকনা দেশি রসুন। রান্নার স্বাদ ও সুবাস বাড়াতে অপরিহার্য।",
    markets: [{ name: "শ্যামবাজার", price: 200 }, { name: "কারওয়ান বাজার", price: 205 }, { name: "মিরপুর-১ বাজার", price: 215 }, { name: "মহাখালী কাঁচাবাজার", price: 220 }] },
];

export const CATEGORIES = [
  { slug: "all", name: "সব পণ্য", icon: "🧺" },
  { slug: "chal", name: "চাল ও শস্য", icon: "🍚" },
  { slug: "vegetables", name: "শাকসবজি ও মসলা", icon: "🥦" },
  { slug: "fish-meat", name: "মাছ ও মাংস", icon: "🐟" },
  { slug: "oil-ghee", name: "তেল ও ঘি", icon: "🫙" },
];

export function toBengaliNumber(num: number | string): string {
  const bn = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, (d) => bn[Number(d)]);
}

// Bangladesh revised Bangla calendar: new year on 14 April
export function getBanglaDate(): string {
  const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
  const months = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'];
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let start = new Date(now.getFullYear(), 3, 14);
  if (today < start) start = new Date(now.getFullYear() - 1, 3, 14);
  const bYear = start.getFullYear() - 593;
  const ly = start.getFullYear() + 1;
  const isLeap = (ly % 4 === 0 && ly % 100 !== 0) || ly % 400 === 0;
  const lens = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, isLeap ? 30 : 29, 30];
  let d = Math.round((today.getTime() - start.getTime()) / 86400000);
  let m = 0;
  while (m < 11 && d >= lens[m]) { d -= lens[m]; m++; }
  return `${days[now.getDay()]}, ${toBengaliNumber(d + 1)} ${months[m]}, ${toBengaliNumber(bYear)} বঙ্গাব্দ`;
}
