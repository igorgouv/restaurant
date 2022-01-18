function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);    // O javascript recebe apenas milesimos de segundos, por isso multiplicando por 1000, se nao multiplicasse e coloca-se apenas por exemplo: 10 segundos, nao ira alterar no relogio.
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'        // pode ser UTC ou GMT para zerar as horas, sem esse time zone o relogio fica em 21h, comente o timeZone para verificar essa informacao com console.log(criaHoraDosSegundos(10)) 
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;                 // Criou essa variavel para iniciar, pausar e reiniciar o timer.

function iniciaRelogio(){
    timer = setInterval(function (){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function (e) {   // Criamos esse addEventListener para evitar um acumulo de addEventListener deixando o codigo mais limpo, foi citado na aula que se tivessemos um site com varios butoes, iria causar um problema de congestionamento. 
    const el = e.target;

    if(el.classList.contains('zerar')){    // Se ao clicar (e.target) conter a class zerar, ira acontecer um evento restrito abaixo.
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

    if(el.classList.contains('iniciar')){    // Se ao clicar (e.target) conter a class iniciar, ira acontecer um evento restrito abaixo.
        relogio.classList.remove('pausado'); 
        clearInterval(timer);    
        iniciaRelogio();
    }

    if(el.classList.contains('pausar')){    // Se ao clicar (e.target) conter a class pausar, ira acontecer um evento restrito abaixo.
        relogio.classList.add('pausado');  
        clearInterval(timer);
    }
    // console.log(e.target);   // Com esta funcao e com este console log, ao clicarmos em qualquer elemento no site, ira mostrar o seu codigo no console.    
});


// Abaixo, consta o desenvolvimento da aula, mas retornamos o codigo abaixo dentro do codigo acima.

// iniciar.addEventListener('click', function(event) {
    //     relogio.classList.remove('pausado');  // Criando uma class css 'pausado', quando clicamos, remove ela para voltar ao estado 'normal' do timer.
    //     clearInterval(timer);   // Zerando o 'timer' para que nao tenha outro funcionando ao mesmo tempo quando iniciar. 
    //     iniciaRelogio();
// });

// pausar.addEventListener('click', function(event) {
//     relogio.classList.add('pausado');  // Em vez de remover como acima, adicionamos.
//     clearInterval(timer);
// });

// zerar.addEventListener('click', function(event) {
//     clearInterval(timer);
//     resultado.innerHTML = '00:00:00';
//     segundos = 0;
// });

