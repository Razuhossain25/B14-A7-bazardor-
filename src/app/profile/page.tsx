'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push('/signin');
  }, [user, loading, router]);

  if (loading || !user) return null;

  return (
    <div className="max-w-md mx-auto my-12 px-4">
      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border-2 border-emerald-200">
          {user.avatar || '👤'}
        </div>
        <h1 className="text-2xl font-black text-gray-900">{user.name}</h1>
        <p className="text-sm text-gray-500 mt-0.5">{user.email}</p>

        <div className="mt-8 space-y-3">
          <Link href="/profile/update" className="block w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow transition">
            তথ্য আপডেট করুন (Update Information)
          </Link>
          <button
            onClick={() => { logout(); router.push('/'); }}
            className="block w-full py-2.5 border border-red-200 text-red-600 hover:bg-red-50 font-bold rounded-xl transition"
          >
            সাইন আউট
          </button>
        </div>
      </div>
    </div>
  );
}
