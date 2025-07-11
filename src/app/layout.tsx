import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppNavBar, { NavigationItem } from "./client/components/NavBar";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Optima - AI-Powered Code Performance Optimization",
  description: "Code Optima is your AI co-pilot that hunts down performance slowpokes, fixes them in a flash, and rockets your app to warp speed—while you focus on what you love.",
};

const navigationItems: NavigationItem[] = [
];

function App({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative min-h-screen overflow-x-hidden'>
      {/* Main background */}
      <div className='fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black'></div>
      
      {/* Speed lines background effect - Layer 1 (subtle) */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none opacity-40'>
        <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(68,68,68,.1)_25%,rgba(68,68,68,.2)_50%,rgba(68,68,68,.1)_75%,transparent_100%)] bg-[length:300%_300%] animate-speed-lines-slow'></div>
      </div>
      
      {/* Speed lines background effect - Layer 2 (even more subtle) */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none opacity-30'>
        <div className='absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,rgba(68,68,68,.05)_25%,rgba(68,68,68,.1)_50%,rgba(68,68,68,.05)_75%,transparent_100%)] bg-[length:200%_200%] animate-speed-lines'></div>
      </div>
      
      {/* Gradient orbs with increased blur */}
      <div className='fixed top-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none'></div>
      <div className='fixed top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2 pointer-events-none'></div>

      <AppNavBar navigationItems={navigationItems} />

      {/* Content */}
      <div className='relative flex flex-col max-w-[90rem] mx-auto'>
        {children}
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-950`}>
        <SessionProvider>
          <App>
            {children}
          </App>
        </SessionProvider>
      </body>
    </html>
  );
}
