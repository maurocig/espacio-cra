'use client';

import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Mail, MenuIcon, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  return (
    <div className="fixed z-50 mb-[65px] flex h-[65px] w-full flex-col items-center justify-center border-b border-gray-900/20 bg-gradient-to-br from-slate-100 to-white/80 shadow-md backdrop-blur-sm backdrop-filter">
      <div className="7xl:px-0 flex w-full max-w-7xl justify-between self-center px-4">
        <div className="flex items-center">
          <Link href={'/'}>
            <div className="relative h-[32px] w-[70px] overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Logotipo de Reci"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        <div className="hidden h-full flex-col items-start justify-center text-sm md:flex">
          <div className="flex items-center gap-2">
            <Mail size={12} />
            <span className="text-slate-800">ventasreci@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={12} /> <span className="text-slate-800">22970648</span>
          </div>
        </div>
        <MenuIcon size={35} className="md:hidden" onClick={() => {}} />
      </div>
    </div>
  );
}
