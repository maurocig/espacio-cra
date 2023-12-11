import Banner from '@/components/banner-home';
import BannerPage from '@/components/banner-page';
import Box from '@/components/box';
import HomeActivityCard from '@/components/home-activity-card';
import HomeEventCard from '@/components/home-event-card';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type HomeProps = {
  className?: string;
};

export default function Home({ className }: HomeProps) {
  return (
    <>
      <Banner
        description="Bienvenidos a Espacio CRA"
        // title="Espacio CRA"
        image="/images/interior-cartel.jpg"
        // buttonText="Sobre nosotros"
        className="shadow-md ring-1 ring-gray-950/20 transition hover:shadow-lg"
      />
      {/* Eventos */}
      <div>
        {/* <h2 className="mb-2 text-3xl">Eventos</h2> */}
        <div className="grid h-[500px] grid-cols-1 gap-4 md:grid-cols-7 lg:gap-6">
          <HomeEventCard
            image="/images/musica-reggae.jpg"
            title="La Teja Pride"
            className="text-4xl md:col-span-4"
            overlayClassName="bg-secondary"
          />
          <div className="flex h-full w-full flex-row gap-4 md:col-span-3 md:flex-col lg:gap-6">
            <HomeEventCard
              image="/images/choppera.jpg"
              title="Degustación cervecera"
              overlayClassName="bg-orange-wheel"
            />
            <HomeEventCard
              image="/images/moda-disfraces-2.jpg"
              title="Desfile de moda"
              className="bg-[center_top_-80px]"
              overlayClassName="bg-bright-pink"
            />
          </div>
        </div>
      </div>

      {/* Actividades / talleres */}
      <div className="grid w-full gap-4 md:grid-cols-3 lg:gap-6">
        <HomeActivityCard
          image="/images/estudiante-violin.jpg"
          title="Escuela de música"
          className="aspect-square"
        />
        <HomeActivityCard
          image="/images/artista-tejidos.jpg"
          title="Taller de tejido"
        />
        <HomeActivityCard
          image="/images/taller-pintura.jpg"
          title="Taller de pintura"
        />
      </div>
    </>
  );
}
