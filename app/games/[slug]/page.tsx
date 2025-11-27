import { categories } from "@/utils/data";

export default function GamePage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{category?.name}</h1>
    </div>
  );
}
