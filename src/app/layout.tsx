import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppNavBar, { NavigationItem } from "./client/components/NavBar";
import { SessionProvider } from "next-auth/react";

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Code Optima - AI-Powered Code Performance Optimization",
  description: "Code Optima is your AI co-pilot that hunts down performance slowpokes, fixes them in a flash, and rockets your app to warp speed—while you focus on what you love.",
  keywords: ["code optimization", "performance", "AI", "development"],
  authors: [{ name: "Code Optima" }],
  viewport: "width=device-width, initial-scale=1",
};

const navigationItems: NavigationItem[] = [
];

function App({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative min-h-screen overflow-x-hidden'>
      {/* Optimized background with reduced complexity */}
      <div className='fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black'></div>
      
      {/* Reduced animation complexity - single layer */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none opacity-20'>
        <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(68,68,68,.1)_50%,transparent_100%)] bg-[length:200%_200%] animate-speed-lines-slow'></div>
      </div>
      
      {/* Optimized gradient orbs with reduced blur */}
      <div className='fixed top-0 left-0 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none'></div>
      <div className='fixed top-0 right-0 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none'></div>

      <AppNavBar navigationItems={navigationItems} />

      {/* Content */}
      <main className='relative flex flex-col max-w-[90rem] mx-auto'>
        {children}
      </main>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-950 font-inter`}>
        <SessionProvider>
          <App>
            {children}
          </App>
        </SessionProvider>
      </body>
    </html>
  );
}
