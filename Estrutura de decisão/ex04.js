const primo = parseFloat(prompt("Informe um número para saber que é primo ou não: "))

if(primo <= 1){
    console.log(primo + " não é um número primo");
} 
else{
    let ePrimo = true;
    for(let i = 2; i <= Math.sqrt(primo); i++){
        if(primo % i === 0){
            ePrimo = false;
            break;
        }
    }
    
    if(ePrimo){
        console.log(primo + " é um número primo");
    }
    else{
        console.log(primo + " não é um número primo");
    }
}