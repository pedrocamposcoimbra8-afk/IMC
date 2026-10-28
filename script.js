let nome = prompt("Digite seu Nome: ")
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III" ;
    }
}


let imc = calcularIMC(peso, altura);
let classificacao = classificarIMC();
alert("Seu nome é: "+ nome + "\nSeu peso é: " + peso +"\nSeu IMC é: " + imc.toFixed(2) + "\nclassificação: " + classificacao );
