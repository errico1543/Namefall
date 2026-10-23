const terms = document.querySelector("#Terms");
const toggleButton = document.querySelector("#toggle-terms");
const imageinput = document.querySelector("#image-input");
    const imagePreview = document.querySelector("#image-preview");

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
    "NEGLIGIBLE",
    "LOW",
    "MODERATE",
    "HIGH",
    "SEVERE",
    "CATASTROPHIC",
    "EXISTENTIAL"
];
const contencoes = [
    "UNRESTRICTED",
    "STANDARD",
    "MODERATE",
    "HIGH-SECURITY",
    "EXTREME",
    "IMPOSSIBLE"
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

botaoGerar.addEventListener("click", () => {
    const nomeCompleto = `${sortear(nomes)} ${sortear(sobrenomes)}`;

    nomeElemento.textContent = nomeCompleto;
    tituloElemento.textContent = sortear(titulos);

    ameacaElemento.textContent = sortear(ameacas);
    contencaoElemento.textContent = sortear(contencoes);
});