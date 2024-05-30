import { manrope, robotoFlex, robotoSlab } from '@/app/fonts';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';
import { twMerge } from 'tailwind-merge';

type BannerHomeProps = {
  image: string;
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
};

export default function BannerHome({
  image,
  title,
  description,
  buttonText,
  className,
}: BannerHomeProps) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="flex h-[290px] w-full flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center sm:h-[350px] lg:h-[345px]"
    >
      {/* overlay */}
      {/* <div className="h-full w-full overflow-hidden rounded-xl backdrop-blur-sm"> */}
      <div
        className={twMerge(
          'w-full text-white backdrop-blur bg-gradient-to-b from-cyan-400/20 to-emerald-300/40 p-4',
          manrope.className
        )}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl text-center text-slate-200 md:space-y-3">
          <h2
            className={twMerge(
              'text-3xl font-semibold leading-8 text-white drop-shadow-md lg:text-4xl',
              robotoSlab.className
            )}
          >
            <Balancer>{title}</Balancer>
          </h2>
          <p
            className="m-0 flex hidden items-center gap-3 text-xl text-blue-900/90 drop-shadow-md sm:block"
            style={{ margin: 0 }}
          >
            {description} <ChevronRight className="inline" />
          </p>

          {buttonText && (
            <Link href={'/nosotros'}>
              <Button className="sm:text-md rounded-full bg-gradient-to-b from-teal-400/80 to-teal-500/90 px-6 py-3 text-sm opacity-90 shadow-md ring-1 ring-slate-900/10 transition duration-300 ease-in-out hover:bg-opacity-90 hover:opacity-100 hover:shadow-xl sm:bg-opacity-50">
                {buttonText} <ChevronRight className="ml-1" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}
