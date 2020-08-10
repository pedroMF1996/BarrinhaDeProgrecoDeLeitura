const postWrap = document.querySelector('.post-wrap');

//criar a barrinha
let bar = document.createElement('div');

//estilo da barrinha
bar.style.height = '4px';
bar.style.width = '0px';
bar.style.backgroundColor= '#6633cc';
bar.style.position = 'fixed';
bar.style.top = '0';
bar.style.left = '0';
bar.style.zIndex = '9999';
bar.style.transition="0.2s";

//adiciona no corpo da página
document.body.append(bar);

//atualizar a barrinha
function updateBar(){
    //o tamanho da caixa que contem o texto 6183.09
    const textHeight = postWrap.offsetHeight; //(da a altura total atualizada)

    //verificar em que posicionamento da página o user está
    const pagePositionY = window.pageYOffset; //(da a posição atualizada de em que altura o usuário está da página)
  
    //regra de 3
    const updatedBar = pagePositionY * 100 / textHeight;

    bar.style.width = updatedBar + '%';
}

document.addEventListener('load',()=>{
    //verificar o movimento do scroll
    document.addEventListener("scroll", updateBar);
});