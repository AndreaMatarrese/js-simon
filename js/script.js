// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*
1--creo numeri casuali e li metto in una variabile (mathrandom-for-push)
2--appendo i numeri casuali creati al container(append all'array)
3--imposto il timer di 30 secondi e faccio scomparire i numeri(timer timer 30 secondi--hide dei numeri)
4--creo il prompt per far inserire i numeri all'utente (prompt 5 numeri--push in nuovo arra)
5--controllo finale tra i numeri inseriti e quelli stampati in precedenza(controllo primo array vs secondo array con condizione)
*/

const container = document.querySelector('.container')
const numbers = document.querySelector('.numbers')
const title = document.querySelector('h1')
const numbersEnd = document.querySelector('.numbers-end')
const btnStart = document. querySelector('#start')
const btnVerify = document.querySelector('#verify')

const arrNumStart = [];
let arrNumEnd = [];
// comparsa numeri al caricamento     
  inserted();
    function inserted(){
        for(let i=0; i<5; i++){
            const numStart = parseInt(Math.random() * 100);
            console.log('Numeri', numStart);
            arrNumStart.push(numStart);
        }
        numbers.append(arrNumStart);
        return arrNumStart;
    }
    // funzione per la disattivazione
    setTimeout(visualizzazione, 3000);

    function visualizzazione(){
        title.innerHTML='Scrivi i numeri che ricordi'
        numbers.classList.add('hide');
    }
    // funzione per l'inserimento dati
    setTimeout(insert, 4000);

    function insert(){
        for(let j=0; j<5; j++){
            numbersEnd.innerHTML='';
            title.innerHTML='I tuoi numeri'
            const numEnd = parseInt(prompt('inserisci i 5 numeri'));
            arrNumEnd.push(numEnd);
            numbersEnd.append(arrNumEnd);
        }
        console.log('Numeri inseriti', arrNumEnd)
        return arrNumEnd;
    }

    /*controllo dei dati inseriti con quelli originali 
    se (il nuovo array include numeri del vecchio array, stampa i numeri indovinati)
    altrimenti (stampa: nessun numero uguale a quelli stampati)*/
   
// btnVerify.addEventListener('click', function(){
//         if(insert() === inserted()){
//             console.log('ci sei riuscito')

//         } else {
//             console.log('riprova')
//         }
// });  


