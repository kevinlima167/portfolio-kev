
// ANIMAÇÃO DE SCROLL

let section = document.querySelectorAll('section');

let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let ofsset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < ofsset + height){
            //ativar os links do cabeçalho
            navlinks.forEach(links =>{
                links.classList.remove('ativo');
                document.querySelector('header nav a[href*=' + id +']').classList.add('ativo');
            })
        }
        // //animar cabeçalho
        // let header = document.querySelector('header');
        // header.classList.toggle('sticky', window.scrollY > 100);
    })
}   
// FIM DE ANIMAÇÃO DO SCROLL

// edição de formulario

const form = document.querySelectorAll("#form");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const numero = document.querySelector("#numero");
const mensagem = document.querySelector("#mensagem");

form.addEventListener("submit", (event) => {
    event.prventDefault();
   
    //Verifica se o nome esta vazio
    if( nameInput.value ===""){
        alert("Por favor precha seu nome");
        return;
    }
});


