const terms = document.querySelector("#Terms");
const toggleButton = document.querySelector("#toggle-terms");
const imageinput = document.querySelector("#image-input");
const imagePreview = document.querySelector("#image-preview");
const originElemento = document.querySelector("#origin");
const ATKElement = document.querySelector("#ATKElement");
const DEFElement = document.querySelector("#DEFElement");
const HPElement = document.querySelector("#HPElement");
const AGEElement = document.querySelector("#AGEElement");
const HEIGHTElement = document.querySelector("#HEIGHTElement");
const PERSONElement = document.querySelector("#PERSONElement");

imageinput.addEventListener("change", () => {
    const arquivo = imageinput.files[0];

    if (arquivo && arquivo.type.startsWith("image/")) {
        imagePreview.src = URL.createObjectURL(arquivo);
        imagePreview.hidden = false;
    }
});

imageinput.addEventListener("change", () => {
    const arquivo = imageinput.files[0];

    if (!arquivo) return;

    if (!arquivo.type.startsWith("image/")) {
        alert("ERROR: FILE FORMAT NOT RECOGNIZED.");
        imageinput.value = "";
        imagePreview.hidden = true;
        imagePreview.removeAttribute("src");
        return;
    }

    imagePreview.src = URL.createObjectURL(arquivo);
    imagePreview.hidden = false;
});


toggleButton.addEventListener("click", () => {
    terms.hidden = !terms.hidden;

    toggleButton.textContent = terms.hidden ? "[+]" : "[-]";
    toggleButton.setAttribute("aria-expanded", !terms.hidden);
});

let titulos = [
    " O QUEBRA-ROCHA",
    " O DEVORADOR DE MEIAS",
    " O INIMIGO DA FÍSICA",
    " A AMEAÇA DO MICRO-ONDAS",
    " O SINDICATO DAS CADEIRAS",
    " O DESTRUIDOR DE PLANILHAS",
    " A ENTIDADE DO CORREDOR",
    " O FISCAL DO APOCALIPSE",
    " O PESADELO DO RH",
    " O LADRÃO DE GRAVIDADE",
    " A ÚLTIMA BOLACHA DO PACOTE",
    " O COLETOR DE IMPOSTOS CÓSMICOS",
    " O IMPERADOR DO MIOJO",
    " O INQUILINO DA LUA",
    " A MALDIÇÃO DO WI-FI",
    " O ADVOGADO DO CAOS",
    " O DEVORADOR DE DIMENSÕES",
    " O PRESIDENTE DO VAZIO",
    " A TESTEMUNHA DO BIG BANG",
    " O ESTAGIÁRIO DO INFERNO",
    " O CAVALEIRO DO SOFÁ",
    " O LAGARTO CONTÁBIL",
    " A CALAMIDADE DE CROCS",
    " O DESEMPREGADO INTERGALÁCTICO",
    " O GUARDIÃO DO ÚLTIMO PÃO",
    " O MINISTRO DAS COISAS ESTRANHAS",
    " A CATÁSTROFE DE BOLSO",
    " O QUE NÃO DEVERIA ESTAR AQUI",
    " O QUE SOBROU DA REALIDADE",
    " O ENTREGADOR DO FIM",
    " O PREDADOR DE CONTROLES REMOTOS",
    " A FALHA NO SISTEMA",
    " O PATRONO DAS TOMADAS FROUXAS",
    " O GENERAL DOS POMBOS",
    " O CARRASCO DO BOM SENSO",
    " A ABOMINAÇÃO DO CARTÓRIO",
    " O FENÔMENO SEM GARANTIA",
    " O DEUS DAS MIGALHAS",
    " O PROBLEMA DO VIZINHO",
    " O ÚLTIMO NEURÔNIO",
    " O INDESEJADO PELO UNIVERSO",
    " A RELÍQUIA DO ESTACIONAMENTO",
    " O DEVORADOR DE SENHAS",
    " O QUE NÃO TEM NOTA FISCAL",
    " O ANOMALISTA DE PLANTÃO",
    " O SER JURIDICAMENTE DUVIDOSO",
    " O ARQUIVO CORROMPIDO",
    " A CONSEQUÊNCIA DA CURIOSIDADE",
    " O INIMIGO DOS ELEVADORES",
    " O QUE VEIO SEM MANUAL"
];
let nomes = [
    "Pedro", "Roberto", "Cleiton", "Adalberto", "Valdemar",
    "Osvaldo", "Arnaldo", "Geraldo", "Cláudio", "Eustáquio",
    "Agnaldo", "Jurandir", "Reginaldo", "Waldir", "Edmilson",
    "Rogério", "Antenor", "Juvenal", "Norberto", "Baltazar",
    "Anacleto", "Ambrósio", "Clementino", "Gumercindo", "Leopoldo",
    "Teobaldo", "Eurípedes", "Firmino", "Lourenço", "Nivaldo",
    "Aloísio", "Benedito", "Crispim", "Demétrio", "Evaristo",
    "Florêncio", "Genésio", "Hermínio", "Inocêncio", "Jerônimo",
    "Lindolfo", "Maximiliano", "Napoleão", "Olegário", "Procópio",
    "Quirino", "Raimundo", "Salustiano", "Tibúrcio", "Ubirajara",
    "Zacarias", "Agostinho", "Belarmino", "Candido", "Damião",
    "Estevão", "Faustino", "Gaspar", "Horácio", "Isidoro",
    "Joaquim", "Lázaro", "Marcolino", "Nicodemos", "Onofre",
    "Pafúncio", "Rufino", "Severino", "Tristão", "Valentim",
    "Xavier", "Zoroastro", "Bartolomeu", "Cornélio", "Dorival",
    "Ezequiel", "Floriano", "Gregório", "Herculano", "Irineu",
    "Juvêncio", "Melquíades", "Plínio", "Romualdo", "Salvador",
    "Tertuliano", "Ulisses", "Virgulino", "Wenceslau", "Zulmário",
    "Alexandre", "Augusto", "Bruno", "Caetano", "Dário",
    "Ernesto", "Frederico", "Gilberto", "Heitor", "Ivan",
    "Júlio", "Marcelo", "Otávio", "Paulo", "Samuel",
    "Tomás", "Vicente", "Adelaide", "Berenice", "Clotilde",
    "Dolores", "Esmeralda", "Filomena", "Gertrudes", "Hermengarda",
    "Isaltina", "Jandira", "Leocádia", "Maristela", "Odete",
    "Quitéria", "Raimunda", "Teodora", "Úrsula", "Zenaide"
];
let sobrenomes = [
    "Alvarenga", "Figueiredo", "Batalha", "Mendonça", "Cavalcante",
    "Cavalcanti", "Vasconcelos", "Albuquerque", "Montenegro", "Siqueira",
    "Queiroz", "Magalhães", "Vasques", "Bittencourt", "Guimarães",
    "Andrade", "Medeiros", "Azevedo", "Carvalho", "Barbosa",
    "Nascimento", "Macedo", "Peixoto", "Tavares", "Bezerra",
    "Noronha", "Saldanha", "Marcondes", "Cordeiro", "Furtado",
    "Gouveia", "Lacerda", "Pimentel", "Severiano", "Menezes",
    "Vasconcelos", "Bragança", "Castanheira", "Drummond", "Fontes",
    "Frota", "Gusmão", "Junqueira", "Loureiro", "Matarazzo",
    "Nogueira", "Paranhos", "Ramalho", "Sampaio", "Trindade",
    "Valença", "Xavier", "Zanetti", "Abreu", "Bandeira",
    "Cascavel", "Dorneles", "Esteves", "Fagundes", "Garrido",
    "Holanda", "Jardim", "Lins", "Meireles", "Navarro",
    "Orleans", "Prado", "Rangel", "Sabino", "Torres",
    "Varela", "Barreto", "Coutinho", "Dantas", "Espinosa",
    "Ferraz", "Goulart", "Leitão", "Moura", "Pacheco",
    "Rebouças", "Serpa", "Teixeira", "Valverde", "Amaral",
    "Borges", "Camargo", "Duarte", "Freitas", "Guerra",
    "Lemos", "Moraes", "Pereira", "Ribeiro", "Soares",
    "Vieira", "Aragão", "Belmonte", "Capanema", "Damasceno",
    "Falcão", "Gondim", "Lobato", "Montalvão", "Paredes",
    "Quintela", "Siqueira", "Teles", "Vilar", "Zambrano"
];
const ameacas = [
    "NEGLIGÍVEL.",
    "BAIXO.",
    "MODERADO.",
    "ALTO.",
    "SEVERO.",
    "CATASTRÓFICO.",
    "EXISTENCIAL."
];
const contencoes = [
    "NÃO NECESSÁRIO.",
    "COMUM.",
    "MODERADO.",
    "SEGURÃNÇA MÁXIMA.",
    "EXTREMO.",
    "IMPOSSÍVEL."
];
let nomesSimbolicos = [
    "Fósforo da Perdição",
    "O Último Suspiro",
    "Vácuo Absoluto",
    "Cinzas do Amanhã",
    "Arauto do Fim",
    "Erro Fundamental",
    "Aquele que Observa",
    "Ruína Prematura",
    "Fragmento de Deus",
    "O Inquilino do Nada",
    "Déficit Existencial",
    "Santo dos Condenados",
    "Ponto Sem Retorno",
    "A Última Testemunha",
    "Silêncio Terminal",
    "O Desvio Original",
    "Princípio da Catástrofe",
    "Luto Cósmico",
    "O Fim da Linha",
    "Resíduo da Criação"
];
let origens = [
    "foi encontrado em um laboratório abandonado fazendo cálculos em uma parede",
    "foi encontrado em uma floresta deserta conversando com uma árvore",
    "foi encontrado em um hospital desativado organizando prontuários de pacientes inexistentes",
    "foi encontrado em uma estação de trem vazia esperando um trem que nunca existiu",
    "foi encontrado em uma instalação subterrânea construindo uma máquina desconhecida",
    "foi encontrado em uma igreja abandonada recitando nomes desconhecidos",
    "foi encontrado em um cemitério catalogando lápides sem inscrições",
    "foi encontrado em um shopping abandonado trabalhando como segurança",
    "foi encontrado em uma escola desativada escrevendo equações em todas as salas",
    "foi encontrado em um bunker militar organizando fotografias de pessoas desconhecidas",
    "foi encontrado em uma fábrica desativada operando máquinas sem energia",
    "foi encontrado em um túnel ferroviário conversando com alguém do outro lado da parede",
    "foi encontrado em um observatório abandonado apontando um telescópio para o chão",
    "foi encontrado em uma biblioteca subterrânea devolvendo livros que nunca foram emprestados",
    "foi encontrado em uma cidade deserta abrindo correspondências destinadas a pessoas mortas",
    "foi encontrado em um laboratório químico misturando substâncias desconhecidas",
    "foi encontrado em uma prisão abandonada contando as celas repetidamente",
    "foi encontrado em um hotel vazio registrando hóspedes que nunca chegaram",
    "foi encontrado em uma estação meteorológica prevendo tempestades em dias ensolarados",
    "foi encontrado em um depósito militar etiquetando objetos que não estavam lá",
    "foi encontrado em uma mina abandonada escavando uma parede de concreto",
    "foi encontrado em um navio encalhado transmitindo mensagens em código Morse",
    "foi encontrado em uma ilha desabitada construindo uma réplica de uma cidade desconhecida",
    "foi encontrado em um aeroporto desativado anunciando voos para destinos inexistentes",
    "foi encontrado em um escritório vazio carimbando documentos em branco",
    "foi encontrado em um laboratório de robótica ensinando matemática a uma cadeira",
    "foi encontrado em uma estação espacial abandonada contando estrelas que não existiam",
    "foi encontrado em um arquivo governamental destruindo documentos que ainda não foram escritos",
    "foi encontrado em uma torre de rádio transmitindo conversas gravadas no futuro",
    "foi encontrado em uma usina desativada tentando ligar um gerador sem componentes",
    "foi encontrado em um teatro abandonado ensaiando uma peça sem elenco",
    "foi encontrado em um museu fechado reorganizando exposições segundo uma lógica desconhecida",
    "foi encontrado em um laboratório de anatomia catalogando órgãos artificiais",
    "foi encontrado em uma fazenda deserta alimentando espantalhos",
    "foi encontrado em um farol abandonado sinalizando para embarcações invisíveis",
    "foi encontrado em uma estação de metrô lacrada vendendo bilhetes de papel queimado",
    "foi encontrado em um supermercado vazio pesando objetos que não estavam nas prateleiras",
    "foi encontrado em uma sala de interrogatório respondendo perguntas antes de serem feitas",
    "foi encontrado em um laboratório de informática digitando em computadores desligados",
    "foi encontrado em uma base polar abandonada desenhando mapas de lugares tropicais",
    "foi encontrado em um aquário desativado conversando com tanques vazios",
    "foi encontrado em uma oficina subterrânea consertando objetos que nunca foram fabricados",
    "foi encontrado em um prédio governamental abandonado realizando reuniões consigo mesmo",
    "foi encontrado em um elevador parado apertando botões de andares inexistentes",
    "foi encontrado em uma sala de controle observando câmeras que transmitiam imagens de sua própria sala",
    "foi encontrado em uma caverna iluminada por lâmpadas contando moedas enferrujadas",
    "foi encontrado em uma estação de pesquisa abandonada cultivando plantas metálicas",
    "foi encontrado em um laboratório genético preenchendo certidões de nascimento de espécies desconhecidas",
    "foi encontrado em um cofre aberto protegendo uma caixa vazia",
    "foi encontrado em uma sala de reuniões desenhando diagramas de uma organização inexistente",
    "foi encontrado em um banheiro público desativado instalando equipamentos de vigilância",
    "foi encontrado em uma praça deserta entrevistando estátuas",
    "foi encontrado em uma estrada abandonada instalando placas que apontavam para o mesmo lugar",
    "foi encontrado em uma estação de rádio transmitindo números durante horas",
    "foi encontrado em uma sala de servidores desconectando cabos que nunca estiveram conectados",
    "foi encontrado em um laboratório de física medindo a velocidade de sombras",
    "foi encontrado em uma fábrica de brinquedos produzindo miniaturas de pessoas desaparecidas",
    "foi encontrado em um arquivo policial investigando um crime sem vítimas",
    "foi encontrado em uma sala de aula vazia aplicando provas a alunos invisíveis",
    "foi encontrado em uma padaria abandonada preparando pães feitos de papel",
    "foi encontrado em um banco desativado contando notas com números negativos",
    "foi encontrado em uma estação de tratamento de água analisando amostras de areia",
    "foi encontrado em um laboratório de acústica gravando o silêncio",
    "foi encontrado em uma sala blindada tentando abrir uma porta que não tinha fechadura",
    "foi encontrado em um centro de pesquisas abandonado entrevistando uma máquina de café",
    "foi encontrado em uma plataforma petrolífera lacrada perfurando o fundo do oceano com uma colher",
    "foi encontrado em uma galeria subterrânea pintando retratos de pessoas desconhecidas",
    "foi encontrado em um depósito de documentos organizando páginas de livros que nunca foram publicados",
    "foi encontrado em uma sala de monitoramento rastreando um sinal originado dentro de seu próprio corpo",
    "foi encontrado em um laboratório de inteligência artificial escrevendo cartas para um computador desligado",
    "foi encontrado em uma oficina mecânica montando um motor sem peças móveis",
    "foi encontrado em uma sala de arquivos queimando fotografias que ainda estavam sendo tiradas",
    "foi encontrado em uma estação de bombeamento extraindo água de canos secos",
    "foi encontrado em um laboratório de astronomia catalogando estrelas com nomes de pessoas desaparecidas",
    "foi encontrado em um depósito frigorífico organizando cubos de gelo por data de fabricação",
    "foi encontrado em uma sala de segurança vigiando uma gravação ao vivo de uma sala vazia",
    "foi encontrado em um jardim botânico desativado plantando sementes feitas de vidro",
    "foi encontrado em um laboratório de engenharia desmontando uma máquina que ainda não havia sido construída",
    "foi encontrado em uma sala de arquivos médicos assinando laudos em nome de pacientes inexistentes",
    "foi encontrado em uma estação de energia abandonada carregando baterias que não possuíam terminais",
    "foi encontrado em uma fábrica de relógios ajustando todos os ponteiros para horários diferentes"
];
let personalidades = [
    // Positivas
    "Gentil",
    "Corajoso",
    "Leal",
    "Paciente",
    "Honesto",
    "Generoso",
    "Empático",
    "Otimista",
    "Determinado",
    "Altruísta",
    "Carismático",
    "Responsável",
    "Compreensivo",
    "Diplomático",
    "Protetor",
    "Perseverante",
    "Curioso",
    "Criativo",
    "Justo",
    "Confiável",

    // Neutras
    "Introvertido",
    "Extrovertido",
    "Reservado",
    "Sarcástico",
    "Pragmático",
    "Contemplativo",
    "Cético",
    "Impulsivo",
    "Descontraído",
    "Competitivo",
    "Independente",
    "Excêntrico",
    "Misterioso",
    "Teimoso",
    "Distraído",
    "Perfeccionista",
    "Idealista",
    "Prudente",
    "Tagarela",
    "Observador",

    // Negativas
    "Arrogante",
    "Egoísta",
    "Manipulador",
    "Vingativo",
    "Invejoso",
    "Preguiçoso",
    "Covarde",
    "Desonesto",
    "Cruel",
    "Autoritário",
    "Rancoroso",
    "Impaciente",
    "Desconfiado",
    "Vaidoso",
    "Ganancioso",
    "Pessimista",
    "Insensível",
    "Controlador",
    "Ressentido",
    "Prepotente",

    // Peculiares
    "Dramático",
    "Desastrado",
    "Excitável",
    "Sonhador",
    "Paranoico",
    "Disciplinado",
    "Supersticioso",
    "Melancólico",
    "Ingênuo",
    "Enigmático",
    "Obcecado",
    "Nostálgico",
    "Excêntrico",
    "Sentimental",
    "Desapegado",
    "Masoquista emocional",
    "Indecifrável",
    "Excessivamente literal",
    "Atrapalhado socialmente",
    "Caoticamente imprevisível"
];


function sortear(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

const nomeElemento = document.querySelector("#entity-name");
const tituloElemento = document.querySelector("#entity-title");
const ameacaElemento = document.querySelector("#threat-level");
const contencaoElemento = document.querySelector("#containment-level");

const botaoGerar = document.querySelector("#generate-report");

function gerarIdentidade() {
    const simbolico = Math.random() < 0.5;

    if (simbolico) {
        return sortear(nomesSimbolicos);
    }

    return `${sortear(nomes)} ${sortear(sobrenomes)}`;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chance(probabilidade) {
    return Math.random() * 100 < probabilidade;
}

function gerarAtributos() {
    const maxDEF = 150;

    let ATK = random(1, 100);
    let DEF = random(1, 150);
    let HP = random(50, 300);

    return { ATK, DEF, HP };
}
let atributos = gerarAtributos();

botaoGerar.addEventListener("click", () => {
    const nomeCompleto = `${sortear(nomes)} ${sortear(sobrenomes)}`;

    atributos = gerarAtributos();
    nomeElemento.textContent = gerarIdentidade();
    tituloElemento.textContent = sortear(titulos);

    ameacaElemento.textContent = sortear(ameacas);
    contencaoElemento.textContent = sortear(contencoes);
    originElemento.textContent = sortear(origens);
    
    ATKElement.textContent = atributos.ATK;
    DEFElement.textContent = atributos.DEF;
    HPElement.textContent = atributos.HP;
    PERSONElement.textContent = sortear(personalidades);

    let altura;
    if (chance(10)) {
        altura = random(1001, 10000000);
    } else {
        altura = random(1, 1000);
    };

    let idade;
    if (chance(10)) {
        idade = random (1001, 99999999999);
    } else {
        idade = random (1, 1000);
    };
    HEIGHTElement.textContent = `${altura}cm (${(altura / 100).toLocaleString("pt-BR")} Metros.)`;
    AGEElement.textContent = idade.toLocaleString("pt-BR") + " Anos.";
    marcarEntidade();
});





const mapa = document.querySelector("#world-map");
const mapaOriginal = mapa.textContent;

function marcarEntidade() {
    const caracteres = [...mapaOriginal];

    // Encontrar todas as posições que possuem #
    const posicoes = [];

    caracteres.forEach((caractere, indice) => {
        if (["#", "%", "@"].includes(caractere)) {
            posicoes.push(indice);
        }
    });

    // Sortear uma posição válida
    const posicao = posicoes[Math.floor(Math.random() * posicoes.length)];

    // Criar o X vermelho
    const marcador = document.createElement("span");
    marcador.textContent = "X";
    marcador.style.color = "red";
    marcador.style.fontWeight = "bold";

    // Reconstruir o mapa preservando os caracteres
    mapa.replaceChildren(
        document.createTextNode(caracteres.slice(0, posicao).join("")),
        marcador,
        document.createTextNode(caracteres.slice(posicao + 1).join(""))
    );
}












document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
        console.log(` NOME: ${nomeElemento.textContent},
            TITULO: ${tituloElemento.textContent},
            AMEAÇA: ${ameacaElemento.textContent},
            CONTENÇÃO: ${contencaoElemento.textContent},
            ORIGEM: ${originElemento.textContent}
            ATRIBUTOS: 
            ATAQUE: ${atributos.ATK},
            DEFESA: ${atributos.DEF},
            VIDA: ${atributos.HP} `);
    }
});