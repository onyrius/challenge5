let textInput = document.querySelector('#text-input');
let memeText = document.querySelector('#meme-text');
const buttonText = document.querySelector('#buttonText');

document.addEventListener('keyup', escreverCarta);

function escreverCarta () {
    let textInput = document.querySelector('#text-input');
    memeText.innerHTML = textInput.value;
}

//--------------carrega imagem ------
let memeInsert = document.getElementById('meme-insert');
let memeImageContainer = document.querySelector('#meme-image-container');
const eventLog = document.querySelector('.event-log-contents')
let leitordeImagem = new FileReader()
let memeImage = document.querySelector('#meme-image')

function handleEvent(event) {
    eventLog.textContent = eventLog.textContent + `${event.type}: ${event.loaded} bytes transferred\n`;

    if (event.type === "load") {
        memeImage.src = leitordeImagem.result;
    }
}

function addEventListeners (leitordeImagem) {
    leitordeImagem.addEventListener('loadstart', handleEvent);
    leitordeImagem.addEventListener('load', handleEvent);
    leitordeImagem.addEventListener('loadend', handleEvent);
    leitordeImagem.addEventListener('progress', handleEvent);
    leitordeImagem.addEventListener('error', handleEvent);
    leitordeImagem.addEventListener('abort', handleEvent);
}
function handleSelected() {
    eventLog.textContent = '';
    const selectedFile = memeInsert.files[0];
    
    if (selectedFile) {
        
    addEventListeners(leitordeImagem);
    leitordeImagem.readAsDataURL(selectedFile);
    }
}

memeInsert.addEventListener('change', handleSelected)

/**Source https://developer.mozilla.org/en-US/docs/Web/API/FileleitordeImagem/loadend_event */

//------------- customiza borda ----------------
let buttonFire = document.querySelector('#fire');
let buttonWater = document.querySelector('#water');
let buttonEarth = document.querySelector('#earth');

buttonFire.addEventListener('click', mudarFire);
buttonWater.addEventListener('click', mudarWater);
buttonEarth.addEventListener('click', mudarEarth);

function mudarFire() {
let choiceOfStyle = window.getComputedStyle(buttonFire).border;
memeImageContainer.style.border = choiceOfStyle
console.log(choiceOfStyle);
}

function mudarWater() {
    let choiceOfStyle = window.getComputedStyle(buttonWater).border;
    memeImageContainer.style.border = choiceOfStyle
    console.log(choiceOfStyle);
    }
    
function mudarEarth() {
    let choiceOfStyle = window.getComputedStyle(buttonEarth).border;
    memeImageContainer.style.border = choiceOfStyle
        
}

      //--------  memes prontos ----
  let meme1 = document.querySelector('#meme-1');
  let meme2 = document.querySelector('#meme-2');
  let meme3 = document.querySelector('#meme-3');
  let meme4 = document.querySelector('#meme-4');

  meme1.addEventListener('click', escolherMeme);
  meme2.addEventListener('click', escolherMeme);
  meme3.addEventListener('click', escolherMeme);
  meme4.addEventListener('click', escolherMeme);

function escolherMeme () {
    
}