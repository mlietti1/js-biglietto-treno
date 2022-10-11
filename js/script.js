const prezzoKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver = 0.4;
let prezzoFinale

const kmUtente = prompt('Quanti Km devi percorrere?');

const prezzoIniziale = kmUtente * prezzoKm;

const etaUtente = prompt ('Quanti anni hai?');

if (etaUtente < 18) {
    prezzoFinale = prezzoIniziale * scontoMinorenni;
}else if (etaUtente >= 65) {
    prezzoFinale = prezzoIniziale * scontoOver;
}else {
    prezzoFinale = prezzoIniziale;
}

document.getElementById('costo-biglietto').innerHTML = prezzoFinale.toFixed(2)