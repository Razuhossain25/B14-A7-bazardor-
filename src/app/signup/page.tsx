'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error('সকল প্রয়োজনীয় তথ্য পূরণ করুন');
      return;
    }
    login(name, email);
    router.push('/');
  };

  const handleSocialSignUp = (provider: string) => {
    login(`${provider} ইউজার`, `user@${provider.toLowerCase()}.com`);
    router.push('/');
  };

  return (
    <div className="max-w-md mx-auto my-12 px-4">
      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md">
        <div className="text-center mb-6">
          <div className="text-3xl mb-2">📝</div>
          <h1 className="text-2xl font-black text-gray-900">নতুন অ্যাকাউন্ট তৈরি</h1>
          <p className="text-xs text-gray-500 mt-1">বাজার দর পরিবারের সাথে যুক্ত হোন</p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">আপনার নাম</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="যেমন: তানভীর আহমেদ"
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">ইমেইল ঠিকানা</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@mail.com"
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">পাসওয়ার্ড</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow">
            অ্যাকাউন্ট নিবন্ধন করুন
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">অথবা</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button type="button" onClick={() => handleSocialSignUp('Google')}
            className="py-2.5 px-3 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 transition">
            <span>🌐</span> Google
          </button>
          <button type="button" onClick={() => handleSocialSignUp('GitHub')}
            className="py-2.5 px-3 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 transition">
            <span>🐙</span> GitHub
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          পূর্বেই অ্যাকাউন্ট রয়েছে?{' '}
          <Link href="/signin" className="font-bold text-emerald-700 hover:underline">সাইন ইন করুন</Link>
        </p>
      </div>
    </div>
  );
}
