import Pokemon from '@/components/layouts/Pokemon';

export default function Page({ params }: { params: { slug: string } }) {
  return <Pokemon pid={params.slug} />;
}
