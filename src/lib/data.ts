import { Post } from './types';

export const mockPosts: Post[] = [
  {
    id: '1',
    slug: 'the-witcher-3',
    title: 'The Witcher 3 e o jogo que mudou minha relação com videogames',
    excerpt: 'Uma jornada inesquecível pelo Continente que redefiniu o que esperamos de um RPG de mundo aberto.',
    content: `
      <h2>Uma Obra-Prima Impecável</h2>
      <p>Eu não lembro exatamente quando The Witcher 3 deixou de ser apenas um jogo para mim. Talvez tenha sido em uma noite qualquer, sentado jogando sem perceber o horário. Talvez tenha sido depois de passar tempo demais em uma taverna jogando Gwent quando eu deveria estar fazendo uma missão. Ou talvez tenha sido simplesmente naquela sensação estranha de desligar o jogo e já estar pensando em quando eu poderia voltar.

Eu estava há muito tempo procurando por alguma coisa que me fizesse sentir aquela vontade genuína de continuar jogando. Eu começava jogos, jogava algumas horas, mas alguma coisa sempre faltava. A empolgação desaparecia. Eu parava. Começava outro. E repetia tudo de novo. Esse jogo me fez ter calma.

Pra mim The Witcher é desacelerar, achar paz em um mundo que monstros, pessoas ruins e guerras.</p>
      
      <h3>Personagens, ambientação e história</h3>
      <p>Se existe uma coisa que faz The Witcher 3 permanecer tão vivo na memória, é a maneira como ele constrói seu mundo. Não é apenas um mapa grande. É um mundo que parece ter existido antes de você chegar e que continuará existindo depois que você for embora.

Geralt é, obviamente, o centro de tudo. Mas o que torna Geralt tão interessante é justamente o fato de ele não parecer um protagonista tradicional. Ele é um homem cansado, alguém que já viu guerras, monstros, morte e sofrimento demais para acreditar que o mundo é simplesmente dividido entre heróis e vilões. Geralt parece indiferente em muitos momentos, mas quanto mais tempo passamos com ele, mais percebemos que essa indiferença é quase uma armadura, uma casca criada diante de tanta dor que ele sentiu, mas que desaparece quando o assunto é a Ciri.

Ciri não funciona apenas como alguém que Geralt precisa encontrar. Ela representa uma ligação emocional que dá um peso enorme à jornada. Existe uma preocupação constante com o destino dela, mas também existe algo muito mais humano: a relação entre os dois, um vinculo de pai e filha.

Com o amor exsite Yennifer e Triss, cada uma com uma personalidade única.

Yennifer, uma personagem difícil, intensa e muitas vezes complicada de compreender. A relação dela com Geralt não é construída para ser simplesmente romântica ou bonita. Existe conflito, orgulho, ressentimento, carinho e uma quantidade enorme de história entre os dois. O que torna um amor único, ao decorrer de jogo vemos o quanto Geralt se importa com ela e tem boas memorias em sua companhia.

Triss segue um caminho totalmente diferente. Ela é mais calorosa, mais acessível e cria uma dinâmica completamente diferente com Geralt. É fácil, mas quem disse que o fácil é melhor, não é?

E então temos personagens como Dandelion, Zoltan, Vesemir e muitos outros, que fazem o mundo parecer ainda mais humano. Faz a amizade ser muito nítida no coração de Geralt. Vesemir, principalmente, possui uma importância enorme porque representa uma espécie de figura paterna para Geralt e para os outros bruxos.</p>
      
      <h3>O mundo maravilhoso</h3>
      <p>Mas talvez nenhuma palavra defina melhor The Witcher 3 do que atmosfera. Velen é um lugar miserável, com tudo de ruim que um mundo medieval com monstros pode oferecer; Guardas matando, prostitutas por ai, ladrões, assassinos e monstros sanguinários. As vilas estão destruídas, as pessoas estão famintas, existem cadáveres pendurados em quase todas as árvores. E mesmo assim, existem pequenos momentos de humanidade no meio de tudo isso. Uma música tocando em uma taverna, pessoas contatando histórias e alguém jogando Gwent.

Novigrad apresenta outra face desse mundo. É enorme, movimentada, cheia de pessoas, comércio, religião, criminosos e diferentes grupos tentando sobreviver. E quanto mais alto, o contraste entre pobreza e riqueza diminui. Tal como a vida real.

Já Skellige possui uma identidade completamente diferente de tudo que vimos no jogo até agora. O mar, as montanhas, as ilhas, a cultura dos clãs e aquela sensação quase nórdica fazem com que você sinta que atravessou para outro lugar.

The Witcher 3 consegue juntar tudo isso em uma experiência que parece muito maior do que sua própria história principal. Você começa procurando Ciri, mas no caminho descobre novas coisas, histórias e novas preocupações. E, quando percebe, já não está jogando apenas para descobrir o final da história. E acho que é justamente aí que The Witcher 3 alcança algo raro, ele não apenas cria uma historia com começo, meio e fim, o jogo está vivo, ele está pedindo para você explorar e fazer coisas novas. Pra mim, o melhor jogo de todos os tempos.</p>
    `,
    coverImage: '/images/witcher-3.jpg',
    category: 'Review',
    tags: ['RPG', 'Mundo Aberto', 'Fantasia'],
    author: {
      name: 'Matheus Dias',
      avatar: '/images/matheus.jpg',
    },
    publishedAt: '2026-08-26T10:00:00Z',
    updatedAt: '2026-08-26T10:00:00Z',
    featured: true,
    type: 'review',
    score: 9.5,
    platform: ['PC', 'PlayStation', 'Xbox'],
    genre: ['RPG', 'Ação'],
    readingTime: '8 MIN DE LEITURA',
    scoreDetails: {
      historia: 10,
      gameplay: 8,
      graficos: 9,
      trilhaSonora: 10,
      ambientacao: 10,
    }
  },
  {
    id: '6',
    slug: 'cyberpunk-2077',
    title: 'Esse jogo chegou na hora certa',
    excerpt: 'Night City é linda a noite.',
    content: `
      <h2>Obra prima</h2>
      <p>Existem jogos que a gente termina, coloca na lista de concluídos e eventualmente esquece. Existem outros que permanecem na memória por causa de uma missão, de um personagem ou de uma música. E existem aqueles que, por algum motivo, encontram a gente exatamente no momento em que mais precisávamos deles. No meu caso, Cyberpunk chegou numa hora meio obscura da minha vida, minha demissão numa empresa que me esforçava demais.

Minha primeira experiência com Cyberpunk aconteceu em uma semana que, olhando hoje, parece quase simbólica. Eu havia acabado de sair do meu emprego. Não foi simplesmente uma mudança de rotina: eu vinha carregando um desgaste enorme, uma sensação de cansaço constante, de estar mentalmente esgotado. Era aquele tipo de fase em que você termina o dia sem necessariamente ter energia para fazer qualquer coisa, mesmo quando finalmente tem tempo livre. E talvez minha conexão com esse game tenha sido tão forte, porque de certa forma ela moldou uma parte importante da minha vida.</p>
      
      <h3>Enquanto eu tentava sair da minha vida real, eu entrava em Night City e era mágico.</h3>
      <p>Night City não é só uma cidade que ambienta um game, ela é mais que isso, ela continua existindo durante sua gameplay ou quando seu personagem está parado. Há pessoas andando pela cidade, propagandas em todos os lugares, diálogos soltos, bares, becos, luzes neon de todas as cores refletindo o asfalto molhado.

A própria proposta de Cyberpunk é colocar você na pele de V, um mercenário tentando construir sua reputação em uma cidade obcecada por poder, dinheiro, modificações corporais e status. O jogo te dá 3 opções, em todas sua motivação é a mesma.

Ao decorrer da gameplay, descobri uma coisa muito particular: V está desesperadamente tentando encontrar um caminho para continuar existindo, igual a mim. É claro que as situações são completamente diferentes. V está literalmente enfrentando uma ameaça à própria vida, enquanto eu estava apenas atravessando uma fase difícil.

Uma das coisas que mais me surpreenderam no jogo foi que a ambientação não é a única coisa forte do jogo, os personagens nos quais você cria uma relação são especiais; Amor, amizade, rivalidade, ódio. Cada um deles parece carregar seus próprios problemas, desejos e contradições. E conforme você vai conhecendo essas pessoas, Night City deixa de ser apenas uma cidade bonita.

Johnny Silverhand é o que mais me impactou. No começo do jogo eu já sabia o que pensar dele. Ele é arrogante, agressivo, extremamente narcisista e sempre está pronto para transformar qualquer conversa boba em uma discussão e um discurso anarquista. Conforme você joga, entende que não é apenas o superficial que contrasta, eventualmente você descobre que V e Johnny — e eu — tem uma coisa em comum: Estão tentando entender o que significa continuar sendo elas mesmas.

Outra coisa que tornou minha primeira experiência tão marcante foi não saber exatamente quais escolhas seriam importantes. Eu não estava jogando pensando em guia, melhor build ou tentando fazer o final perfeito. Eu estava simplesmente escolhendo aquilo que parecia certo naquele momento, como se V fosse eu e isso tornou algumas consequências muito mais fortes, porque quando você joga pela primeira vez sem saber o que vai acontecer, determinadas decisões deixam de ser mecânicas de videogame e elas parecem ser decisões suas. Você conversa com alguém que você gosta, ajuda porque parece a coisa certa, escolhe um determinado caminho porque acha que seria aquilo que V faria. Mas logo após o jogo te coloca diante as consequências de suas próprias escolhas, você percebe que passou horas construindo uma história que é exclusivamente sua

Bom, essa análise não traz aspectos técnicos, spoilers e reclamações de alguns bugs, é sobre sentimento, e, para mim, Cyberpunk 2077 sempre vai ser lembrado como o jogo que encontrei quando estava deixando um emprego, tentando me recuperar de um burnout e procurando alguma coisa — qualquer coisa — que me permitisse desligar a cabeça por algumas horas.</p>
      
      
    `,
    coverImage: '/images/cyberpunk-2077.jpg',
    category: 'Review',
    tags: ['RPG', 'Mundo Aberto', 'Fantasia'],
    author: {
      name: 'Matheus Dias',
      avatar: '/images/matheus.jpg',
    },
    publishedAt: '2026-08-26T10:00:00Z',
    updatedAt: '2026-08-26T10:00:00Z',
    featured: true,
    type: 'review',
    score: 9.5,
    platform: ['PC', 'PlayStation', 'Xbox'],
    genre: ['RPG', 'Ação'],
    readingTime: '8 MIN DE LEITURA',
    scoreDetails: {
      historia: 10,
      gameplay: 8,
      graficos: 9,
      trilhaSonora: 10,
      ambientacao: 10,
    }
  },
  {
    id: '5',
    slug: 'resident-evil-4-remake',
    title: 'Resident Evil 4 Remake: Como modernizar um clássico absoluto',
    excerpt: 'A Capcom mais uma vez mostra como recriar uma lenda mantendo sua alma intacta.',
    content: `
      <p>Tem jogos que você joga porque quer zerar, e tem jogos que você joga porque simplesmente é bom estar ali. Resident Evil 4 Remake entra muito fácil nessa segunda categoria. E é um dos meus jogos favoritos da vida, talvez porque joguei muito 2005 quando era menor.</p>
      
      <p>Desde o começo, o jogo te prende de um jeito que não parece forçado. Tudo flui bem. A movimentação do Leon S. Kennedy tem peso, mas não atrapalha, e o combate é aquele tipo que te deixa sempre ligado. Você não pode jogar de qualquer jeito, mas também não é algo travado — é só… na medida certa. Quando você acerta um parry com a faca ou consegue sair de uma situação complicada por pouco, dá aquela sensação boa de “caralho, joguei bem”.</p>
      
      <p>Os cenários ajudam muito nisso. Cada lugar tem uma energia diferente, mas todos passam aquela sensação de desconforto constante. Você nunca tá totalmente tranquilo, sempre esperando que algo dê errado. E geralmente dá. Acho que a única coisa fraca do cenário em si seria a parte do Castelo onde encurta bastante, sendo bem menos rico em detalhes que a versão original.</p>
      
      <p>A história é simples, mas funciona. O Leon aqui é mais sério, mais cansado, mas ainda solta umas frases que marcam. Os personagens que aparecem junto com ele também são mais interessantes do que parecem à primeira vista. A Ashley Graham não incomoda como poderia, e o Luis Serra acaba sendo mais marcante do que você espera.</p>
      
      <p>Os inimigos também fazem diferença. Eles são chatos no bom sentido, pressionam, cercam, não deixam você respirar. Às vezes parece que o jogo tá te testando o tempo todo, e isso mantém tudo intenso, ainda mais em dificuldades maiores de gameplay.</p>
      
      <p>Claro, nem tudo é perfeito. Tem momentos que puxam mais pra ação e dão uma leve quebrada no ritmo, principalmente mais pro final. Mas nada que estrague a experiência, sendo retrabalhado fielmente à versão de 2005.</p>
      
      <p>No fim, é aquele tipo de jogo que você termina e fica com a sensação de que valeu muito a pena. Não porque ele é revolucionário, mas porque ele faz tudo muito bem feito. É redondo, consistente e, acima de tudo, muito gostoso de jogar.</p>
    `,
    coverImage: '/images/re4-remake.jpg',

    category: 'Review',
    tags: ['Terror', 'Ação', 'Remake'],
    author: {
      name: 'Matheus Dias',
      avatar: '/images/matheus.jpg',
    },
    publishedAt: '2026-08-26T16:00:00Z',
    updatedAt: '2026-08-26T16:00:00Z',
    featured: false,
    type: 'review',
    score: 9.0,
    platform: ['PC', 'PlayStation', 'Xbox'],
    genre: ['Survival Horror', 'Ação'],
    readingTime: '2 MIN DE LEITURA',
    scoreDetails: {
      historia: 8,
      gameplay: 10,
      graficos: 9,
      trilhaSonora: 9,
      ambientacao: 10,
    },
    },
    {
    id: '7',
    slug: 'anuncio-remaster-the-witcher-3',
    title: 'The Witcher 3 Remastered é anunciado e promete levar Geralt de volta ao auge',
    excerpt: 'CD Project Surpreende mais uma vez',
    content: `
      <p>A CD PROJEKT RED surpreendeu os fãs durante a Gamescom Opening Night Live 2026 ao anunciar The Witcher 3: Wild Hunt — Remastered, uma nova versão de um dos RPGs mais celebrados da última década. O lançamento está marcado para 29 de setembro de 2026.

E, apesar de The Witcher 3 já ter recebido uma grande atualização de nova geração em 2022, a desenvolvedora promete ir além de um simples aumento na qualidade gráfica. O Remastered contará com melhorias visuais, de desempenho e de gameplay, incluindo mudanças no combate, movimentação, comportamento dos monstros, árvore de habilidades, montaria e modo foto.</p>
      
      <h3>Uma nova versão — sem cobrar novamente de quem já possui o jogo</h3>

      <p>Uma das melhores notícias do anúncio é que os jogadores que já possuem The Witcher 3 nas plataformas elegíveis receberão o Remastered gratuitamente.

A atualização será disponibilizada para proprietários do jogo no PC, PlayStation 5 e Xbox Series X|S. A versão também chegará nativamente ao Nintendo Switch 2 e ao Battle.net. Quem possui The Witcher 3 no Nintendo Switch original poderá resgatar a versão Remastered no Switch 2.

E tem mais: os proprietários do jogo-base também terão acesso gratuito às duas expansões originais, Hearts of Stone e Blood and Wine, que passarão a fazer parte do pacote base do Remastered.</p>


    <h3>Não é apenas uma atualização gráfica</h3> 
      
    <p>O que torna esse anúncio especialmente interessante é a proposta de modernizar aspectos que envelheceram desde o lançamento original.

A CD PROJEKT RED pretende aprimorar a experiência de jogar The Witcher 3 como um todo, mexendo em sistemas de gameplay e qualidade de vida. Entre as mudanças apresentadas estão melhorias no combate, nas animações, na movimentação de Geralt e de Roach, além de alterações na árvore de habilidades e no comportamento dos inimigos.

Isso pode representar uma oportunidade interessante para jogadores que abandonaram o RPG ao longo dos anos — ou até para quem nunca conseguiu terminar a aventura de Geralt.</p>

      <h3>E ainda tem mais The Witcher 3 vindo por aí</h3>

      <p>O anúncio do Remastered veio acompanhado de novidades sobre Songs of the Past, a terceira expansão de The Witcher 3, prevista para 2027.

A expansão levará Geralt até Letten, terra natal de Dandelion. O bruxo viajará ao lado do velho amigo para investigar acontecimentos misteriosos em uma região que, à primeira vista, parece tranquila e próspera. Como seria de se esperar em uma história de The Witcher, existe algo muito mais sombrio escondido por trás dessa aparente tranquilidade.

Songs of the Past também apresentará novos monstros, mutações e uma nova arma para Geralt: uma corrente, que funcionará como uma nova opção de combate e ainda faz referência à introdução do primeiro jogo da franquia.</p>

    `,
    coverImage: '/images/tw3-remaster.jpg',

    category: 'Notícia',
    tags: ['RPG', 'Ação', 'Remaster', 'CD Project red'],
    author: {
      name: 'Matheus Dias',
      avatar: '/images/matheus.jpg',
    },
    publishedAt: '2026-08-27T16:00:00Z',
    updatedAt: '2026-08-27T16:00:00Z',
    featured: false,
    type: 'news',
    },
];

export function getFeaturedPost() {
  return [...mockPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())[0];
}

export function getLatestPosts(limit = 6) {
  return [...mockPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit);
}

export function getReviews() {
  return mockPosts.filter(post => post.type === 'review').sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getNews() {
  return mockPosts.filter(post => post.type === 'news').sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string) {
  return mockPosts.find(post => post.slug === slug);
}
