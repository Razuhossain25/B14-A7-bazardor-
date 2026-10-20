'use client';

import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { PRODUCTS, toBengaliNumber } from '@/lib/bazarData';
import Link from 'next/link';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user, loading } = useAuth();
  const slug = params?.slug as string;

  const product = PRODUCTS.find((p) => p.slug === slug);

  // Protected route: redirect only after the saved session has been checked
  useEffect(() => {
    if (!loading && !user) {
      toast.error('পণ্যের পূর্ণাঙ্গ তথ্য ও বাজারদর দেখতে অনুগ্রহ করে সাইন ইন করুন');
      router.push('/signin');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 text-center bg-white rounded-2xl border border-gray-200">
        <div className="animate-spin text-3xl mb-4 inline-block">⌛</div>
        <p className="text-gray-500 font-medium">নিরাপদ তথ্য লোড হচ্ছে...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 text-center bg-white rounded-2xl border border-gray-200">
        <div className="text-5xl mb-4">❓</div>
        <h2 className="text-xl font-bold text-gray-800">পণ্যটি পাওয়া যায়নি</h2>
        <Link href="/" className="mt-6 inline-block px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  const marketPrices = product.markets.map((m) => m.price);
  const minPrice = Math.min(...marketPrices, product.price);
  const maxPrice = Math.max(...marketPrices, product.price);
  const avgPrice = Math.round(
    [...marketPrices, product.price].reduce((a, b) => a + b, 0) / (marketPrices.length + 1)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 mb-6">
        ← আগের পেজে ফিরে যান
      </Link>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-4xl shadow-inner">{product.emoji}</div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">{product.category}</span>
                <span className="text-xs font-semibold text-gray-500">{product.unit}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">{product.name}</h1>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs text-gray-500 block">জাতীয় গড় বর্তমান মূল্য</span>
            <span className="text-3xl font-black text-emerald-800">৳ {toBengaliNumber(product.price)}</span>
          </div>
        </div>

        <p className="mt-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{product.description}</p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 text-center">
            <div className="text-xs font-bold text-blue-700">সর্বনিম্ন দাম</div>
            <div className="text-xl sm:text-2xl font-black text-blue-900 mt-1">৳ {toBengaliNumber(minPrice)}</div>
          </div>
          <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 text-center">
            <div className="text-xs font-bold text-emerald-700">গড় দাম</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-900 mt-1">৳ {toBengaliNumber(avgPrice)}</div>
          </div>
          <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-100 text-center">
            <div className="text-xs font-bold text-amber-700">সর্বোচ্চ দাম</div>
            <div className="text-xl sm:text-2xl font-black text-amber-900 mt-1">৳ {toBengaliNumber(maxPrice)}</div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-black text-gray-800 mb-4">📍 বাজারভিত্তিক আজকের দাম</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 font-bold">বাজারের নাম</th>
                  <th className="py-3 px-4 font-bold">একক</th>
                  <th className="py-3 px-4 font-bold text-right">আজকের দর</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {product.markets.map((m, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-4 font-semibold text-gray-900">{m.name}</td>
                    <td className="py-3.5 px-4 text-gray-500">{product.unit}</td>
                    <td className="py-3.5 px-4 font-bold text-right text-emerald-700">৳ {toBengaliNumber(m.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
