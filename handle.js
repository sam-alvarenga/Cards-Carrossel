let index = 1;
showSlides(index);

// Altera o slide atual para o slide que o usuário clicar
function addSlides(n) {
    showSlides(index += n)
}

//Carrega o card atual que o usuário quer exibir
function currentSlide(n){
    showSlides(index = n)
}

//irá exibir o card na tela
function showSlides(n) {
    //seleciona os cards
    let slides = document.getElementsByClassName("slides");
    //seleciona os pontos que irão alterar o card atual na tela
    let dots = document.getElementsByClassName("dot");

    //se o número do slide que o usuário tentar exibir for maior que a quantidade de cards disponíveis ele irá automáticamente voltar para o primeiro slide ou seja, quando o usuário estiver no último slide ele automáticamente volta para o primeiro
    if(n > slides.length) {
        index = 1;
         //index = slides.length
    }
    //se o número do slides for menor que 0 ele irá automaticamente para o último card do slide
    if( n < 1) {
        index = slides.length
        //index = 1;
       
    }
    
    for (let count=0; count<slides.length; count++) {
        slides[count].style.display = 'none';

        //replace(" active, "") =
        dots[count].className = dots[count].className.replace(" active", "");
    }
    slides[index-1].style.display = "flex";
    dots[index-1].className += " active";

    
}

