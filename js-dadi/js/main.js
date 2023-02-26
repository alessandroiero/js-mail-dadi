//array dado con i 6 numeri
const nDadi = ['1','2','3','4','5','6'];
//creiamo 2 variabili randomiche una per il valore inserito dall'utente e una per il valore del computer
const nUtente =Math.floor(Math.random() * nDadi.length);
console.log(`Lanci il dado ed esce= ${nUtente}`);

const nComputer = Math.floor(Math.random() * nDadi.length);
console.log(`Il PC lancia il dado ed esce= ${nComputer}`);
//ora facciamo una condizione che valuterà che se il valore della variabile utente è maggiore a quella del computer, stamperà "Hai vinto" altrimenti stamperà "Hai perso"
if(nUtente > nComputer){
    console.log('Hai vinto');
}else if(nUtente < nComputer){
    console.log('Hai perso');
}else{
    console.log('Pareggio');
}