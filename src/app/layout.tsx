import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/animations.css";
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mat95rix7's B Portfolio",
  description: "Portfolio of a Application Designer and Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-900 text-gray-100`}
      >
        <LanguageProvider>
          <Header />
          <main className="min-h-screen flex flex-col justify-between">
            {children}
          </main>
          <Toaster position="top-right" richColors />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
