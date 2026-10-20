'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('ইমেইল ও পাসওয়ার্ড পূরণ করুন');
      return;
    }
    login(email.split('@')[0], email);
    router.push('/');
  };

  const handleSocialLogin = (provider: string) => {
    login(`${provider} ইউজার`, `user@${provider.toLowerCase()}.com`);
    router.push('/');
  };

  return (
    <div className="max-w-md mx-auto my-12 px-4">
      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md">
        <div className="text-center mb-6">
          <div className="text-3xl mb-2">🛒</div>
          <h1 className="text-2xl font-black text-gray-900">সাইন ইন করুন</h1>
          <p className="text-xs text-gray-500 mt-1">বাজার দর পর্যবেক্ষণ ড্যাশবোর্ডে প্রবেশ করুন</p>
        </div>

        <button
          type="button"
          onClick={() => {
            login('পরীক্ষক (Examiner)', 'examiner@bazardor.com');
            router.push('/');
          }}
          className="w-full mb-5 py-2.5 bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs rounded-xl hover:bg-emerald-100 transition"
        >
          ⚡ এক ক্লিকে পরীক্ষক ডিমো লগইন (Examiner Demo Login)
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            সাইন ইন করুন
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">অথবা</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button type="button" onClick={() => handleSocialLogin('Google')}
            className="py-2.5 px-3 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 transition">
            <span>🌐</span> Google
          </button>
          <button type="button" onClick={() => handleSocialLogin('GitHub')}
            className="py-2.5 px-3 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 transition">
            <span>🐙</span> GitHub
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          অ্যাকাউন্ট নেই?{' '}
          <Link href="/signup" className="font-bold text-emerald-700 hover:underline">নিবন্ধন করুন (সাইন আপ)</Link>
        </p>
      </div>
    </div>
  );
}
