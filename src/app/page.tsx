import { getFeaturedPost, getLatestPosts, getReviews, getNews } from "@/lib/data";
import { HeroCard, PostCard, ReviewCard, NewsListCard } from "@/components/ui/Cards";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredPost = getFeaturedPost();
  const latestPosts = getLatestPosts(3);
  const reviews = getReviews().slice(0, 4);
  const news = getNews().slice(0, 5);

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <FadeIn>
          <HeroCard post={featuredPost} />
        </FadeIn>
      </section>

      {/* Latest Saves Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-24">
        <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
          <div>
            <h2 className="font-oswald text-4xl uppercase tracking-wider">Últimos Saves</h2>
            <p className="text-gray-400 font-inter mt-1">O que andamos jogando e escrevendo.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.1}>
              <PostCard post={post} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-zinc-950 py-20 mb-20 border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-1 bg-blue-600 block"></span>
                <span className="text-blue-500 font-oswald tracking-widest text-sm">SAVE POINT</span>
              </div>
              <h2 className="font-oswald text-4xl md:text-5xl uppercase tracking-wider">Reviews em destaque</h2>
            </div>
            <Link href="/save" className="hidden md:flex items-center gap-2 text-blue-500 hover:text-white transition-colors font-oswald tracking-widest text-sm">
              VER TODOS <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.1}>
                <ReviewCard post={post} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link href="/save" className="flex items-center justify-center gap-2 text-blue-500 hover:text-white transition-colors font-oswald tracking-widest text-sm border border-blue-500/30 py-3 rounded">
              VER TODOS OS SAVES <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
              <h2 className="font-oswald text-4xl uppercase tracking-wider">Notícias</h2>
              <Link href="/noticias" className="flex items-center gap-2 text-blue-500 hover:text-white transition-colors font-oswald tracking-widest text-sm">
                VER MAIS <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              {news.map((post, i) => (
                <FadeIn key={post.id} delay={i * 0.1}>
                  <NewsListCard post={post} />
                </FadeIn>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-lg sticky top-24">
              <h3 className="font-oswald text-2xl uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 block"></span> Mais Lidos
              </h3>
              <div className="flex flex-col gap-5">
                {latestPosts.map((post, index) => (
                  <Link key={post.id} href={`/${post.type === 'review' ? 'save' : 'noticias'}/${post.slug}`} className="group flex gap-4">
                    <span className="font-oswald text-4xl font-bold text-white/10 group-hover:text-blue-500/30 transition-colors">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="font-oswald text-lg group-hover:text-blue-400 transition-colors leading-tight">
                        {post.title}
                      </h4>
                      <p className="text-gray-500 font-inter text-xs mt-1">
                        {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).toUpperCase()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
