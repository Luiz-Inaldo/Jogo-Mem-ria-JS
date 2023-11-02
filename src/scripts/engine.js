const emojis = [
    "😎",
    "😎",
    "😊",
    "😊",
    "😂",
    "😂",
    "😘",
    "😘",
    "🤣",
    "🤣",
    "😍",
    "😍",
    "😁",
    "😁",
    "😉",
    "😉"
];
let openCards = [];

//  variável que vai embaralhar os emojis
let shuffleEmojis = emojis.sort(() => {Math.random() > 0.5 ? 2 : -1});

// for que vai mostrar as boxes com emojis na tela
for (let i = 0; i < emojis.length; i++) {
    
    // variável box vai criar uma nova tag div
    let box = document.createElement("div");
    // adicionando a classe a div criada
    box.className = "item";
    // indicando o que terá dentro da tag div (variável box)
    box.innerHTML = shuffleEmojis[i];
    document.querySelector(".game").appendChild(box);
    
}