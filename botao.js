// colapse botao projetos

const botaoProjeto = document.querySelector('.btn-projetos');
const botaoVoltar = document.querySelector('.botao-voltar');
let todosProjetos = document.querySelector('.todos-projetos');

botaoProjeto.addEventListener('click', abrirBotao);
botaoVoltar.addEventListener('click', abrirBotao);
  
function abrirBotao(event) {
    todosProjetos.classList.toggle('todos-projetos-completo');
};


// colapse botao sobre

const botaoSobre = document.querySelector('.btn-sobre');
let cartaoSobre = document.querySelector('.cartao-sobre');

botaoSobre.addEventListener('click', abrirSobre);
  
function abrirSobre(event) {
    cartaoSobre.classList.toggle('cartao-sobre-completo');
};


//botao ver projeto

const cartaoProjeto1 = document.querySelector('.projeto-1-completo');
const cartaoProjeto2 = document.querySelector('.projeto-2-completo');
const cartaoProjeto3 = document.querySelector('.projeto-3-completo');

const projetoAtivo = document.querySelectorAll('input');

const botaoSaberMais = document.querySelector('.projetos-saber-mais')

botaoSaberMais.addEventListener('click', saberMaisProjeto);

function saberMaisProjeto(event){

    for (i=0; i<projetoAtivo.length; i++){
        if(projetoAtivo[i].checked){
            if(i===0){
                cartaoProjeto1.style.display = "flex";
            } else if (i===1){
                cartaoProjeto2.style.display = "flex";
            } else if (i===2){
                cartaoProjeto3.style.display = "flex";
            }
        }
    }
    
}

const botaoVoltarProjeto1 = document.querySelector('.botao-voltar-projeto1');
const botaoVoltarProjeto2 = document.querySelector('.botao-voltar-projeto2');
const botaoVoltarProjeto3 = document.querySelector('.botao-voltar-projeto3');

botaoVoltarProjeto1.addEventListener('click', votarPaginaProjeto1);
botaoVoltarProjeto2.addEventListener('click', votarPaginaProjeto2);
botaoVoltarProjeto3.addEventListener('click', votarPaginaProjeto3);

function votarPaginaProjeto1(event){
    cartaoProjeto1.style.display = "none";
}

function votarPaginaProjeto2(event){
    cartaoProjeto2.style.display = "none";
}

function votarPaginaProjeto3(event){
    cartaoProjeto3.style.display = "none";
}


const botaoSite = document.querySelector('.projetos-ver-site');

function duploClick(event){
    if(event===0){
        cartaoProjeto1.style.display = "flex";
    } else if (event===1){
        cartaoProjeto2.style.display = "flex";
    } else if (event===2){
        cartaoProjeto3.style.display = "flex";
    }
}











