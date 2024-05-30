import { lato, manrope, poppins, robotoSlab, rubik } from '@/app/fonts';
import Box from '@/components/box';
import { Calendar, Clock, LucideIcon, Ticket, TicketIcon } from 'lucide-react';
import { Manrope } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

type EventCardProps = {
  image?: string;
  title?: string;
  description?: string;
  time?: string;
  icon?: LucideIcon;
  className?: string;
  overlayClassName?: string;
};

export default function EventCard({
  image,
  title,
  description,
  className,
  overlayClassName,
  icon: Icon,
}: EventCardProps) {
  return (
    <Box
      className={twMerge(
        'relative transition group text-2xl h-full w-full overflow-hidden hover:shadow-lg hover:shadow-black/20',
        className
      )}
      backgroundImage={image}
    >
      {/* overlay */}
      <div
        className={twMerge(
          'absolute shadow-inner justify-between shadow-black/40 group-hover:bottom-0 h-[150px] transition-position transform-gpu duration-200 left-0 flex bottom-[-50px] w-full gap-2 bg-secondary/80 font-semibold p-4 text-slate-100 drop-shadow-lg backdrop-blur',
          overlayClassName,
          manrope.className
        )}
      >
        <div className="">
          <span
            className={twMerge(
              'text-primary-foreground flex items-center gap-2 drop-shadow-lg',
              robotoSlab.className
            )}
          >
            {title}
          </span>
          <div className="flex flex-col gap-2 text-lg text-primary">
            <span className="flex flex-row items-center gap-2 font-thin drop-shadow-md">
              <TicketIcon /> <b className="font-semibold">Jueves 27</b> – 18:00
              hs.
            </span>
          </div>
        </div>

        <div className="flex h-fit items-center gap-2 self-end rounded-full bg-black/80 px-4 py-2 text-sm font-thin opacity-0 transition group-hover:opacity-100">
          {Icon && <Icon size={14} strokeWidth="2" />} Música en vivo
        </div>
      </div>
    </Box>
  );
}
