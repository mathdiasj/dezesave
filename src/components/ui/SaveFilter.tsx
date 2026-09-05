"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { ReviewCard } from "@/components/ui/Cards";
import { Post } from "@/lib/types";

function SaveFilterContent({ reviews }: { reviews: Post[] }) {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") || searchParams.get("tag") || "Todos";
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    const param = searchParams.get("filter") || searchParams.get("tag");
    if (param) {
      setActiveFilter(param);
    }
  }, [searchParams]);

  const defaultFilters = ["Todos", "RPG", "Ação", "Terror", "Aventura", "Indie"];
  const filters = useMemo(() => {
    const allTagsAndGenres = reviews.flatMap(p => [...(p.genre || []), ...(p.tags || [])]);
    const unique = Array.from(new Set([...defaultFilters, ...allTagsAndGenres]));
    return unique;
  }, [reviews]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (typeof window !== "undefined") {
      const url = filter.toLowerCase() === "todos"
        ? window.location.pathname
        : `${window.location.pathname}?filter=${encodeURIComponent(filter)}`;
      window.history.replaceState(null, "", url);
    }
  };

  const filteredReviews = useMemo(() => {
    if (activeFilter.toLowerCase() === "todos") return reviews;
    return reviews.filter(post =>
      post.tags?.some(t => t.toLowerCase() === activeFilter.toLowerCase()) ||
      post.genre?.some(g => g.toLowerCase() === activeFilter.toLowerCase()) ||
      post.category?.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [reviews, activeFilter]);

  return (
    <>
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
          {filters.map((filter) => {
            const isActive = activeFilter.toLowerCase() === filter.toLowerCase();
            return (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 text-sm font-oswald tracking-widest uppercase transition-colors rounded ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "border border-white/20 text-gray-400 hover:text-white hover:border-white/50"
                }`}
              >
                {filter}
              </button>
            );
          })}
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
            Nenhum save encontrado para o filtro &quot;{activeFilter}&quot;.
          </div>
        )}
      </div>
    </>
  );
}

export function SaveFilter({ reviews }: { reviews: Post[] }) {
  return (
    <Suspense fallback={
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {reviews.map((post, idx) => (
          <FadeIn key={post.id} delay={0.2 + (idx * 0.1)}>
            <ReviewCard post={post} />
          </FadeIn>
        ))}
      </div>
    }>
      <SaveFilterContent reviews={reviews} />
    </Suspense>
  );
}
