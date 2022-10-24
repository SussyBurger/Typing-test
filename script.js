const wordDisplayElement = document.getElementById('screen')
const startBtn = document.querySelector('[data-generate]')
const retryBtn = document.querySelector('[data-reset]')
const timer = document.getElementById('timer')
const textInputElement = document.getElementById('input')
const scoresDisplay = document.getElementById('score')
const message = document.getElementById('pop-up')

let generatedWords = [
    'aqua', 'beast', 'creator', 'cyberse', 
    'dinosaur', 'divine', 'dragon', 'fairy', 'fiend', 
    'fish', 'insect', 'machine', 'plant', 'psychic', 
    'pyro', 'reptile', 'rock', 'serpent', 'spellcaster', 
    'thunder', 'warrior', 'winged', 'wyrm', 'zombie'
]

/* Buttons */
    //Start button
    function getWords() {
        startBtn.addEventListener('click', button => {
            textInputElement.value = null;
            scoresDisplay.innerText = 0;
            let randomWords = generatedWords[(Math.floor(Math.random() * generatedWords.length))]
            wordDisplayElement.innerText.split('').forEach(char => {
                const characterSpan = document.createElement('span')
                characterSpan.innerText = char
                wordDisplayElement.value.appendChild(characterSpan)
            })
            wordDisplayElement.innerText = randomWords
            message.innerText=""
            timer.innerText = 60
        })
    }
    
    getWords()

    //Reset button
    retryBtn.addEventListener('click', button => {
        wordDisplayElement.innerText = "";
        textInputElement.value = null;
        timer.innerText = 'Typing Test rip-off Edition'
        scoresDisplay.innerText = '-'
        totalTime = 61
        score = null
        message.innerText = "Press Start Button"
    })
/* End of Buttons */

/* Timing */
    let totalTime = 61;
    let charIndex = 0;
    var timeLeft = setInterval(function() {
        if (wordDisplayElement.innerText !== "") {
            totalTime--;
            document.getElementById('timer').textContent = totalTime;
            if (totalTime <= 0) {
                message.innerText = "Time Up!"
                clearInterval(timeLeft);
            }
        }  else clearInterval(timer);
    }, 1000);
/* End of Timing */ 

/* Typing score */
    let score = 0;
    textInputElement.addEventListener('input', () => {
        let match = true;
        if (textInputElement.value == null) {
            match = false
        } else if (textInputElement.value === wordDisplayElement.innerText) {

        } else {
            match = false
        } 
        if (match) {
            renderNewWord()
            if (totalTime > 0) score++
            else score
        }
        scoresDisplay.innerText = score
    })

    function renderNewWord() {
        textInputElement.value = null
        let nextWord =  generatedWords[(Math.floor(Math.random() * generatedWords.length))]
        wordDisplayElement.innerText = nextWord
    }
/* End of typing check */