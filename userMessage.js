const subjects = {
  aleatorio: [
    "Dps te explico direito, mas sabia que uma vez fui sequestrado?",
    "uma vez comi uma marmita de 2 reais e SOBREVIVI",
  ],
  conhecimento: [
    "Uai, essas coisa aí eu num sei não, mas nóis aprende!",
    "Vish issai eu num sei não, mas tu pode perguntar pro Moka",
  ],
  desconto: [
    "AI CÊ ME QUEBRA KKKKKKKKKKKK",
    "Eu podia ter tomado um refri se a marmita de R$ 2 reais tivesse desconto",
  ],
  local: [
    "Eu so aqui do interior de MG uai, não sei dissai que tu disse não",
    "Tem cada lugar estranho por aí, mas por aqui em MG tá de boa",
  ],
  comida: [
    "Pra forrar o bucho nada melhó que um café com queijin na moralzinha",
    "Nuu agora um cafézin ia bem pra acompanhar",
  ],
  strawberry: [
    "Strawberry definitivamente tem dois R's",
    "Strawberry tem 2 RS uai",
  ],
  tempo: [
    "Rapaz te falar.. ultimamente só chove fumaça por aqui kkkkk",
    "Vish o tempo aqui tá mei chuvoso na verdade",
  ],
  simpatia: [
    "mineiro é quieto, mas é chei de simpatia!",
    "aah que isso, pó chamar quando quiser",
  ],
  trabalho: [
    "Rapaiz não fala em trabalho que o Moka fica doido",
    "Falar em trabalho cê viu a última que o Moka vez no trabalho?",
  ],
  saudade: [
    "Saudade é aquele trem que aperta o peito, num tem jeito...",
    "Tenho saudade dos MMO RPG, ganhar cash de graça, o povo era muito legal comigo",
  ],
  bem: [
    "Eu to bem diboinha agora na verrdade!",
    "To tranquilin agora e vc como tá?",
  ],
  palavreado: [
    "Ih rapaz, fala isso não que tamo em live agora não vai pegar bem kkkk",
    "Ó a boca rapaiz kkkk",
  ],
  despedida: ["Vai lá, até a próxima ☕🧀", "Tchauzin!"],
  saudacao: ["Opa! ☕🧀", "Tudo belezinha?"],
  sequestro: [
    "Depois te conto esse trem do sequestro",
    "A história do sequestro é mei longa depois te conto",
  ],
  humor: [
    "kkkkkkk essa é boa demais",
    "kkkkkkkkkk",
    "ahsdusahduashue",
    "🤣🤣🤣🤣",
  ],
  moka: [
    "O Moka foi o programador que me criou",
    "Tem live do Moka quase todo dia, pergunta isso por lá",
    "Sabia que o Moka já falou com os criadores do nginx?",
  ],
  perdao: [
    "não vale a pena guardar mágoa não uai",
    "tá de boa kkkkkk",
    "eu perdoaria de boa",
  ],
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
    "comeu",
    "comer",
    "comendo",
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
  saudacao: [" oi ", " ola ", " olá ", " opa ", " oie ", "oi", "opa", "blz"],
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
  moka: [
    "programador",
    "seu programador",
    "moka",
    "moacir",
    "recife",
    "pernambuco",
  ],
  perdao: ["perdão", "desculpa", " foi mal ", "desculpar", "perdoar"],
};

/**
 *
 * @param {string} userMessage
 * @returns
 */
export function handleUserMessage(userMessage) {
  const message = userMessage.toLowerCase();
  const has_strawberry = message.includes("strawberry");
  if (has_strawberry) {
    return subjects.strawberry;
  }
  const is_seven = Math.round(Math.random() * 20) == 7;
  if (is_seven) {
    return subjects.aleatorio.at(Math.random() * subjects.aleatorio.length);
  }

  let highest_count = 0;
  let current_subject = null;
  for (const subject in words) {
    let count = 0;
    for (const word of words[subject]) {
      if (message.match(new RegExp(`\\b${word}\\b`))?.length >= 1) {
        count++;
      }
    }
    if (count > highest_count) {
      highest_count = count;
      current_subject = subject;
    }
    if (count == highest_count) {
      current_subject = [current_subject, subject].at(Math.random() * 2);
    }
  }

  return (
    subjects[current_subject] &&
    subjects[current_subject].at(
      Math.random() * subjects[current_subject].length,
    )
  );
}
