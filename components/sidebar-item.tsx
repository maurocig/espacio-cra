import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

type SidebarItemProps = {
  name: string;
  url: string;
  icon: LucideIcon | IconType;
  active: boolean;
};

export default function SidebarItem({
  name,
  url,
  icon: Icon,
  active,
}: SidebarItemProps) {
  return (
    <Link href={url} onClick={() => {}}>
      <div
        className={twMerge(
          'flex min-w-full items-center rounded-md px-3 py-2 transition duration-200 hover:bg-gray-500/20 ',
          active && 'bg-primary text-slate-100 hover:bg-primary'
        )}
      >
        <Icon className="mr-4 inline-block" size={20} />{' '}
        <p className="inline">{name}</p>
      </div>
    </Link>
  );
}
