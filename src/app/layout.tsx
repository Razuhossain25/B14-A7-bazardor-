import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "বাজার দর | নিত্যপ্রয়োজনীয় পণ্যের বাজারদর",
  description: "বাংলাদেশের পাইকারি ও খুচরা নিত্যপ্রয়োজনীয় বাজারের তাজা দরদাম এক নজরে",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body className="bg-slate-50 text-slate-800 min-h-screen flex flex-col antialiased">
        <AuthProvider>
          <Toaster position="top-right" />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
