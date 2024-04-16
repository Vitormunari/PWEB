function NumMaior() {
    let numeros = new Array(3);
    
    numeros[0] = parseFloat(prompt('Insira o primeiro número: '));
    numeros[1] = parseFloat(prompt('Insira o segundo número: '));
    numeros[2] = parseFloat(prompt('Insira o terceiro número: '));

    const maiorNumero = Math.max(...numeros);
    alert(`O maior número é: ${maiorNumero}`);
}

function OrdemCrescente() {
    let ordem = new Array(3);

    ordem[0] = parseFloat(prompt('Insira o primeiro número: '));
    ordem[1] = parseFloat(prompt('Insira o segundo número: '));
    ordem[2] = parseFloat(prompt('Insira o terceiro número: '));

    ordem.sort((a, b) => a - b);

    alert(`Os números em ordem crescente são: ${ordem.join(', ')}`);
}

function Palindromo() {
    let palavra = prompt("Insira a palavra para testar se é palíndromo: ").toUpperCase().replace(/ /g, "");

    // Inverte a palavra
    let palavraInvertida = palavra.split("").reverse().join("");

    // Verifica se a palavra é um palíndromo
    if (palavra === palavraInvertida) {
        alert("É palíndromo!");
    } 
    else {
        alert("Não é palíndromo.");
    }
}

function Triangulo() {

    let lado1 = parseFloat(prompt("Digite o valor do lado A: "));
    let lado2 = parseFloat(prompt("Digite o valor do lado B: "));
    let lado3 = parseFloat(prompt("Digite o valor do lado C: "));

    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        alert ("Os valores informados não formam um triângulo.");
    }
    else if (lado1 === lado2 && lado2 === lado3) {
        alert ("Triângulo Equilátero"); // Todos os lados iguais
    } 
    else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert( "Triângulo Isósceles"); // Dois lados iguais
    } 
    else {
        alert ("Triângulo Escaleno"); // Todos os lados diferentes
    }

}

NumMaior();

OrdemCrescente();

Palindromo();

Triangulo();