import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto my-24 p-8 text-center bg-white rounded-3xl border border-gray-200 shadow-sm">
      <div className="text-6xl mb-4">🛒 404</div>
      <h2 className="text-2xl font-black text-gray-900">পেজটি খুঁজে পাওয়া যায়নি</h2>
      <p className="text-sm text-gray-500 mt-2">আপনি যে লিংকটি অনুসন্ধান করছেন তা পরিবর্তিত হয়েছে অথবা সরিয়ে ফেলা হয়েছে।</p>
      <Link href="/" className="mt-6 inline-block px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
