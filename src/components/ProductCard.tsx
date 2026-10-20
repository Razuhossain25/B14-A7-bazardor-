'use client';

import Link from 'next/link';
import { Product, toBengaliNumber } from '@/lib/bazarData';

export default function ProductCard({ product }: { product: Product }) {
  const isUp = product.change > 0;
  const isDown = product.change < 0;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-white rounded-2xl p-4 border border-gray-200/80 hover:border-emerald-500 hover:shadow-lg transition transform hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl group-hover:scale-110 transition">
          {product.emoji}
        </div>
        <span
          className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 ${
            isUp
              ? 'bg-rose-50 text-rose-700 border border-rose-200'
              : isDown
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {isUp ? '▲' : isDown ? '▼' : '—'} {toBengaliNumber(Math.abs(product.change))}%
        </span>
      </div>

      <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 line-clamp-1 transition">{product.name}</h3>
      <p className="text-xs text-gray-400 mt-0.5">{product.unit}</p>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-baseline justify-between">
        <span className="text-xs text-gray-500 font-medium">আজকের দাম</span>
        <div className="text-right">
          <span className="text-lg font-black text-emerald-800">৳ {toBengaliNumber(product.price)}</span>
          <span className="text-[11px] text-gray-400 ml-1">টাকা</span>
        </div>
      </div>
    </Link>
  );
}
