"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ReviewCard } from "@/components/ui/Cards";
import { Post } from "@/lib/types";

export function SaveFilter({ reviews }: { reviews: Post[] }) {
  const [activeFilter, setActiveFilter] = useState("Todos");
  
  const filters = ["Todos", "RPG", "Ação", "Terror", "Aventura", "Indie"];

  const filteredReviews = activeFilter === "Todos" 
    ? reviews 
    : reviews.filter(post => 
        post.tags?.includes(activeFilter) || 
        post.genre?.includes(activeFilter) ||
        post.category === activeFilter
      );

  return (
    <>
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
          {filters.map((filter) => (
            <button 
              key={filter} 
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-oswald tracking-widest uppercase transition-colors rounded ${activeFilter === filter ? "bg-blue-600 text-white" : "border border-white/20 text-gray-400 hover:text-white hover:border-white/50"}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((post, idx) => (
            <FadeIn key={post.id} delay={0.2 + (idx * 0.1)}>
              <ReviewCard post={post} />
            </FadeIn>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-gray-500 font-inter">
            Nenhum save encontrado para essa categoria.
          </div>
        )}
      </div>
    </>
  );
}
