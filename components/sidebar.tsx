'use client';

import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import Box from './box';
import SidebarItem from './sidebar-item';
import {
  Brush,
  Building,
  Building2,
  BuildingIcon,
  Calendar,
  Component,
  Home,
  Image,
  Info,
  Mail,
  Music,
  PaintBucket,
  Ticket,
} from 'lucide-react';
import { FaHouseUser } from 'react-icons/fa';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const homeItems = [
    {
      name: 'Inicio',
      url: '/',
      icon: Home,
      active: pathname === '/',
    },
    {
      name: 'El espacio',
      url: '/espacio',
      icon: Building2,
      active: pathname === '/espacio',
    },
  ];

  const mainItems = [
    {
      name: 'Eventos',
      url: '/eventos',
      icon: Ticket,
      active: pathname === '/eventos',
    },
    {
      name: 'Actividades',
      url: '/actividades',
      icon: Calendar,
      active: pathname === '/actividades',
    },
    {
      name: 'Galería',
      url: '/galeria',
      icon: Image,
      active: pathname === '/galeria',
    },
  ];

  const otherItems = [
    {
      name: 'Nosotros',
      url: '/nosotros',
      icon: Info,
      active: pathname === '/nosotros',
    },
    {
      name: 'Contacto',
      url: '/contacto',
      icon: Mail,
      active: pathname === '/contacto',
    },
  ];

  return (
    <div className={twMerge('min-w-[230px] ', className)}>
      <div className="fixed flex min-w-[230px] flex-col space-y-4 text-slate-700 lg:space-y-6">
        {/* Home items */}
        <Box className="flex flex-col gap-2 hover:shadow-md lg:p-3">
          {homeItems.map((item, i) => (
            <SidebarItem
              active={item.active}
              name={item.name}
              url={item.url}
              icon={item.icon}
              key={'productItem' + i}
            />
          ))}
        </Box>

        {/* items */}
        <Box className="flex flex-col gap-2 bg-slate-100 hover:shadow-md lg:p-3">
          {mainItems.map((item, i) => (
            <SidebarItem
              name={item.name}
              url={item.url}
              icon={item.icon}
              active={item.active}
              key={'item' + i}
            />
          ))}
        </Box>

        {/* Otros */}
        <Box className="flex flex-col gap-2 hover:shadow-md lg:p-3">
          {otherItems.map((item, i) => (
            <SidebarItem
              active={item.active}
              name={item.name}
              url={item.url}
              icon={item.icon}
              key={'productItem' + i}
            />
          ))}
        </Box>
      </div>
    </div>
  );
}
