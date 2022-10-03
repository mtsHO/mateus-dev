// colapse botao projetos

const botaoProjeto = document.querySelector('.btn-projetos, .btn-projetos-sobre');
const botaoVoltar = document.querySelector('.botao-voltar');
let todosProjetos = document.querySelector('.todos-projetos');

botaoProjeto.addEventListener('click', abrirBotao);
botaoVoltar.addEventListener('click', abrirBotao);

function abrirBotao(event) {
    todosProjetos.classList.toggle('todos-projetos-completo');
};

// colapse botao sobre

const botaoSobre = document.querySelector('.btn-sobre, .btn-sobre-sobre');
let cartaoSobre = document.querySelector('.cartao-sobre');

botaoSobre.addEventListener('click', abrirSobre);

function abrirSobre(event) {
    cartaoSobre.classList.toggle('cartao-sobre-completo');
};


//botao ver projeto

const cartaoProjeto1 = document.querySelector('.projeto-1-completo');
const cartaoProjeto2 = document.querySelector('.projeto-2-completo');
const cartaoProjeto3 = document.querySelector('.projeto-3-completo');
const cartaoProjeto4 = document.querySelector('.projeto-4-completo');
const cartaoProjeto5 = document.querySelector('.projeto-5-completo');
const cartaoProjeto6 = document.querySelector('.projeto-6-completo');
const cartaoProjeto7 = document.querySelector('.projeto-7-completo');


const projetoAtivo = document.querySelectorAll('input');

const botaoSaberMais = document.querySelector('.projetos-saber-mais')

botaoSaberMais.addEventListener('click', saberMaisProjeto);

function saberMaisProjeto(event) {

    for (i = 0; i < projetoAtivo.length; i++) {
        if (projetoAtivo[i].checked) {
            if (i === 0) {
                cartaoProjeto1.style.display = "flex";
            } else if (i === 1) {
                cartaoProjeto2.style.display = "flex";
            } else if (i === 2) {
                cartaoProjeto3.style.display = "flex";
            } else if (i === 3) {
                cartaoProjeto4.style.display = "flex";
            } else if (i === 4) {
                cartaoProjeto5.style.display = "flex";
            } else if (i === 5) {
                cartaoProjeto6.style.display = "flex";
            } else if (i === 6) {
                cartaoProjeto7.style.display = "flex";
            }
        }
    }

}

const botaoVoltarProjeto1 = document.querySelector('.botao-voltar-projeto1');
const botaoVoltarProjeto2 = document.querySelector('.botao-voltar-projeto2');
const botaoVoltarProjeto3 = document.querySelector('.botao-voltar-projeto3');
const botaoVoltarProjeto4 = document.querySelector('.botao-voltar-projeto4');
const botaoVoltarProjeto5 = document.querySelector('.botao-voltar-projeto5');
const botaoVoltarProjeto6 = document.querySelector('.botao-voltar-projeto6');
const botaoVoltarProjeto7 = document.querySelector('.botao-voltar-projeto7');

botaoVoltarProjeto1.addEventListener('click', votarPaginaProjeto1);
botaoVoltarProjeto2.addEventListener('click', votarPaginaProjeto2);
botaoVoltarProjeto3.addEventListener('click', votarPaginaProjeto3);
botaoVoltarProjeto4.addEventListener('click', votarPaginaProjeto4);
botaoVoltarProjeto5.addEventListener('click', votarPaginaProjeto5);
botaoVoltarProjeto6.addEventListener('click', votarPaginaProjeto6);
botaoVoltarProjeto7.addEventListener('click', votarPaginaProjeto7);

function votarPaginaProjeto1(event) {
    cartaoProjeto1.style.display = "none";
}

function votarPaginaProjeto2(event) {
    cartaoProjeto2.style.display = "none";
}

function votarPaginaProjeto3(event) {
    cartaoProjeto3.style.display = "none";
}

function votarPaginaProjeto4(event) {
    cartaoProjeto4.style.display = "none";
}

function votarPaginaProjeto5(event) {
    cartaoProjeto5.style.display = "none";
}

function votarPaginaProjeto6(event) {
    cartaoProjeto6.style.display = "none";
}

function votarPaginaProjeto7(event) {
    cartaoProjeto7.style.display = "none";
}

const botaoSite = document.querySelector('.projetos-ver-site');

function duploClick(event) {
    if (event === 0) {
        cartaoProjeto1.style.display = "flex";
    } else if (event === 1) {
        cartaoProjeto2.style.display = "flex";
    } else if (event === 2) {
        cartaoProjeto3.style.display = "flex";
    } else if (event === 3) {
        cartaoProjeto4.style.display = "flex";
    } else if (event === 4) {
        cartaoProjeto5.style.display = "flex";
    } else if (event === 5) {
        cartaoProjeto6.style.display = "flex";
    } else if (event === 6) {
        cartaoProjeto7.style.display = "flex";
    }
}