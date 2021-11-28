let textInput = document.querySelector('#text-input');
let memeImageContainer = document.querySelector('#meme-image-container');
let memeText = document.querySelector('#meme-text');
const buttonText = document.querySelector('#buttonText');

document.addEventListener('keyup', escreverCarta);

function escreverCarta () {
    let textInput = document.querySelector('#text-input');
    memeText.innerHTML = textInput.value;
}
