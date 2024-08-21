function digito(n, k){
    if (n.length === 1){
        return parseInt(n);
    }
    var p=""
    for (let repetidos=0;repetidos < k;repetidos++){
        p+=n
    }
    console.log((p));
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        sum += parseInt(n[i]);
    }
    sum *= k;
    console.log(sum)
    return digito(sum.toString(), 1);
}
let n=String(prompt("Ingresa los dígitos: "))
let k=parseInt(prompt("Ingresa un número: "))
console.log("los dígitos repetidos x cantidad de veces: ")
console.log(digito(n, k)); 
