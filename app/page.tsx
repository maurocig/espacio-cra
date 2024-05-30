import BannerHome from '@/components/banner-home';
import ActivityCard from '@/components/activity-card';
import EventCard from '@/components/event-card';
import Image from 'next/image';
import { Music, Music2Icon, MusicIcon } from 'lucide-react';

type HomeProps = {
  className?: string;
};

export default function Home({ className }: HomeProps) {
  return (
    <>
      <BannerHome
        description="Conocé nuestro espacio"
        title="El centro cultural de La Floresta"
        image="/images/interior-cartel.jpg"
        // buttonText="Sobre nosotros"
        className="shadow-md ring-1 ring-gray-950/20 transition hover:shadow-lg"
      />
      {/* Eventos */}
      <div>
        {/* <h2 className="mb-2 text-3xl">Eventos</h2> */}
        <div className="grid h-[500px] grid-cols-1 gap-4 md:grid-cols-7 lg:gap-6">
          <EventCard
            image="/images/musica-reggae.jpg"
            title="La Teja Pride"
            icon={Music2Icon}
            overlayClassName="bg-emerald-400/80"
            className="text-4xl md:col-span-4"
          />
          <div className="flex h-full w-full flex-row gap-4 md:col-span-3 md:flex-col lg:gap-6">
            <EventCard
              image="/images/choppera.jpg"
              title="Degustación cervecera"
              overlayClassName="bg-orange-wheel/80"
            />
            <EventCard
              image="/images/moda-disfraces-2.jpg"
              title="Desfile de moda"
              overlayClassName="bg-bright-pink/80"
              className="bg-[center_top_-80px]"
            />
          </div>
        </div>
      </div>

      {/* Actividades / talleres */}
      <div className="grid w-full gap-4 md:grid-cols-3 lg:gap-6">
        <ActivityCard
          image="/images/estudiante-violin.jpg"
          title="Escuela de música"
          className="aspect-square"
        />
        <ActivityCard
          image="/images/artista-tejidos.jpg"
          title="Taller de tejido"
          overlayClassName="bg-gradient-to-b from-indigo-400/40 to-violet-400/60"
        />
        <ActivityCard
          image="/images/taller-pintura.jpg"
          title="Taller de pintura"
          overlayClassName="bg-gradient-to-b from-sky-400/40 to-indigo-400/60"
        />
      </div>
    </>
  );
}
