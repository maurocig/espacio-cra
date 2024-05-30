import {
  lato,
  manrope,
  poppins,
  robotoFlex,
  robotoSlab,
  rubik,
} from '@/app/fonts';
import Box from '@/components/box';
import { Calendar, Clock } from 'lucide-react';
import { Manrope } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

type ActivityCardProps = {
  image?: string;
  title?: string;
  description?: string;
  className?: string;
  overlayClassName?: string;
};

export default function ActivityCard({
  image,
  title,
  description,
  className,
  overlayClassName,
}: ActivityCardProps) {
  return (
    <Box
      className={twMerge(
        'relative transition group h-full w-full overflow-hidden text-2xl hover:shadow-lg hover:shadow-black/20',
        className
      )}
      backgroundImage={image}
    >
      <div
        className={twMerge(
          'absolute shadow-inner justify-between shadow-black/40 group-hover:bottom-0 h-[150px] transition-all transform-gpu duration-200 left-0 flex bottom-[-50px] w-full gap-2 bg-secondary/80 font-semibold p-4 text-slate-100 drop-shadow-lg backdrop-blur',
          overlayClassName,
          manrope.className
        )}
      >
        <div className="flex flex-col">
          <div className="text-primary-foreground">{title}</div>
          <div
            className={twMerge(
              'flex text-lg flex-col gap-2 text-primary',
              manrope.className
            )}
          >
            <span className="flex flex-row items-center gap-2 font-thin">
              <Calendar /> <b className="font-semibold">Martes</b> – 14:00 hs.
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </Box>
  );
}
