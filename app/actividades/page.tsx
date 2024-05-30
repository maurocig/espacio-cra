import BannerPage from '@/components/banner-page';

type ActivitiesPageProps = {};

export default async function ActivitiesPage({}: ActivitiesPageProps) {
  return (
    <>
      <BannerPage
        title="Actividades"
        description="Todas las actividades"
        image="/images/proyector-colores.jpg"
        bgPosition="bg-center"
        className="text-slate-200"
      />
    </>
  );
}
