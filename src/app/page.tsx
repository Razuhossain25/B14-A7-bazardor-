'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCTS, toBengaliNumber } from '@/lib/bazarData';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const [sortType, setSortType] = useState<'default' | 'asc' | 'desc'>('default');
  const [search, setSearch] = useState('');

  const topRisers = useMemo(
    () => [...PRODUCTS].filter((p) => p.change > 0).sort((a, b) => b.change - a.change).slice(0, 6),
    []
  );
  const topFallers = useMemo(
    () => [...PRODUCTS].filter((p) => p.change < 0).sort((a, b) => a.change - b.change).slice(0, 6),
    []
  );

  const filteredProducts = useMemo(() => {
    const list = PRODUCTS.filter(
      (p) => p.name.includes(search) || p.category.includes(search)
    );
    if (sortType === 'asc') list.sort((a, b) => a.price - b.price);
    else if (sortType === 'desc') list.sort((a, b) => b.price - a.price);
    return list;
  }, [sortType, search]);

  return (
    <div>
      <section className="bg-gradient-to-b from-emerald-100/60 via-emerald-50/30 to-slate-50 py-12 md:py-16 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-4">
              ✨ আজকের বাজার বিশ্লেষণ
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              নিত্যপণ্যের সঠিক দরদাম, <span className="text-emerald-700">এক ক্লিকেই</span> আপনার নখদর্পণে।
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              ঢাকা ও সারা দেশের বিভিন্ন কাঁচাবাজারের হালনাগাদ চাল, ডাল, তেল, ডিম, মাছ ও সবজির নির্ভরযোগ্য পাইকারি ও খুচরা মূল্য তালিকা।
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#সব-পণ্য" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition transform active:scale-95">
                সব পণ্য দেখুন ↓
              </a>
              <Link href="/signin" className="px-6 py-3 bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-semibold rounded-xl transition">
                বাজার পর্যবেক্ষণ সাইন ইন
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-emerald-100">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="font-bold text-gray-800">বাজার দর সামারি</span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md font-semibold">আজকের ট্র্যাকার</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-100">
                  <div className="text-xs font-semibold text-rose-600">আজ সর্বোচ্চ বৃদ্ধি</div>
                  <div className="text-2xl font-black text-rose-800 mt-1">🧅 দেশি পেঁয়াজ</div>
                  <div className="text-xs text-rose-600 font-bold mt-1">▲ ৮.০% বৃদ্ধি</div>
                </div>
                <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100">
                  <div className="text-xs font-semibold text-emerald-600">আজ সর্বোচ্চ পতন</div>
                  <div className="text-2xl font-black text-emerald-800 mt-1">🌶️ কাঁচা মরিচ</div>
                  <div className="text-xs text-emerald-600 font-bold mt-1">▼ ১৫.৮% হ্রাস</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs text-gray-500 text-center">
                📊 ১০+ প্রধান বাজারের গড়ে হিসাবকৃত
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-rose-700 flex items-center gap-2">
              <span>আজ দাম বেড়েছে</span>
              <span className="text-base bg-rose-100 text-rose-800 px-2.5 py-0.5 rounded-full">▲ দর বৃদ্ধি</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">গতকালের তুলনায় যেসব পণ্যের দাম ঊর্ধ্বমুখী</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topRisers.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-emerald-700 flex items-center gap-2">
              <span>আজ দাম কমেছে</span>
              <span className="text-base bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">▼ স্বস্তির খবর</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">গতকালের তুলনায় যেসব পণ্যের দাম কমেছে</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topFallers.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>

        <section id="সব-পণ্য" className="scroll-mt-24 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">সব পণ্য</h2>
              <p className="text-sm text-gray-500 mt-1">মোট {toBengaliNumber(filteredProducts.length)} টি পণ্যের বর্তমান তালিকা</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <input
                type="text"
                placeholder="পণ্য খুঁজুন (যেমন: চাল, তেল)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
              <div className="flex items-center gap-2">
                <label className="text-xs font-semibold text-gray-500 whitespace-nowrap">সাজান:</label>
                <select
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value as 'default' | 'asc' | 'desc')}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white font-medium text-gray-700 cursor-pointer"
                >
                  <option value="default">ডিফল্ট</option>
                  <option value="asc">দাম: কম থেকে বেশি</option>
                  <option value="desc">দাম: বেশি থেকে কম</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
              <div className="text-4xl mb-2">🔍</div>
              <h3 className="text-lg font-bold text-gray-700">কোনো পণ্য পাওয়া যায়নি</h3>
              <p className="text-sm text-gray-400 mt-1">অন্য কোনো নাম লিখে অনুসন্ধান করুন</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
