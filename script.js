let peso = prompt("Digite o seu peso")
let altura = prompt("Digite sua altura (m)")

let resultado = calcularIMC(peso, altura)
alert(resultado)

function calcularIMC(peso, altura){
    return peso/ (altura * altura)
}


function classificarIMC(imc) {
    if (imc < 18.5) {
        return "abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}

let classificacao = classificarIMC(resultado)
alert("Sua classificação é:" + classificacao)
