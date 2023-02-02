// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js / css / con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti(ovvero quando ha rivelato tutte le celle che non sono bombe).

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

const startGameButton = document.getElementById("start-game");

startGameButton.addEventListener(
	"click",
	function () {
		const gridEl = document.getElementById("grid");
		generaGriglia(gridEl);
	}
)

/********************************************************************
 * 																	*
 * 							FUNCTIONS								*
 * 																	*
 ********************************************************************/

/**
 * genera una griglia dinamica per il gioco campominato dato l'elemento
 * in cui inserirla
 * 
 * @param {HTMLElement} grid 
 */
function generaGriglia(grid) {
	grid.innerHTML = "";
	for (let i = 0; i < 100; i++) {
		const testoCella = i + 1;
		const cellaEl = generaCella(testoCella);
		grid.append(cellaEl);
	}
}

/**
 * genera una cella dinamica per il gioco campominato e ritorna la cella
 * 
 * @param {string} testo 
 * @return {HTMLElement}
 */

// array numeri diversi
const numeriDiversi = [];

// per evitare che si ripetano numeri uguali
while (numeriDiversi.length < 16) {
	randomNumber = Math.floor(Math.random() * 100) + 1;

	if (!numeriDiversi.includes(randomNumber)) {
		numeriDiversi.push(randomNumber);
	}

}

console.log(numeriDiversi);


const restartButton = document.querySelector('#restart-button');
const lose = document.querySelector('.lose');
const punteggio = document.querySelector('#punteggio');
let counter = 1; //conatore click effettuati

let gameOver = false;

function generaCella(testo) {
	const cella = document.createElement("div");
	cella.classList.add("square");
	cella.innerHTML = testo;
	cella.addEventListener(
		"click", 
		function () {
		this.classList.toggle("active");
		console.log(this.innerHTML);

	if (!this.classList.contains('clicked')) {
		this.classList.add('clicked');

		punteggio.innerHTML = `PUNTEGGIO: ${counter}`;
		counter = counter + 1;
	}

			

		// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso
	if (numeriDiversi.includes(parseInt(this.innerHTML))) {
		cella.classList.add("bomb");
		gameOver = true;
		// Mostra un messaggio di game over
			
		lose.classList.remove('d-none');
			
	}

	if (counter == 84) {
		alert('complimenti, hai vinto!!');
	}
		
	});

	return cella;
}

restartButton.addEventListener('click',
	function () {
		grid.innerHTML = '';
		lose.classList.add('d-none');
		counter = 0;
		punteggio.innerHTML = `PUNTEGGIO: ${counter}`;
	}
)

