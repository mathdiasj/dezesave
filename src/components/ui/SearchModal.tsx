"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/types";
// Mock data is small enough to import directly for client search
import { getLatestPosts } from "@/lib/data"; 

export function SearchModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Get all posts once when modal opens
  const allPosts = useRef<Post[]>([]);
  
  useEffect(() => {
    if (isOpen) {
      allPosts.current = getLatestPosts(100); // Get basically all mock posts
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      setResults([]);
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const q = query.toLowerCase();
      const filtered = allPosts.current.filter(post => 
        post.title.toLowerCase().includes(q) || 
        post.category.toLowerCase().includes(q) ||
        post.tags.some(t => t.toLowerCase().includes(q))
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-zinc-950 border border-white/10 rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center border-b border-white/10 px-4 py-4">
          <Search size={20} className="text-gray-500 mr-3 shrink-0" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Buscar análises, notícias, clássicos..." 
            className="flex-1 bg-transparent border-none outline-none text-white font-inter text-lg placeholder:text-gray-600"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors ml-3 shrink-0">
            <X size={20} />
          </button>
        </div>

        {query.trim().length > 1 && (
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {results.length > 0 ? (
              <div className="flex flex-col">
                {results.map((post) => (
                  <Link 
                    key={post.id} 
                    href={`/${post.type === 'review' ? 'save' : post.type === 'retro' ? 'retro' : 'noticias'}/${post.slug}`}
                    onClick={onClose}
                    className="flex gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors group"
                  >
                    <div className="w-20 h-14 relative rounded overflow-hidden shrink-0">
                      <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center overflow-hidden">
                      <span className="text-xs font-oswald text-blue-500 uppercase tracking-widest">{post.category}</span>
                      <h4 className="text-white font-oswald text-lg truncate group-hover:text-blue-400 transition-colors">{post.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500 font-inter">
                Nenhum resultado encontrado para "{query}".
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
