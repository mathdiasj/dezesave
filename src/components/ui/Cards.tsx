import Link from "next/link";
import { Post } from "@/lib/types";
import { cn } from "@/lib/utils";

export function HeroCard({ post }: { post: Post }) {
  return (
    <Link href={`/${post.type === 'review' ? 'save' : 'noticias'}/${post.slug}`} className="group relative block w-full h-[60vh] min-h-[500px] rounded-xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${post.coverImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-600 text-white font-oswald px-3 py-1 text-sm tracking-wider uppercase">
            {post.category}
          </span>
          <span className="text-gray-300 font-inter text-sm">
            {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-oswald text-white mb-4 group-hover:text-blue-400 transition-colors uppercase leading-tight max-w-4xl">
          {post.title}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-inter max-w-2xl line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/${post.type === 'review' ? 'save' : 'noticias'}/${post.slug}`} className="group flex flex-col gap-4">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${post.coverImage})` }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-blue-500 font-oswald text-sm tracking-widest uppercase">
            {post.category}
          </span>
          <span className="w-1 h-1 bg-gray-600 rounded-full" />
          <span className="text-gray-500 font-inter text-xs">
            {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
          </span>
          {post.readingTime && (
            <>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span className="text-gray-500 font-inter text-xs">{post.readingTime}</span>
            </>
          )}
        </div>
        <h3 className="text-xl md:text-2xl font-bold font-oswald group-hover:text-blue-400 transition-colors uppercase">
          {post.title}
        </h3>
        <p className="text-gray-400 font-inter text-sm line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

export function ReviewCard({ post }: { post: Post }) {
  return (
    <Link href={`/save/${post.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${post.coverImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      
      {post.score && (
        <div className="absolute top-4 right-4 bg-blue-600 w-12 h-12 flex items-center justify-center rounded-sm shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
          <span className="font-oswald text-xl font-bold text-white">{post.score}</span>
        </div>
      )}

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.platform?.map(plat => (
            <span key={plat} className="text-xs font-inter border border-white/20 px-2 py-1 rounded bg-black/50 text-gray-300">
              {plat}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold font-oswald text-white group-hover:text-blue-400 transition-colors uppercase leading-tight">
          {post.title}
        </h3>
        <div className="mt-2 text-gray-400 font-inter text-xs flex items-center gap-2">
          {post.genre?.join(' • ')}
        </div>
      </div>
    </Link>
  );
}

export function NewsListCard({ post }: { post: Post }) {
  return (
    <Link href={`/noticias/${post.slug}`} className="group flex gap-4 md:gap-6 border-b border-white/10 pb-6">
      <div className="w-1/3 md:w-1/4 shrink-0 relative aspect-video overflow-hidden rounded">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${post.coverImage})` }}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-500 font-oswald text-xs tracking-widest uppercase">
            {post.category}
          </span>
          <span className="text-gray-500 font-inter text-xs">
            {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).toUpperCase()}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-bold font-oswald group-hover:text-blue-400 transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-400 font-inter text-sm line-clamp-1 mt-2 hidden md:block">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

