import { getPostBySlug, getReviews } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  const reviews = getReviews();
  return reviews.map((post) => ({
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

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post || post.type !== 'review') {
    notFound();
  }

  return (
    <article className="pt-24 pb-20">
      {/* Header */}
      <header className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-blue-600 text-white font-oswald px-3 py-1 text-sm tracking-wider uppercase">
            REVIEW
          </span>
          {post.genre?.map(g => (
            <span key={g} className="text-gray-400 font-inter text-xs border border-white/20 px-2 py-1 rounded">
              {g}
            </span>
          ))}
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold font-oswald uppercase leading-tight mb-6 text-balance">
          {post.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 font-inter max-w-4xl mb-8 leading-relaxed">
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
                {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
          {post.readingTime && (
            <div className="text-gray-400 font-oswald text-sm tracking-widest uppercase border-l border-white/20 pl-6">
              {post.readingTime}
            </div>
          )}
        </div>
      </header>

      {/* Cover Image */}
      <div className="w-full aspect-video md:aspect-[21/9] relative mb-16">
        <Image 
          src={post.coverImage} 
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content & Sidebar */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="lg:w-2/3 xl:w-3/4">
            <div 
              className="prose prose-invert prose-blue max-w-none font-inter text-lg leading-relaxed
                prose-headings:font-oswald prose-headings:uppercase prose-headings:tracking-wider prose-headings:mt-12
                prose-h2:text-4xl prose-h3:text-2xl prose-a:text-blue-400 hover:prose-a:text-blue-300
                prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Verdict Section */}
            {post.score && post.scoreDetails && (
              <div className="mt-20 border border-white/10 rounded-xl overflow-hidden bg-zinc-950">
                <div className="bg-blue-600 p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                  <div>
                    <h2 className="font-oswald text-4xl uppercase mb-2">Veredito</h2>
                    <p className="font-inter text-blue-100 text-lg">Uma experiência inesquecível</p>
                  </div>
                  <div className="text-7xl font-oswald font-bold tabular-nums">
                    {post.score.toFixed(1)}
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {Object.entries(post.scoreDetails).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex justify-between font-oswald tracking-widest text-sm mb-2 uppercase">
                          <span className="text-gray-400">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="text-white font-bold">{value}</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="bg-blue-500 h-full rounded-full" 
                            style={{ width: `${(value / 10) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Index */}
          <aside className="lg:w-1/3 xl:w-1/4 hidden lg:block">
            <div className="sticky top-32">
              {/* Plataformas */}
              <div>
                <h3 className="font-oswald text-sm text-gray-500 uppercase tracking-widest mb-4">
                  Testado em
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.platform?.map(plat => (
                    <span key={plat} className="text-sm font-inter bg-white/5 border border-white/10 px-3 py-1.5 rounded text-gray-300">
                      {plat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          
        </div>
      </div>
    </article>
  );
}

