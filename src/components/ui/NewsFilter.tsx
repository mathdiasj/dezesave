"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { NewsListCard } from "@/components/ui/Cards";
import { FadeIn } from "@/components/ui/FadeIn";
import { Post } from "@/lib/types";
import { Search } from "lucide-react";

function NewsFilterContent({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") || searchParams.get("tag") || "Todos";
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const param = searchParams.get("filter") || searchParams.get("tag");
    if (param) {
      setActiveFilter(param);
    }
  }, [searchParams]);

  const filters = useMemo(() => {
    const defaultFilters = ["Todos", "PlayStation", "Xbox", "Nintendo", "PC", "RPG", "Ação"];
    const allTags = posts.flatMap(p => p.tags || []);
    const unique = Array.from(new Set([...defaultFilters, ...allTags]));
    return unique;
  }, [posts]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (typeof window !== "undefined") {
      const url = filter.toLowerCase() === "todos"
        ? window.location.pathname
        : `${window.location.pathname}?filter=${encodeURIComponent(filter)}`;
      window.history.replaceState(null, "", url);
    }
  };

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesFilter = activeFilter.toLowerCase() === "todos" ||
        post.tags?.some(t => t.toLowerCase() === activeFilter.toLowerCase()) ||
        post.category?.toLowerCase() === activeFilter.toLowerCase();

      const matchesSearch = !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesFilter && matchesSearch;
    });
  }, [posts, activeFilter, searchQuery]);

  return (
    <>
      <FadeIn delay={0.1}>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-6 border-b border-white/10">
          <div className="flex flex-wrap gap-2">
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

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Buscar notícias..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 bg-white/5 border border-white/10 rounded px-4 py-2 text-sm font-inter text-white outline-none focus:border-blue-500 transition-colors"
            />
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, idx) => (
            <FadeIn key={post.id} delay={0.1 + idx * 0.05}>
              <NewsListCard post={post} />
            </FadeIn>
          ))
        ) : (
          <div className="py-12 text-center text-gray-500 font-inter">
            Nenhuma notícia encontrada para o filtro &quot;{activeFilter}&quot;.
          </div>
        )}
      </div>
    </>
  );
}

export function NewsFilter({ posts }: { posts: Post[] }) {
  return (
    <Suspense fallback={
      <div className="flex flex-col gap-8 py-8">
        {posts.map(post => (
          <NewsListCard key={post.id} post={post} />
        ))}
      </div>
    }>
      <NewsFilterContent posts={posts} />
    </Suspense>
  );
}

