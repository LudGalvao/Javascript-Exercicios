console.log("(1 = +, 2 = -, 3 = *, 4 = /)")
const calc = prompt("Informe um sinal para fazer um calculo: ")

switch(calc){
    case "1":
        num1 = parseFloat(prompt("Informe o primeiro número: "))
        num2 = parseFloat(prompt("Informe o segundo número: "))
        console.log(`A soma entre ${num1} e ${num2} é ${num1+num2}`)
        break;

    case "2":
        num1 = parseFloat(prompt("Informe o primeiro número: "))
        num2 = parseFloat(prompt("Informe o segundo número: "))
        console.log(`A subtração entre ${num1} e ${num2} é ${num1-num2}`)
        break;

    case "3":
        num1 = parseFloat(prompt("Informe o primeiro número: "))
        num2 = parseFloat(prompt("Informe o segundo número: "))
        console.log(`A multiplicação entre ${num1} e ${num2} é ${num1*num2}`)
        break;
    
    case "4":
        num1 = parseFloat(prompt("Informe o primeiro número: "))
        num2 = parseFloat(prompt("Informe o segundo número: "))
        console.log(`A divisão entre ${num1} e ${num2} é ${num1/num2}`)
        break;
    
    default:
        console.log("Inválido")
        break;

}