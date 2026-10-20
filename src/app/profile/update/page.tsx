'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function UpdateProfilePage() {
  const { user, loading, updateUser } = useAuth();
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push('/signin');
    if (user) setName(user.name);
  }, [user, loading, router]);

  if (loading || !user) return null;

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('নাম খালি রাখা যাবে না');
      return;
    }
    updateUser(name.trim());
    router.push('/profile');
  };

  return (
    <div className="max-w-md mx-auto my-12 px-4">
      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md">
        <div className="mb-6">
          <Link href="/profile" className="text-xs font-bold text-emerald-700 hover:underline">← প্রোফাইলে ফিরে যান</Link>
          <h1 className="text-2xl font-black text-gray-900 mt-2">তথ্য আপডেট করুন</h1>
          <p className="text-xs text-gray-500 mt-0.5">আপনার অ্যাকাউন্টের নাম পরিবর্তন করুন</p>
        </div>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">নাম (Name)</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow transition">
            তথ্য আপডেট করুন (Update Information)
          </button>
        </form>
      </div>
    </div>
  );
}
