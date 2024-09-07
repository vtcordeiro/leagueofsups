let suportes = [

    //Annie
{
    nome: 'annie',
    descricao: 'Pequena maga com grande poder de fogo. Invoca um urso de pelúcia flamejante para ajudar em combate.Mágica explosiva e versátil, ótima para iniciadores de lutas. Tibbers.',
    facilidade: 'média', // Fácil, média, difícil
    estilo: 'dano', // Dano, proteção, tank
    sinergiaCom: ['Jhin', 'Vayne', 'Draven'],
    countera: ['Sona', 'Janna'],
    eCounteradaPor: ['Leona', 'Nautilus', 'Braum'],
    link: "https://www.op.gg/champions/annie/build?type=ranked"
    
}, 

    //Alistar

{
    nome: 'alistar',
    descricao: 'Um minotauro resistente com habilidades de controle de grupo e cura. Perfeito para iniciar lutas e proteger seus aliados.',
    facilidade: 'média',
    estilo: 'tank',
    sinergiaCom: ['Vayne', 'Draven', 'KaiSa'], // Adicionei KaiSa como exemplo de sinergia
    countera: ['Sona', 'Janna'],
    eCounteradaPor: ['Leona', 'Nautilus', 'Braum'],
    link: "https://www.op.gg/champions/alistar/build?type=ranked"
},

    //Amumu

{
    nome: 'amumu',
    descricao: 'Uma múmia triste que causa medo e dano aos inimigos. Suas habilidades de área de efeito o tornam excelente para iniciar lutas.',
    facilidade: 'média',
    estilo: 'tank',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Amumu se beneficia de ADCs que podem aproveitar o seu engage
    countera: ['Zilean', 'Lulu'], // Campeões que podem proteger seus aliados do ulti de Amumu
    eCounteradaPor: ['Leona', 'Nautilus'], // Campeões com mais mobilidade e engage podem superar Amumu
    link: "https://www.op.gg/champions/amumu/build?type=ranked"
},

    //Ashe

{
    nome: 'ashe',
    descricao: 'Uma arqueira elfa com grande alcance e utilidade. Sua ultimate global a torna uma excelente iniciadora de lutas e sua flecha envenenada desacelera os inimigos.',
    facilidade: 'fácil',
    estilo: 'dano',
    sinergiaCom: ['Leona', 'Alistar', 'Braum'], // Campeões que podem proteger Ashe enquanto ela ataca à distância
    countera: ['Vayne', 'Lucian'], // Campeões com mobilidade e dano em área podem dificultar a vida de Ashe
    eCounteradaPor: ['Caitlyn', 'Jinx'], // Campeões com alcance maior podem pokear Ashe de forma segura
    link: "https://www.op.gg/champions/ashe/build?type=ranked"
},

    //Bardo

{
    nome: 'bardo',
    descricao: 'Um viajante cósmico que explora o mapa, colocando sentinelas e criando portões. Suas habilidades de cura e proteção o tornam um suporte versátil.',
    facilidade: 'difícil',
    estilo: 'proteção',
    sinergiaCom: ['Ezreal', 'Ashe', 'Jhin'], // Campeões que se beneficiam da mobilidade e do mapa global de Bardo
    countera: ['Leona', 'Nautilus'], // Campeões com mais engage e controle de grupo podem dificultar a vida de Bardo
    eCounteradaPor: ['Rakan', 'Yuumi'], // Campeões com mais mobilidade e sinergia com ADCs podem superar Bardo
    link: "https://www.op.gg/champions/bard/build?type=ranked"
},

    //Blitzcrank

{
    nome: 'blitzcrank',
    descricao: 'Um gigante de vapor com um gancho poderoso. Seus habilidades de controle de grupo o tornam um iniciador de lutas formidável.',
    facilidade: 'média',
    estilo: 'tank',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que podem aproveitar o engage de Blitzcrank
    countera: ['Lulu', 'Janna'], // Campeões que podem proteger seus aliados do gancho de Blitzcrank
    eCounteradaPor: ['Leona', 'Nautilus'], // Campeões com mais mobilidade e engage podem superar Blitzcrank
    link: "https://www.op.gg/champions/blitzcrank/build?type=ranked"
},

    //Brand

{
    nome: 'brand',
    descricao: 'Um mago que causa dano mágico em área. Suas habilidades de incêndio podem rapidamente eliminar inimigos frágeis.',
    facilidade: 'média',
    estilo: 'dano',
    sinergiaCom: ['Leona', 'Alistar'], // Campeões que podem proteger Brand enquanto ele causa dano
    countera: ['Zilean', 'Lulu'], // Campeões que podem proteger seus aliados do dano de Brand
    eCounteradaPor: ['VelKoz', 'Xerath'], // Campeões com maior alcance podem pokear Brand de forma segura
    link: "https://www.op.gg/champions/brand/build?type=ranked"
},

    //Braum

{
    nome: 'braum',
    descricao: 'Um guerreiro de Freljord com um escudo gigante. Suas habilidades de proteção o tornam um suporte ideal para proteger seus aliados.',
    facilidade: 'fácil',
    estilo: 'proteção',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que se beneficiam do escudo e do engage de Braum
    countera: ['Leona', 'Nautilus'], // Campeões com mais engage e controle de grupo podem dificultar a vida de Braum
    eCounteradaPor: ['Rakan', 'Yuumi'], // Campeões com mais mobilidade e sinergia com ADCs podem superar Braum
    link: "https://www.op.gg/champions/braum/build?type=ranked"
},

    //Fiddlesticks

{
    nome: 'fiddlesticks',
    descricao: 'Um espantalho antigo que aterroriza seus inimigos com medo e dano mágico. Seu ultimate global permite iniciar lutas de forma inesperada.',
    facilidade: 'média',
    estilo: 'dano',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que se beneficiam do engage e do medo de Fiddlesticks
    countera: ['Zilean', 'Lulu'], // Campeões que podem proteger seus aliados do medo e do dano de Fiddlesticks
    eCounteradaPor: ['Leona', 'Nautilus'], // Campeões com mais engage e controle de grupo podem superar Fiddlesticks
    link: "https://www.op.gg/champions/fiddlesticks/build?type=ranked"
},

    //Janna

{
    nome: 'janna',
    descricao: 'O espírito da tempestade que protege seus aliados com ventos curativos e escudos. Sua ultimate global pode mudar o curso de uma luta.',
    facilidade: 'fácil',
    estilo: 'proteção',
    sinergiaCom: ['Ezreal', 'Ashe', 'Jhin'], // Campeões de longo alcance que se beneficiam da proteção de Janna
    countera: ['Leona', 'Nautilus'], // Campeões com mais engage e controle de grupo podem dificultar a vida de Janna
    eCounteradaPor: ['Rakan', 'Yuumi'], // Campeões com mais mobilidade e sinergia com ADCs podem superar Janna
    link: "https://www.op.gg/champions/janna/build?type=ranked"
},

    //Karma

{
    nome: 'karma',
    descricao: 'Uma mística iônica que pode alternar entre formas para oferecer cura, escudos e dano. Sua flexibilidade a torna uma suporte versátil.',
    facilidade: 'média',
    estilo: 'proteção/dano',
    sinergiaCom: ['Ezreal', 'Ashe', 'Jhin'], // Campeões que se beneficiam da cura e dos escudos de Karma
    countera: ['Leona', 'Nautilus'], // Campeões com mais engage e controle de grupo podem dificultar a vida de Karma
    eCounteradaPor: ['Rakan', 'Yuumi'], // Campeões com mais mobilidade e sinergia com ADCs podem superar Karma
    link: "https://www.op.gg/champions/karma/build?type=ranked"
},

    //Leona

{
    nome: 'leona',
    descricao: 'Uma guerreira solar com um escudo poderoso e habilidades de controle de grupo. Perfeita para iniciar lutas e proteger seus aliados.',
    facilidade: 'média',
    estilo: 'tank',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que se beneficiam do engage e da proteção de Leona
    countera: ['Sona', 'Janna'], // Campeões que podem proteger seus aliados do engage de Leona
    eCounteradaPor: ['Rakan', 'Yuumi'], // Campeões com mais mobilidade e sinergia com ADCs podem superar Leona
    link: "https://www.op.gg/champions/leona/build?type=ranked"
},

    //Lulu

{
    nome: 'lulu',
    descricao: 'Uma fada yordle com a capacidade de transformar seus aliados em animais fofos e proteger seus companheiros de equipe com escudos e auras.',
    facilidade: 'média',
    estilo: 'proteção',
    sinergiaCom: ['Ezreal', 'Ashe', 'Jhin'], // Campeões de longo alcance que se beneficiam da proteção e do buff de ataque de Lulu
    countera: ['Leona', 'Nautilus'], // Campeões com mais engage e controle de grupo podem dificultar a vida de Lulu
    eCounteradaPor: ['Rakan', 'Yuumi'], // Campeões com mais mobilidade e sinergia com ADCs podem superar Lulu
    link: "https://www.op.gg/champions/lulu/build?type=ranked"
},

    //Lux

{
    nome: 'lux',
    descricao: 'Uma maga com um alcance incrível e habilidades de controle de grupo, capaz de causar dano significativo a longa distância.',
    facilidade: 'média',
    estilo: 'dano',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que podem aproveitar o engage e o dano de Lux
    countera: ['Zilean', 'Lulu'], // Campeões que podem proteger seus aliados do dano de Lux
    eCounteradaPor: ['VelKoz', 'Xerath'], // Campeões com maior alcance podem pokear Lux de forma segura
    link: "https://www.op.gg/champions/lux/build?type=ranked"
},

    //Maokai

{
    nome: 'maokai',
    descricao: 'Um antigo ent da floresta com raízes poderosas. Suas habilidades de área de efeito o tornam um excelente iniciador de lutas e um tanque resistente.',
    facilidade: 'média',
    estilo: 'tank',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que se beneficiam do engage e do controle de grupo de Maokai
    countera: ['Zilean', 'Lulu'], // Campeões que podem proteger seus aliados do dano e do controle de grupo de Maokai
    eCounteradaPor: ['Leona', 'Nautilus'], // Campeões com mais mobilidade e engage podem superar Maokai
    link: "https://www.op.gg/champions/maokai/build?type=ranked"
},

    //Milio

{
    nome: 'milio',
    descricao: 'Um yordle gentil que protege seus aliados com um escudo de fogo e cura. Suas habilidades de movimento o tornam um suporte versátil.',
    facilidade: 'fácil',
    estilo: 'proteção',
    sinergiaCom: ['Ezreal', 'Ashe', 'Jhin'], // Campeões de longo alcance que se beneficiam da proteção e da cura de Milio
    countera: ['Leona', 'Nautilus'], // Campeões com mais engage e controle de grupo podem dificultar a vida de Milio
    eCounteradaPor: ['Rakan', 'Yuumi'], // Campeões com mais mobilidade e sinergia com ADCs podem superar Milio
    link: "https://www.op.gg/champions/milio/build?type=ranked"
},

    //Morgana

{
    nome: 'morgana',
    descricao: 'Uma feiticeira caída com habilidades de dano mágico em área e controle de grupo. Seu laço amaldiçoado é uma ferramenta poderosa para iniciar lutas.',
    facilidade: 'média',
    estilo: 'dano',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que se beneficiam do engage e do dano de Morgana
    countera: ['Zilean', 'Lulu'], // Campeões que podem proteger seus aliados do dano de Morgana
    eCounteradaPor: ['VelKoz', 'Xerath'], // Campeões com maior alcance podem pokear Morgana de forma segura
    link: "https://www.op.gg/champions/morgana/build?type=ranked"
},

    //Nami

{
    nome: 'nami',
    descricao: 'Uma sereia que cura e protege seus aliados com bolhas e maremotos. Sua ultimate global pode mudar o curso de uma luta.',
    facilidade: 'média',
    estilo: 'proteção',
    sinergiaCom: ['Ezreal', 'Ashe', 'Jhin'], // Campeões de longo alcance que se beneficiam da cura e dos buffs de Nami
    countera: ['Leona', 'Nautilus'], // Campeões com mais engage e controle de grupo podem dificultar a vida de Nami
    eCounteradaPor: ['Rakan', 'Yuumi'], // Campeões com mais mobilidade e sinergia com ADCs podem superar Nami
    link: "https://www.op.gg/champions/nami/build?type=ranked"
},

    //Nautilus

{
    nome: 'nautilus',
    descricao: 'Um golem das profundezas com habilidades de controle de grupo e resistência. Seu gancho poderoso o torna um iniciador de lutas formidável.',
    facilidade: 'média',
    estilo: 'tank',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que se beneficiam do engage e do controle de grupo de Nautilus
    countera: ['Zilean', 'Lulu'], // Campeões que podem proteger seus aliados do dano e do controle de grupo de Nautilus
    eCounteradaPor: ['Leona', 'Maokai'], // Campeões com mais mobilidade e engage podem superar Nautilus
    link: "https://www.op.gg/champions/nautilus/build?type=ranked"
},

    //Neeko

{
    nome: 'neeko',
    descricao: 'Uma feiticeira que pode se transformar em outros campeões. Suas habilidades de controle de grupo e dano mágico a tornam uma suporte versátil.',
    facilidade: 'média',
    estilo: 'dano/proteção',
    sinergiaCom: ['Ezreal', 'Ashe', 'Jhin'], // Campeões que se beneficiam da proteção e do controle de grupo de Neeko
    countera: ['Leona', 'Nautilus'], // Campeões com mais engage e controle de grupo podem dificultar a vida de Neeko
    eCounteradaPor: ['Rakan', 'Yuumi'], // Campeões com mais mobilidade e sinergia com ADCs podem superar Neeko
    link: "https://www.op.gg/champions/neeko/build?type=ranked"
},

    //Pantheon

{
    nome: 'pantheon',
    descricao: 'Um guerreiro celestial com habilidades de dano físico e controle de grupo. Seu salto global o torna um iniciador de lutas poderoso.',
    facilidade: 'média',
    estilo: 'dano/tank',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que se beneficiam do engage e do dano de Pantheon
    countera: ['Zilean', 'Lulu'], // Campeões que podem proteger seus aliados do dano de Pantheon
    eCounteradaPor: ['Leona', 'Nautilus'], // Campeões com mais mobilidade e engage podem superar Pantheon
    link: "https://www.op.gg/champions/pantheon/build?type=ranked"
},

    //Poppy

{
    nome: 'poppy',
    descricao: 'Uma guerreira yordle com um martelo gigante. Suas habilidades de controle de grupo e resistência a tornam uma iniciadora de lutas formidável.',
    facilidade: 'média',
    estilo: 'tank',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que se beneficiam do engage e do controle de grupo de Poppy
    countera: ['Zilean', 'Lulu'], // Campeões que podem proteger seus aliados do dano e do controle de grupo de Poppy
    eCounteradaPor: ['Leona', 'Nautilus'], // Campeões com mais mobilidade e engage podem superar Poppy
    link: "https://www.op.gg/champions/poppy/build?type=ranked"
},

    //Rakan

{
    nome: 'rakan',
    descricao: 'Um espírito da natureza com habilidades de cura, proteção e mobilidade. Cria sinergia com Xayah.',
    facilidade: 'média',
    estilo: 'proteção',
    sinergiaCom: ['Xayah'], // Rakan forma uma dupla poderosa com Xayah
    countera: ['Leona', 'Nautilus'], // Campeões com mais engage e controle de grupo podem dificultar a vida de Rakan
    eCounteradaPor: ['Yuumi'], // Yuumi pode oferecer proteção e cura mais eficazes que Rakan
    link: "https://www.op.gg/champions/rakan/build?type=ranked"
},

    //Rell

{
    nome: 'rell',
    descricao: 'Uma guerreira de Demacia que pode alternar entre formas defensivas e ofensivas. Suas habilidades de controle de grupo e resistência a tornam um suporte versátil.',
    facilidade: 'média',
    estilo: 'tank/dano',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que se beneficiam do engage e do controle de grupo de Rell
    countera: ['Zilean', 'Lulu'], // Campeões que podem proteger seus aliados do dano e do controle de grupo de Rell
    eCounteradaPor: ['Leona', 'Nautilus'], // Campeões com mais mobilidade e engage podem superar Rell
    link: "https://www.op.gg/champions/rell/build?type=ranked"
},

    //Renata Glasc

{
    nome: 'renata glasc',
    descricao: 'Uma quimera da Zaun com habilidades de controle de grupo e dano mágico. Seu veneno pode enfraquecer os inimigos e fortalecer seus aliados.',
    facilidade: 'média',
    estilo: 'dano/proteção',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'], // Campeões que se beneficiam do controle de grupo e do veneno de Renata
    countera: ['Zilean', 'Lulu'], // Campeões que podem proteger seus aliados do veneno de Renata
    eCounteradaPor: ['Leona', 'Nautilus'], // Campeões com mais mobilidade e engage podem superar Renata
    link: "https://www.op.gg/champions/renata-glasc/build?type=ranked"
},

    //Senna

{
    nome: 'senna',
    descricao: 'Uma alma perdida que colhe almas dos mortos para fortalecer seus ataques. Excelente para pokear e harassar inimigos à distância.',
    facilidade: 'média',
    estilo: 'dano',
    sinergiaCom: ['Lucian', 'Jhin', 'Aphelios'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Vayne', 'Caitlyn'],
    link: "https://www.op.gg/champions/senna/build?type=ranked"
},

    //Seraphine

{
    nome: 'seraphine',
    descricao: 'Uma ídolo que harmoniza com a multidão, usando sua música para curar e proteger seus aliados, enquanto causa dano aos inimigos.',
    facilidade: 'fácil',
    estilo: 'proteção',
    sinergiaCom: ['Ashe', 'Ezreal', 'Varus'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Lux', 'Brand'],
    link: "https://www.op.gg/champions/seraphine/build?type=ranked"
},

    //Sona

{
    nome: 'sona',
    descricao: 'A Mestra das Cordas, Sona suporta seus aliados com poderosas auras e cura.',
    facilidade: 'fácil',
    estilo: 'proteção',
    sinergiaCom: ['Ashe', 'Ezreal', 'Varus'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Lux', 'Brand'],
    link: "https://www.op.gg/champions/sona/build?type=ranked"
},

    //Soraka

{
    nome: 'soraka',
    descricao: 'A Criança das Estrelas, um ser celestial que cura e protege seus aliados.',
    facilidade: 'fácil',
    estilo: 'proteção',
    sinergiaCom: ['Ashe', 'Ezreal', 'Varus'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Lux', 'Brand'],
    link: "https://www.op.gg/champions/soraka/build?type=ranked"
},
    // Swain (pode ser jogado como suporte, mas é mais comum como mid lane)
{
    nome: 'swain',
    descricao: 'O Grande General Noxiano, que utiliza poderes demoníacos para dominar o campo de batalha. Possui um forte controle de grupo e capacidade de cura.',
    facilidade: 'difícil',
    estilo: 'mago/tanque',
    sinergiaCom: ['Malzahar', 'Brand', 'Vel\'Koz'],
    countera: ['Zed', 'Fizz'],
    eCounteradaPor: ['Talon', 'Katarina'],
    link: "https://www.op.gg/champions/swain/build?type=ranked"
},

    // Tahm Kench
{
    nome: 'tahm kench',
    descricao: 'Um antigo espírito fluvial que pode devorar inimigos e aliados. Oferece forte proteção e utilidade para sua equipe.',
    facilidade: 'média',
    estilo: 'tanque/suporte',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Malphite', 'Sion'],
    link: "https://www.op.gg/champions/tahm-kent/build?type=ranked"
},

    // Taric
{
    nome: 'taric',
    descricao: 'O Escudo de Valoran, um ser celestial que protege seus aliados com seu poderoso escudo e habilidades de cura.',
    facilidade: 'média',
    estilo: 'suporte/tanque',
    sinergiaCom: ['Ashe', 'Ezreal', 'Varus'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Lux', 'Brand'],
    link: "https://www.op.gg/champions/taric/build?type=ranked"
},

    // Thresh
{
    nome: 'thresh',
    descricao: 'O Guardião das Correntes, um ser espectral que assombra as Ilhas das Sombras. Excelente em controlar o campo de batalha com seus ganchos e lanterna.',
    facilidade: 'difícil',
    estilo: 'suporte',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Lux', 'Brand'],
    link: "https://www.op.gg/champions/thresh/build?type=ranked"
},

    //Velkoz

{
    nome: 'velKoz',
    descricao: 'Um olho cósmico que lança raios de energia pura. Seus ataques de longo alcance e controle de grupo o tornam um excelente suporte para pokear e iniciar lutas.',
    facilidade: 'difícil',
    estilo: 'dano',
    sinergiaCom: ['Ashe', 'Caitlyn', 'Jinx'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Fizz', 'LeBlanc'],
    link: "https://www.op.gg/champions/velkoz/build?type=ranked"
},

    //Xerath

{
    nome: 'xerath',
    descricao: 'Um mago asteca que ataca seus inimigos de longe com poderosas magias. Seus feitiços de longo alcance e controle de grupo o tornam um excelente suporte para pokear.',
    facilidade: 'difícil',
    estilo: 'dano',
    sinergiaCom: ['Ashe', 'Caitlyn', 'Jinx'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Fizz', 'LeBlanc'],
    link: "https://www.op.gg/champions/xerath/build?type=ranked"
},

    //Yuumi

{
    nome: 'yuumi',
    descricao: 'Um felino mágico que se agarra a um aliado, fornecendo cura, escudos e bônus de dano. É altamente dependente de seu aliado para se mover.',
    facilidade: 'fácil',
    estilo: 'proteção',
    sinergiaCom: ['Jhin', 'Varus', 'KogMaw'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Fizz', 'LeBlanc'],
    link: "https://www.op.gg/champions/yuumi/build?type=ranked"
},

    //Zac

{
    nome: 'zac',
    descricao: 'Uma criatura feita de substância elástica que pode se esticar e saltar para grandes distâncias. Oferece controle de grupo e iniciação de lutas.',
    facilidade: 'média',
    estilo: 'tanque',
    sinergiaCom: ['Vayne', 'Draven', 'Jinx'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Fizz', 'LeBlanc'],
    link: "https://www.op.gg/champions/zac/build?type=ranked"
},

    //Zilean

{
    nome: 'zilean',
    descricao: 'Um cronomancer yordle que manipula o tempo. Seus poderes de reversão e aceleração do tempo o tornam um suporte único, capaz de proteger e reviver seus aliados.',
    facilidade: 'difícil',
    estilo: 'proteção',
    sinergiaCom: ['Vayne', 'Jinx', 'KaiSa'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Fizz', 'LeBlanc'],
    link: "https://www.op.gg/champions/zilean/build?type=ranked"
},

    //Zoe

{
    nome: 'zoe',
    descricao: 'Uma yordle astuta que manipula a própria linha do tempo. Seus feitiços imprevisíveis e capacidade de roubar habilidades inimigas a tornam um suporte único e divertido.',
    facilidade: 'difícil',
    estilo: 'dano/suporte',
    sinergiaCom: ['Ashe', 'Ezreal', 'Varus'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Fizz', 'LeBlanc'],
    link: "https://www.op.gg/champions/zoe/build?type=ranked"
},

    //Zyra

{
    nome: 'zyra',
    descricao: 'Uma feiticeira de plantas que invoca flora mortal para controlar o campo de batalha. Seus ataques à distância e controle de grupo a tornam uma excelente suporte para pokear e iniciar lutas.',
    facilidade: 'média',
    estilo: 'dano',
    sinergiaCom: ['Ashe', 'Caitlyn', 'Jinx'],
    countera: ['Leona', 'Nautilus'],
    eCounteradaPor: ['Fizz', 'LeBlanc'],
    link: "https://www.op.gg/champions/zyra/build?type=ranked"
}
]

