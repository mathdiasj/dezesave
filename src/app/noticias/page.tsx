import { getNews, getLatestPosts } from "@/lib/data";
import { NewsListCard } from "@/components/ui/Cards";
import { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Notícias - dezeSAVE",
  description: "O que está acontecendo no mundo dos games.",
};

export default function NewsPage() {
  const news = getNews();
  const latestPosts = getLatestPosts(3);
  const categories = ["PlayStation", "Xbox", "Nintendo", "PC", "Games", "Indústria", "Tecnologia"];

  return (
    <div className="pt-32 pb-20 container mx-auto px-4 lg:px-8">
      <div className="mb-16">
        <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-wider mb-4">NOTÍCIAS</h1>
        <p className="text-xl text-gray-400 font-inter">O que está acontecendo no mundo dos games.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Feed */}
        <div className="lg:w-2/3 xl:w-3/4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map(cat => (
                <button key={cat} className="text-sm font-oswald tracking-widest text-gray-400 hover:text-white transition-colors">
                  {cat}
                </button>
              ))}
            </div>
            
            {/* Fake Search */}
            <div className="relative w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Buscar notícias..." 
                className="w-full md:w-64 bg-white/5 border border-white/10 rounded px-4 py-2 text-sm font-inter text-white outline-none focus:border-blue-500 transition-colors"
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {news.map(post => (
              <NewsListCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors font-oswald tracking-widest px-8 py-3 text-sm rounded">
              CARREGAR MAIS NOTÍCIAS
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 xl:w-1/4">
          <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-lg sticky top-24">
            <h3 className="font-oswald text-2xl uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 block"></span> Mais Recentes
            </h3>
            <div className="flex flex-col gap-5">
              {latestPosts.map((post, index) => (
                <Link key={post.id} href={`/${post.type === 'review' ? 'save' : 'noticias'}/${post.slug}`} className="group flex gap-4">
                  <span className="font-oswald text-2xl font-bold text-white/10 group-hover:text-blue-500/30 transition-colors">
                    0{index + 1}
                  </span>
                  <div>
                    <span className="text-blue-500 text-xs font-oswald tracking-widest uppercase mb-1 block">
                      {post.category}
                    </span>
                    <h4 className="font-oswald text-lg group-hover:text-blue-400 transition-colors leading-tight">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

