import { createHTMLElement } from "./utils";
import { handleUserMessage } from "./userMessage";
import moka_src from "./mocha.png";
import preludio_src from "./preludio.png";

const userMessage = (message) => {
  const span = createHTMLElement({
    el: "span",
    attributes: {
      class: "bg-purple-800 text-gray-100 rounded-lg shadow-sm p-3 w-full",
    },
    text: message,
  });
  const img_placeholder = createHTMLElement({
    el: "div",
    attributes: {
      class:
        "rounded-full w-[40px] h-[40px] bg-indigo-400 shrink-0 flex items-center justify-center text-white font-bold text-lg",
    },
    text: "VC",
  });
  const li = createHTMLElement({
    el: "li",
    attributes: {
      class: "flex items-start gap-1 h-fit",
    },
    children: [span, img_placeholder],
  });
  return li;
};

const botMessage = (message, isMoka = false) => {
  const messager = {};
  if (isMoka) {
    messager.src = moka_src;
    messager.alt = "O cara que fez a AI pra não ficar sozinho na live";
  } else {
    messager.src = preludio_src;
    messager.alt = "Uma IA de algum lugar genérico de MG";
  }
  const img_placeholder = createHTMLElement({
    el: "img",
    attributes: {
      src: messager.src,
      alt: messager.alt,
      class: "rounded-full w-[40px]",
    },
  });
  const span = createHTMLElement({
    el: "span",
    attributes: {
      class: "bg-white rounded-lg shadow-sm p-3 w-full",
    },
    text: message,
  });
  const li = createHTMLElement({
    el: "li",
    attributes: {
      class: "flex items-start gap-1 h-fit",
    },
    children: [img_placeholder, span],
  });
  return li;
};

const submitButton = document.querySelector("[data-submit]");
const chatContainer = document.querySelector("#chat_container");

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitButton.click();
  }
});

submitButton.addEventListener("click", () => {
  const input = document.querySelector("input");
  const message = input.value;
  if (!message) return;
  input.value = "";
  const typing = document.querySelector("[data-typing]");
  typing.setAttribute("data-typing", "true");
  setTimeout(() => {
    typing.setAttribute("data-typing", "false");
  }, 1500);
  const ul = document.querySelector("ul");
  const li = userMessage(message);
  ul.appendChild(li);
  chatContainer.scrollTop = chatContainer.scrollHeight;
  const preludioResponse = handleUserMessage(message);
  let bot;
  if (preludioResponse) {
    bot = botMessage(preludioResponse);
  } else {
    bot = botMessage(
      "Opa! ainda não programei essa parte da IA, podia tentar falar sobre outra coisa?",
      true
    );
  }
  setTimeout(() => {
    ul.appendChild(bot);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 1500);
});
