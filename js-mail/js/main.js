//creiamo un array di tot email che successivamente faremo controllare
const mail = ['alessandro@email.it', 'roberto@email.com', 'nicola@gmail.com', 'alex@gmail.com'];
//Creiamo un prompt che chiederà l'email 
const mailInserita = prompt('Inserisci la tua email');
let contenuto = false;
//creo un for  dove l' indice scorrerà tutta la lista
//Controlliamo con un ciclo for tutto il contenuto tramite la condizione .length e successivamente se la mail inserita è uguale ad una email presente (controllato tramite l'indice del ciclo for), la variabile booleana precedentemente inserita con il valore false, diventerà true
for (let i = 0; i < mail.length; i++) {
    if (mailInserita === mail[i]) {
        contenuto = true;
    }
}
//creiamo un altra condizione fuori dal ciclo dove se il valore inserito è vero, stampiamo "email inviata" altrimenti stampiamo "email inserita non valida"
if (contenuto) {
    alert('email inviata');
    console.log('email inviata');
} else {
    alert('email inserita non valida');
    console.log('email inserita non valida');
}