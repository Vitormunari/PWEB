while(true){

var comput = (parseInt(Math.random() * 30));
var escolhaUsuario = prompt("Escolha pedra, papel ou tesoura:").toLowerCase();


// Verifica a escolha do computador
if (comput <= 10) {
    var computescolha = "pedra";
} else if 
    (comput > 10 && comput <= 20) {
    var computescolha = "tesoura";
} 
else {
    var computescolha = "papel";
}

alert("A Escolha do Computador é " + computescolha);

// Verifica o resultado do jogo
if (escolhaUsuario === computescolha) {
    alert("Empate!");
} else if (
    (escolhaUsuario === "pedra" && computescolha === "tesoura") ||
    (escolhaUsuario === "tesoura" && computescolha === "papel") ||
    (escolhaUsuario === "papel" && computescolha === "pedra")
) {
    alert("Você ganhou!");
} else {
    alert("Você perdeu!");
}

}
