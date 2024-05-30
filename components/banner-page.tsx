'use client';
import { cn } from '@/lib/utils';
import { ArrowLeftCircle, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type BannerPageProps = {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  className?: string;
  bgPosition?: string;
};

export default function BannerPage({
  image,
  title,
  description,
  buttonText,
  className,
  bgPosition,
}: BannerPageProps) {
  const router = useRouter();
  return (
    <div
      className={cn(
        'h-[250px] md:h-[208px] bg-slate-100/50 w-full rounded-lg relative bg-cover bg-no-repeat sm:aspect-video shadow-md ring-gray-800/10 ring-1 ',
        bgPosition
      )}
      // style={{ backgroundImage: `url(${image})` }}
    >
      <button
        onClick={() => router.back()}
        className="absolute left-3 top-3 z-10 mb-3 md:top-4 lg:left-4"
      >
        <ArrowLeftCircle
          size={30}
          strokeWidth={1.3}
          className="font-extralight text-gray-700/80 transition hover:text-gray-700"
        />
      </button>
      {/* overlay */}
      <div className={twMerge('h-full w-full rounded-lg ', className)}>
        <div className="flex h-full w-full items-center justify-start space-y-2 rounded-b-lg text-start sm:w-2/3 md:space-y-3 lg:w-1/2">
          <div className={twMerge('flex w-full flex-col items-start rounded-b-lg p-4 pl-6')}>
            <h2 className="md:drop-shadow-darker text-2xl font-semibold leading-5 text-orange-700 drop-shadow-lg sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p
              className="md:drop-shadow-darker m-0 text-2xl text-slate-700/90 opacity-80 drop-shadow-lg"
              style={{ margin: 0 }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
