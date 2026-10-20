'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES, toBengaliNumber } from '@/lib/bazarData';
import ProductCard from '@/components/ProductCard';

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [sortType, setSortType] = useState<'default' | 'asc' | 'desc'>('default');

  const currentCategory = CATEGORIES.find((c) => c.slug === slug);

  const categoryProducts = useMemo(() => {
    const list = PRODUCTS.filter((p) => p.categorySlug === slug);
    if (sortType === 'asc') list.sort((a, b) => a.price - b.price);
    else if (sortType === 'desc') list.sort((a, b) => b.price - a.price);
    return list;
  }, [slug, sortType]);

  if (!currentCategory || categoryProducts.length === 0) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 text-center bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="text-5xl mb-4">🛒</div>
        <h2 className="text-xl font-bold text-gray-800">ক্যাটাগরি পাওয়া যায়নি</h2>
        <p className="text-sm text-gray-500 mt-2">অনুরোধকৃত ক্যাটাগরিতে এই মুহূর্তে কোনো তালিকাভুক্ত পণ্য নেই।</p>
        <Link href="/" className="mt-6 inline-block px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-4xl p-2 bg-emerald-100 rounded-2xl">{currentCategory.icon}</span>
          <div>
            <h1 className="text-2xl font-black text-gray-900">{currentCategory.name}</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">মোট {toBengaliNumber(categoryProducts.length)} টি পণ্য পাওয়া গেছে</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-gray-500">সাজান:</label>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value as 'default' | 'asc' | 'desc')}
            className="px-3 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white font-medium text-gray-700"
          >
            <option value="default">ডিফল্ট</option>
            <option value="asc">দাম: কম থেকে বেশি</option>
            <option value="desc">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categoryProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}
