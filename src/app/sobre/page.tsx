import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre - dezeSAVE",
  description: "Este não é apenas um site sobre videogames. É um lugar para guardar as experiências que os jogos deixam.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-wider mb-6">
            SOBRE O <span className="text-blue-500">dezeSAVE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-inter italic max-w-2xl mx-auto">
            "Este não é apenas um site sobre videogames. É um lugar para guardar as experiências que os jogos deixam."
          </p>
        </header>

        <div className="flex justify-center mb-16">
          <div className="relative w-98 h-72 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl shadow-blue-500/10">
            <Image 
              src="/images/matheus.jpg" 
              alt="Matheus Dias"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose prose-invert prose-blue max-w-none font-inter text-lg leading-relaxed
            prose-headings:font-oswald prose-headings:uppercase prose-headings:tracking-wider prose-headings:mt-12
            prose-h2:text-4xl prose-h3:text-2xl prose-a:text-blue-400 hover:prose-a:text-blue-300
            prose-p:text-gray-300 prose-strong:text-white">
          <p>
            O <strong>dezeSAVE</strong> nasceu de uma vontade simples: falar sobre videogames de forma mais pessoal, menos mecânica e mais emocional. Em um cenário onde as notícias são dadas em velocidade absurda, senti falta de um espaço para simplesmente pausar e refletir sobre o que acabei de jogar.
          </p>
          
          <h2>O Conceito de "SAVE"</h2>
          <p>
            Cada review aqui é tratada como um "Save Point". É o registro de um momento no tempo, de uma experiência que tive com uma obra. A ideia é que, assim como num jogo onde você salva seu progresso antes de uma batalha difícil ou para não perder o que conquistou, eu salvo aqui os sentimentos e opiniões para não esquecê-los.
          </p>
          
          <div className="my-12 border-l-4 border-blue-500 pl-6 py-2 bg-white/5 rounded-r">
            <h3 className="!mt-0">O Autor</h3>
            <p className="!mb-0 text-gray-400">
              Sou um entusiasta de narrativas interativas, apaixonado por RPGs, Survival Horrors e qualquer jogo que consiga me fazer esquecer do mundo real por algumas horas. O dezeSAVE é meu diário aberto.
            </p>
          </div>
          
          <h2>Jogos Marcantes</h2>
          <ul>
            <li><strong>The Witcher 3: Wild Hunt</strong> - Pela forma como o mundo me engoliu.</li>
            <li><strong>Cyberpunk 2077</strong> - Por um momento importante.</li>
            <li><strong>Bioschok Infinite</strong> - Pela história e personagens</li>
            <li><strong>Resident Evil 4</strong> - Passei maior parte da minha infância jogando esse game</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

