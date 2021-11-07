

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



if(anni >= 18 && anni <= 65){
    total = chilometri * prezzoBigliettoKm;
    let finalPrice = total.toFixed(2);
    console.log(finalPrice);
    
    document.getElementById('km').innerHTML = chilometri + ' km';
    document.getElementById('anni').innerHTML = anni + ' anni';
    document.getElementById('totale').innerHTML = finalPrice + ' €';
    
    const nero = document.querySelector('.nero');
    nero.style.color = 'black';
}

else if(anni < 18){
    total = chilometri * prezzoBigliettoKm - (chilometri * prezzoBigliettoKm * 20 / 100);
    let finalPrice = total.toFixed(2);
    console.log(finalPrice);
    
    document.getElementById('km').innerHTML = chilometri + ' km';
    document.getElementById('anni').innerHTML = anni + ' anni';
    document.getElementById('totale').innerHTML = finalPrice + ' € con sconto under 18';
    
    const nero = document.querySelector('.nero');
    nero.style.color = 'black';
}

else{
    total = chilometri * prezzoBigliettoKm - (chilometri * prezzoBigliettoKm * 40 / 100);

    let finalPrice = total.toFixed(2);
console.log(finalPrice);

document.getElementById('km').innerHTML = chilometri + ' km';
document.getElementById('anni').innerHTML = anni + ' anni';
document.getElementById('totale').innerHTML = finalPrice + ' € con sconto over 65';

const nero = document.querySelector('.nero');
nero.style.color = 'black';
    
}




