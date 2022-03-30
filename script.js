let url = 'https://significado.herokuapp.com/v2/';

let inputTxt = document.querySelector('#container_input_txt');
let btnTxt = document.querySelector('#container_btn');
let resultado = document.querySelector('#container_resultado');

btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value;
    if(palavra === ''){
        resultado.innerHTML = 
        `<p id="container_significado">Escreva alguma palavra no campo de busca!</p>`
    } else {
        fetch(`${url}${palavra}`)
        .then((resposta) => resposta.json())
        .then((data) => {
            console.log(data)
            resultado.innerHTML = 
                `<h3 id="container_result">${palavra}</h3>
                <p id="container_significado"><span>Gênero: </span>${data[0].partOfSpeech}</p>
                <p id="container_significado"><span>Etimologia: </span>${data[0].etymology}</p>
                <p id="container_significado"><span>1. </span>${data[0].meanings[0]}</p>
                <p id="container_significado"><span>2. </span>${data[0].meanings[1]}</p>`
            }).catch(() => {
                resultado.innerHTML = 
                `<p id="container_significado">Não foi possível achar essa palavra!</p>`
            })
    }
})