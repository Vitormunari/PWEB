var eventos = require ('events');

//Atribuição da classe eventEmitter a uma variavel
var EmissorEventos = eventos.EventEmitter;
//Criação de uma instãncia do EventEmittervariávell:
var ee = new EmissorEventos();

//ou criando direto sema variável intermediária
//var ee = new eventos.EventEmitter();
//mas da forma anterior é uma boa prátiva

//é registrado um ouvinte (listenere) para o evento 'dados'
//Quando esse evento é emitido, a função passada como argumento
//Imprime no console o valor recebido

ee.on('dados',function(fecha){
    console.log(fecha);
});

//Emissão do evento a cada 500 milissegundos:
setInterval(function(){
    ee.emit('dados',Date.now());
},500);
