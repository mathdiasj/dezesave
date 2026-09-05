import { getPostBySlug, getNews, getLatestPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { NewsListCard } from "@/components/ui/Cards";

export function generateStaticParams() {
  const news = getNews();
  return news.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} - dezeSAVE`,
    description: post.excerpt,
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const relatedNews = getNews().filter(n => n.id !== post?.id).slice(0, 3);
  
  if (!post || post.type !== 'news') {
    notFound();
  }

  return (
    <article className="pt-24 pb-20">
      {/* Header */}
      <header className="container mx-auto px-4 lg:px-8 mb-12 max-w-5xl">
        <div className="flex items-center gap-2 mb-6">
          <Link 
            href="/noticias"
            className="bg-blue-600 hover:bg-blue-700 text-white font-oswald px-3 py-1 text-sm tracking-wider uppercase transition-colors"
          >
            {post.category}
          </Link>
          {post.tags?.map(t => (
            <Link 
              key={t} 
              href={`/noticias?filter=${encodeURIComponent(t)}`}
              className="text-gray-400 hover:text-white hover:border-blue-500 transition-colors font-inter text-xs border border-white/20 px-2 py-1 rounded"
            >
              {t}
            </Link>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-oswald uppercase leading-tight mb-6 text-balance">
          {post.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 font-inter mb-8 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-6 border-t border-white/10 pt-6">
          <div className="flex items-center gap-3">
            {post.author.avatar ? (
              <Image 
                src={post.author.avatar} 
                alt={post.author.name} 
                width={40} 
                height={40} 
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center font-oswald text-white">
                {post.author.name.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-bold font-inter text-sm">{post.author.name}</p>
              <p className="text-gray-500 font-inter text-xs">
                {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="w-full max-w-6xl mx-auto aspect-video md:aspect-[21/9] relative mb-16 px-4 lg:px-8">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div 
          className="prose prose-invert prose-blue max-w-none font-inter text-lg leading-relaxed
            prose-headings:font-oswald prose-headings:uppercase prose-headings:tracking-wider prose-headings:mt-12
            prose-h2:text-4xl prose-h3:text-2xl prose-a:text-blue-400 hover:prose-a:text-blue-300
            prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300 mb-20"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Leia Também */}
        <div className="border-t border-white/10 pt-16">
          <h3 className="font-oswald text-3xl uppercase tracking-wider mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-500 block"></span> Leia Também
          </h3>
          <div className="flex flex-col gap-6">
            {relatedNews.map(rel => (
              <NewsListCard key={rel.id} post={rel} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

