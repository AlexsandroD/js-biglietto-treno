

const chilometri = parseFloat(prompt('numero di chilometri da percorrere'));
console.log(chilometri);

if(isNaN(chilometri)){
    chilometri = parseFloat(prompt('Inerisci un numero valido per i Chilometri'));
}

const anni = parseInt(prompt('Etá'));
console.log(anni);

if(isNaN(anni)){
    anni = parseInt(prompt('Inserisci un numero valido per etá'))
}

const prezzoBigliettoKm = 0.21;
console.log(prezzoBigliettoKm);

let total = 0;



if(anni >= 18 && anni <=65){
    total = chilometri * prezzoBigliettoKm;
    
}

else if(anni < 18){
    total = chilometri * prezzoBigliettoKm - (chilometri * prezzoBigliettoKm * 20 / 100);
    
}

else{
    total = chilometri * prezzoBigliettoKm - (chilometri * prezzoBigliettoKm * 40 / 100);
    
}


let finalPrice = total.toFixed(2);
console.log(finalPrice);

document.getElementById('km').innerHTML = chilometri;
document.getElementById('anni').innerHTML = anni;
document.getElementById('totale').innerHTML = finalPrice;