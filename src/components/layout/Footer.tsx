import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-1 mb-6 opacity-90 hover:opacity-100 transition-opacity">
              
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Um diário sobre videogames. Análises, notícias e opiniões com identidade própria.
            </p>
            <div className="flex gap-4">
              <a href="https://yourgamerprofile.com/deze" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Your Game Profile</a>
              <a href="x.com/mathjdias" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">X (Twitter)</a>
              <a href="https://www.twitch.tv/dezezs" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Twitch</a>
              <a href="https://github.com/mathdiasj" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">GitHub</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-oswald tracking-widest mb-6 text-sm text-gray-500">NAVEGAÇÃO</h4>
            <ul className="space-y-4 font-inter text-sm text-gray-300">
              <li><Link href="/save" className="hover:text-blue-500 transition-colors">Save Point</Link></li>
              <li><Link href="/noticias" className="hover:text-blue-500 transition-colors">Notícias</Link></li>
              <li><Link href="/sobre" className="hover:text-blue-500 transition-colors">Sobre</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-oswald tracking-widest mb-6 text-sm text-gray-500">CATEGORIAS</h4>
            <ul className="space-y-4 font-inter text-sm text-gray-300">
              <li><Link href="/save?filter=rpg" className="hover:text-blue-500 transition-colors">RPG</Link></li>
              <li><Link href="/save?filter=acao" className="hover:text-blue-500 transition-colors">Ação</Link></li>
              <li><Link href="/save?filter=indie" className="hover:text-blue-500 transition-colors">Indie</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-inter">
          <p>© 2026 dezeSAVE. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
