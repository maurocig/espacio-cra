import { twMerge } from 'tailwind-merge';

type BoxProps = {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
};

export default function Box({
  children,
  className,
  backgroundImage,
}: BoxProps) {
  return (
    <div
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : { backgroundImage: 'none' }
      }
      className={twMerge(
        `flex flex-col lg:p-6 ring-black/10 ring-[1px] rounded-xl bg-white/30 bg-cover  p-3 md:p-4 bg-center hover:shadow-lg shadow-md cursor-pointer transition `,
        className
      )}
    >
      {children}
    </div>
  );
}
