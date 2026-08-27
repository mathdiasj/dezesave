import { getReviews } from "@/lib/data";
import { ReviewCard } from "@/components/ui/Cards";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Save Point - dezeSAVE",
  description: "Jogos que merecem ser lembrados. Nossas análises e reviews.",
};

export default function SavePage() {
  const reviews = getReviews();
  const filters = ["Todos", "RPG", "Ação", "Terror", "Aventura", "Indie"];

  return (
    <div className="pt-32 pb-20 container mx-auto px-4 lg:px-8">
      <FadeIn>
        <div className="mb-16">
          <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-wider mb-4">SAVE POINT</h1>
          <p className="text-xl text-gray-400 font-inter">Jogos que merecem ser lembrados.</p>
        </div>
      </FadeIn>

      {/* Filters (UI only) */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
          {filters.map((filter, idx) => (
            <button 
              key={filter} 
              className={`px-4 py-2 text-sm font-oswald tracking-widest uppercase transition-colors rounded ${idx === 0 ? 'bg-blue-600 text-white' : 'border border-white/20 text-gray-400 hover:text-white hover:border-white/50'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {reviews.map((post, idx) => (
          <FadeIn key={post.id} delay={0.2 + (idx * 0.1)}>
            <ReviewCard post={post} />
          </FadeIn>
        ))}
      </div>

      {/* Pagination (Mock) */}
      <div className="flex justify-center">
        <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors font-oswald tracking-widest px-8 py-3 text-sm rounded">
          CARREGAR MAIS SAVES
        </button>
      </div>
    </div>
  );
}
