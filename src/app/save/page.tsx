import { getReviews } from "@/lib/data";

import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import { SaveFilter } from "@/components/ui/SaveFilter";

export const metadata: Metadata = {
  title: "Save Point - dezeSAVE",
  description: "Jogos que merecem ser lembrados. Nossas análises e reviews.",
};

export default function SavePage() {
  const reviews = getReviews();

  return (
    <div className="pt-32 pb-20 container mx-auto px-4 lg:px-8">
      <FadeIn>
        <div className="mb-16">
          <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-wider mb-4">SAVE POINT</h1>
          <p className="text-xl text-gray-400 font-inter">Jogos que merecem ser lembrados.</p>
        </div>
      </FadeIn>

      <SaveFilter reviews={reviews} />

      {/* Pagination (Mock) */}
      <div className="flex justify-center">
        <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors font-oswald tracking-widest px-8 py-3 text-sm rounded">
          CARREGAR MAIS SAVES
        </button>
      </div>
    </div>
  );
}
