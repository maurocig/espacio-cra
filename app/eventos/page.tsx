import BannerPage from '@/components/banner-page';
import Box from '@/components/box';

type EventsPageProps = {};

export default function EventsPage({}: EventsPageProps) {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <BannerPage
        title="Eventos"
        description="La semana en CRA"
        image="/images/proyector-colores.jpg"
        bgPosition="bg-center"
        className="text-slate-200"
      />
      <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
        <Box className="aspect-square bg-slate-100">Evento 1</Box>
        <Box className="aspect-square bg-slate-100">Evento 2</Box>
        <Box className="aspect-square bg-slate-100">Evento 3</Box>
      </div>
    </div>
  );
}
