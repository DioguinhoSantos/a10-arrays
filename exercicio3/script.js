let apenasNumeros = [14, 7.5, 1];
let apenasLetrinhas = ["Santos","pão de queijo","cumbuca"];
let apenasTudo = [1, "devaneio", 5>2];

let apenasNumerosCopia = apenasNumeros.slice(0, 3);
let apenasLetrinhasCopia = apenasLetrinhas.slice(0, 3);
let apenasTudoCopia = apenasTudo.slice(0,3);

apenasNumerosCopia.push(30);
apenasLetrinhasCopia.pop();
apenasTudoCopia.splice(1, 1);

console.log(apenasNumeros);
console.log(apenasNumerosCopia);

console.log(apenasLetrinhas);
console.log(apenasLetrinhasCopia);

console.log(apenasTudo);
console.log(apenasTudoCopia);



/*console.log(apenasNumeros);
console.log(apenasLetrinhas);
console.log(apenasTudo);*/
