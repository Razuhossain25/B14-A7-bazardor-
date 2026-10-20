export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-200/80 border-t border-emerald-900 py-10 mt-16 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-white text-lg font-bold">
            <span>🛒</span>
            <span>বাজার দর</span>
          </div>
          <p className="text-xs text-emerald-300/70 mt-1">বাজার দর — নিত্যপ্রয়োজনীয় পণ্যের সঠিক দাম এক নজরে।</p>
        </div>
        <div className="text-xs text-emerald-400/80 max-w-md">
          “সকল দাম সম্ভাব্য ও সংগ্রহকৃত; বাজার অবস্থার ওপর নির্ভর করে প্রতিটি পাইকারি ও খুচরা বাজারে সামান্য পরিবর্তিত হতে পারে।”
        </div>
      </div>
    </footer>
  );
}
