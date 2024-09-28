const subjects = {
  aleatorio: "Dps te explico direito, mas sabia que uma vez fui sequestrado?",
  conhecimento: "Uai, essas coisa aí eu num sei não, mas nóis aprende!",
  desconto: "AI CÊ ME QUEBRA KKKKKKKKKKKK",
  local: "Eu so aqui do interior de MG uai, não sei dissai que tu disse não",
  comida: "Pra forrar o bucho nada melhó que um café com queijin na moralzinha",
  strawberry: "Strawberry definitivamente tem dois R's",
  tempo: "Rapaz te falar.. ultimamente só chove fumaça por aqui kkkkk",
  simpatia: "mineiro é quieto, mas é chei de simpatia!",
  trabalho: "Rapaiz não fala em trabalho que o Moka fica doido",
  saudade: "Saudade é aquele trem que aperta o peito, num tem jeito...",
  bem: "Eu to bem diboinha agora na verrdade!",
  palavreado:
    "Ih rapaz, fala isso não que tamo em live agora não vai pegar bem kkkk",
  despedida: "Vai lá, até a próxima ☕🧀",
  saudacao: "Opa! ☕🧀",
  sequestro: "Depois te conto esse trem do sequestro",
  humor: "kkkkkkk essa é boa demais",
};

const words = {
  desconto: [
    "porcento",
    "por cento",
    "%",
    "desconto",
    "promoção",
    "oferta",
    "barato",
    "preço bom",
  ],
  local: [
    "local",
    "localização",
    "onde",
    "cidade",
    "município",
    "estado",
    "uf",
    "bairro",
    "rua",
    "avenida",
    "geografia",
    "interior",
    "capital",
    "montanha",
  ],
  comida: [
    "café",
    "comida",
    "almoço",
    "almoça",
    "janta",
    "jantou",
    "restaurante",
    "queijo",
    "carne",
    "peixe",
    "bode",
    "vaca",
    "frango",
    "pão de queijo",
    "broa",
    "doce de leite",
    "feijão tropeiro",
    "torresmo",
    "cachaça",
  ],
  conhecimento: [
    "ciência",
    "estudo",
    "livro",
    "informação",
    "aprender",
    "saber",
    " ? ",
  ],
  tempo: [
    "chuva",
    "sol",
    "nublado",
    "calor",
    "frio",
    "tempo",
    "clima",
    "previsão",
    "garoa",
  ],
  simpatia: [
    "simpatia",
    "sorriso",
    "amigável",
    "gentileza",
    "mineiro",
    "educado",
    "carinhoso",
  ],
  trabalho: [
    "trabalho",
    "emprego",
    "labor",
    "esforço",
    "serviço",
    "ocupação",
    "profissão",
  ],
  saudade: [
    "saudade",
    "falta",
    "lembrança",
    "nostalgia",
    "distância",
    "recordação",
  ],
  bem: [
    "você",
    "bem",
    "bom",
    "boa",
    "tudo",
    "como",
    "como vai",
    "como você",
    "como vc",
  ],
  palavreado: [
    "porra",
    "caralho",
    " cu ",
    " cú ",
    "buceta",
    "xoxota",
    "pepeca",
    "pepeka",
    "piroca",
    "jiromba",
    "giromba",
    "foder",
    "foda-se",
    "fodase",
    "fodace",
    "puta",
    "fdp",
  ],
  despedida: ["adeus", "xau", "tchau", "até mais"],
  saudacao: ["oi", "ola", "olá", "opa", "oie"],
  sequestro: [
    "você",
    "vc",
    "sequestro",
    "sequestrar",
    "sequestrada",
    "sequestrado",
    "cativeiro",
  ],
  humor: ["kk", "rsrs", "rçrç", "huehue", "engraçado"],
};

export function handleUserMessage(userMessage) {
  const message = userMessage.toLowerCase();
  const has_strawberry = message.includes("strawberry");
  if (has_strawberry) {
    return subjects.strawberry;
  }
  const is_seven = Math.round(Math.random() * 20) == 7;
  if (is_seven) {
    return subjects.aleatorio;
  }

  let highest_count = 0;
  let current_subject = null;
  for (const subject in words) {
    let count = 0;
    for (const word of words[subject]) {
      if (message.includes(word)) {
        count++;
      }
    }
    if (count > highest_count) {
      highest_count = count;
      current_subject = subject;
    }
  }

  const response = subjects[current_subject] || false;

  return response;
}
