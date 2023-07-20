// - Età del passeggero: 
// - Il numero di chilometri da percorrere
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// attributi p
const finalText = document.getElementById('final-price')

let namePerson = document.getElementById('Nome-utente')

const userName = document.getElementById('name-user')

const userKm = document.getElementById('km-to-go')

const userAge = document.getElementById('age-user')

const priceKm = 0.21



const buttonSend = document.getElementById('send-text')




// FUNZIONE BUTTON
buttonSend.addEventListener('click', function(){
    // Nome su p
    namePerson.innerHTML = userName.value

    // Prezzo finale
    let priceTotalKm = parseInt(userKm.value) * priceKm

    // Sconto
    if (parseInt(userAge.value) < 18){
        let priceTotalKm = parseInt(userKm.value) * priceKm * 0.2
        finalText.innerHTML = priceTotalKm
    } else if (parseInt(userAge.value) > 65) { 
        let priceTotalKm = parseInt(userKm.value) * priceKm * 0.4
        finalText.innerHTML = priceTotalKm
    } else {
        finalText.innerHTML = priceTotalKm
    }
})








