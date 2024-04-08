var idade,
    sexo,
    opiniao,
    i,
    somaIdade=0,
    mediaIdade=0,
    idadeMaior=0,
    idadeMenor = 969,  //Idade de Matusalém, o homem mais vivido do mundo
    qtdePessimo=0,
    qtdeOtmBom=0,
    porcOtmBom=0,
    qtdeMasc=0,
    qtdeFem=0;

    var qtdPessoas = prompt("Informe a quantidade de pessoas que vão responder:");

for(i = 0; i < qtdPessoas; i++){
    
    idade = parseInt(prompt("Digite sua idade: "));
    sexo = prompt("Digite seu sexo:\nM - Masculino\nF - Feminino ").toUpperCase();
    opiniao = parseInt(prompt("Digite sua opnião:\n1 - Péssimo\n2 - Regular\n3 - Bom\n4 - Ótimo"));

    somaIdade += idade;

    if(idade > idadeMaior){
        idadeMaior = idade;
    }

    if(idade < idadeMenor){
        idadeMenor = idade;
    }

    if(opiniao === 1){
        qtdePessimo++;
    }

    if(opiniao === 4 || opiniao === 3){
        qtdeOtmBom++;
    }

    if(sexo == "M"){
        qtdeMasc++;
    }
    else if(sexo == "F"){
        qtdeFem++;
    }
}

mediaIdade = somaIdade / qtdPessoas;

porcOtmBom = (qtdeOtmBom / qtdPessoas) * 100;

alert(`Média das idades = ${mediaIdade}\n
       Idade da pessoa mais velha = ${idadeMaior}\n
       Idade da pessoa mais nova = ${idadeMenor}\n
       Quantidade de pessoas que responderam Péssimo = ${qtdePessimo}\n
       Porcentagem das pessoas que responderam Ótimo e Bom= ${porcOtmBom}%\n
       Número de mulheres que responderam o questionário = ${qtdeFem}\n
       Número de homens que responderam o questionário = ${qtdeMasc}\n`);
