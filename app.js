var p1 = 127;
var p2 = 137;
var n = p1*p2;
var phyn = (p1-1)*(p2-1);
var abecedario = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "ñ","o", "p", "q","r", "s", "t","u", "v", "w","x", "y","z", " "];
let listaensayo;


 // halla el maximo comun divisor entre phy(n) y e, para poder encontrar el e apropiado que de como resultado gcd(e,phy(n))=1
function mcd(a,b){
    while (true){
        gcd(a, b);
        if(gcd(a, phyn)==1){
            console.log(a);
            console.log(gcd(a, b));
            break;
        }else{
            a++
        }
    }
    return a;
}
//encripta o desencripta los numeros con la formula a^n mod z
function expModZViaCuadradoRepetido(a, n, z) {
    let resultado = BigInt(1);
    let x = BigInt(a) % BigInt(z);
    let nBigInt = BigInt(n);
    let zBigInt = BigInt(z);

    while (nBigInt > 0) {
        if (nBigInt % BigInt(2) === BigInt(1)) { // Si n es impar
            resultado = (resultado * x) % zBigInt;
        }
        x = (x * x) % zBigInt; // Cuadrar x
        nBigInt = nBigInt / BigInt(2); // Dividir n entre 2
    }

    return resultado;
}


// Define una función para encontrar el GCD usando el Algoritmo de Euclides
function gcd(a, b) {
    // Si el segundo número es 0, el primer número es el GCD
    if (b === 0) {
        return a;
    } else {
        // Llama a la función recursivamente con 'b' y el residuo de 'a' dividido por 'b'
        return gcd(b, a % b);
    }
}

function encriptar(){
    let e=2;
    const text = document.getElementById('criptacion');
    const muestra = document.getElementById('muestra');
    const texto =text.value; 
    // divide los elementos uno por uno en la lista
    let letraxletra = texto.split('');
    letraxletra;
    listaconnumeros=[];
    listaconnumerosencrip=[];
    listaconnumerosdesencrip=[];
    const j=letraxletra.length;
    // crea una lista donde pasa las letras a numeros para poder ser encriptados
    for (let i = 0; i < j; i++  ) {
        for (let n = 0; n < 28;n++) {
            if(letraxletra[i]==abecedario[n]){
                listaconnumeros.push(n);
            }   
        }
    }
    e=mcd(e,phyn);
    // encripta los numeros y los mete en una lista
    for (i = 0; i < listaconnumeros.length; i++) {
        let num=expModZViaCuadradoRepetido(listaconnumeros[i], e, n);
        if(num<10){
            let zero = '0'
            let letra=String(num);
            let combinedString = zero.toString() + letra.toString();
            listaconnumerosencrip.push(combinedString);

        }else{
            let letra=String(num);
            listaconnumerosencrip.push(letra);
        }
       
    }
    let arrayString = listaconnumerosencrip.join(' ');
    muestra.value = arrayString;
    console.log(texto);
}

function desencriptar(){
    let listaconnumerosdes=[];
    let e=2;
    let k=1;
    let d=0;
    let listaensayo1 =[];
    const muestra = document.getElementById('muestra');
    const text = document.getElementById('criptacion');
    const texto =text.value; 
    // divide los elemntos uno por uno en la lista
    let letraxletra = texto.split('');
    let listaconnumerosdesencrip =[];
    letraxletra;
    console.log(letraxletra);
    e=mcd(e,phyn);
    // encuentra el d
    while (true){
        d = (1+(k*phyn))/e;
        if(Number.isInteger(d)){
            break;
        }else{
            k++
        }
    }
    
    
    // junta los numeros y los mete en una lista
    listaensayo1 = texto.split(" ");  // Divide la cadena en un array usando "-" como separador
    
    const enteros = listaensayo1.map(num => parseInt(num));
    // descifra los numeros y los que son de un digito les agrega un 0 a la izquierda y los mete en una lista
    for (i = 0; i < listaensayo1.length; i++) {
        let nume=expModZViaCuadradoRepetido(enteros[i], d, n);
        console.log(enteros[i]);
        if(nume<10){
            let zero = '0'
            let letra=String(nume);
            let combinedString = zero.toString() + letra.toString();
            listaconnumerosdesencrip.push(combinedString);

        }else{
            let letra=String(nume);
            listaconnumerosdesencrip.push(letra);
        }
    }
    const j=listaconnumerosdesencrip.length;
    console.log(listaconnumerosdesencrip);
    // toma los numeros desencriptados y los vuelve letras de nuevo para asi meterlos en una lista
    for (let i = 0; i < j; i++  ) {
        for (let n = 0; n < 28;n++) {
            if(listaconnumerosdesencrip[i]==n){
                listaconnumerosdes.push(abecedario[n]);
            }   
        }
    }
    
    //junta los elementos de la lista
    let arrayString = listaconnumerosdes.join('');
    muestra.value = arrayString;
}


 

