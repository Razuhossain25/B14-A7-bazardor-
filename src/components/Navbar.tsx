'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { getBanglaDate, PRODUCTS, toBengaliNumber, CATEGORIES } from '@/lib/bazarData';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [banglaDate, setBanglaDate] = useState('');

  useEffect(() => {
    setBanglaDate(getBanglaDate());
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <span className="text-2xl font-black text-emerald-800 tracking-tight">বাজার দর</span>
          </div>
          <span className="text-xs font-medium text-emerald-600 mt-0.5 min-h-[1rem]">{banglaDate}</span>
        </Link>

        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                href="/profile"
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition"
              >
                <span>{user.avatar || '👤'}</span>
                <span>{user.name}</span>
              </Link>
              <button
                onClick={logout}
                className="px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                লগআউট
              </button>
            </div>
          ) : (
            <>
              <Link href="/signin" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 rounded-lg transition">
                সাইন ইন
              </Link>
              <Link href="/signup" className="px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition">
                সাইন আপ
              </Link>
            </>
          )}
        </div>
      </div>

      <nav className="border-t border-gray-100 bg-gray-50/70 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-2 py-2">
          {CATEGORIES.map((cat) => {
            const href = cat.slug === 'all' ? '/' : `/categories/${cat.slug}`;
            const isActive = pathname === href;
            return (
              <Link
                key={cat.slug}
                href={href}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition ${
                  isActive
                    ? 'bg-emerald-700 text-white font-bold shadow-sm'
                    : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="bg-emerald-900 text-white text-xs py-1.5 overflow-hidden flex items-center border-t border-emerald-800">
        <div className="px-3 bg-emerald-800 font-bold tracking-wider text-[10px] shrink-0 z-10 mr-2 shadow">
          আজকের দর
        </div>
        <div className="animate-marquee flex items-center gap-8">
          {[...PRODUCTS, ...PRODUCTS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 whitespace-nowrap">
              <span>{item.emoji}</span>
              <span className="font-medium text-emerald-100">{item.name}</span>
              <span className="font-bold text-white">৳ {toBengaliNumber(item.price)}/{item.unit.replace('প্রতি ', '')}</span>
              <span className={`text-[11px] font-bold px-1 rounded ${item.change > 0 ? 'text-rose-300' : 'text-emerald-300'}`}>
                {item.change > 0 ? '▲' : '▼'} {toBengaliNumber(Math.abs(item.change))}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
