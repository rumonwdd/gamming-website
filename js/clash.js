// function play() {

//     // hide the home screen

//     const homeSection = document.getElementById('home-screen');
//     const hideScreen = homeSection.classList.add('hidden')

//     // show the playGround

//     const playGroundSection = document.getElementById('play-ground');
//     const showScreen = playGroundSection.classList.remove('hidden');


// }

function getKeyUpButton(event) {
    const playerPressed = event.key;

    // console.log('player pressed ', playerPressed)
    if(playerPressed === 'Escape'){
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedLatter = currentAlphabet.toLocaleLowerCase();

    console.log(playerPressed, expectedLatter)

    // true or false

    if (playerPressed === expectedLatter) {
        setRemoveBackgroundColor(expectedLatter)

        // used function 

        const currentScore = getElementValueById('current-score');
        const newScore = currentScore + 1;

        setElementValueById('current-score', newScore)



        // -----------------------------------------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore+1;
        // currentScoreElement.innerText = newScore;
        continueGame()
    }
    else {

        const currentLife = getElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setElementValueById('current-life', updatedLife)

        if (updatedLife === 0) {
            gameOver()
        }


        // -------------------------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
    }

}

// function getKeyUpButton(event){
//     const playerPressed = event.key;
//     console.log('player pressed', playerPressed);

//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     const currentElement = currentAlphabetElement.innerText;
//     const expectedAlphabet = currentElement.toLowerCase();
//     console.log(playerPressed , expectedAlphabet);

//     // check the true or false

//     if(playerPressed=== expectedAlphabet){
//         console.log('you get a point')
//     }
//     else{
//         console.log('you lost a life')
//     }
// }

function playAgain() {
    const playAgainElement = document.getElementById('play-again');

}

document.addEventListener('keyup', getKeyUpButton)

function continueGame() {
    const alphabet = getContinueGame();
    console.log(alphabet)

    // get generated a randomly current alphabet

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet

    const setBackground = setBackgroundColorByKeyBoard(alphabet)
}

function play() {

    // hide all page only show a playground

    hideScreenElementById('home-screen');
    hideScreenElementById('game-over')
    showScreenElementById('play-ground');

    // access all element ;
    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0)

    continueGame();
}
function gameOver() {
    hideScreenElementById('play-ground');
    showScreenElementById('game-over');

    const finalScore = getElementValueById('current-score')
    setElementValueById('final-score', finalScore)

    // remove the pressed key bg color

    const currentAlpha = getElementTextById('current-alphabet');
    setRemoveBackgroundColor(currentAlpha)
}