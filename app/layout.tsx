import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/navbar';
import Sidebar from '@/components/sidebar';
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Espacio CRA - Sitio oficial',
  description: 'El centro cultural de La Floresta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, 'bg-slate-100')}>
        <Navbar />
        <div className="m-auto grid max-w-[1400px] grid-cols-1 gap-4 p-4 md:grid-cols-[auto_1fr] lg:gap-6 lg:p-6">
          <Sidebar className="mt-[65px] hidden md:block" />
          <main
            className={
              'min-w-screen mt-[65px] flex min-h-[calc(100vh-120px)] flex-col gap-2 lg:gap-6'
            }
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
