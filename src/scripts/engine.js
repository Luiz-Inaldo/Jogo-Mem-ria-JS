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
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// for que vai mostrar as boxes com emojis na tela
for (let i = 0; i < emojis.length; i++) {
    
    // variável box vai criar uma nova tag div
    let box = document.createElement("div");

    // adicionando a classe a div criada
    box.className = "item";

    // indicando o que terá dentro da tag div (variável box)
    box.innerHTML = shuffleEmojis[i];

    // indicando o que acontecerá com a box quando for clicada
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
    
}

function handleClick(){
    if (openCards.length < 2){
        this.classList.add('boxOpen');
        openCards.push(this);
    }

    if (openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){

    // condições para verificar se os dois card são iguais ou não
    if (openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add('boxMatch');
        openCards[1].classList.add('boxMatch');
    } else {
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen');
    }

    // resetando a openCards
    openCards = [];

    // condição de vitória
    if (document.querySelectorAll('.boxMatch').length === emojis.length){
        alert('Você venceu !');
    }
}