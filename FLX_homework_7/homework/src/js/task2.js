let startGame = confirm('Do you want to play a game?');
let rangeNumbers = 5
let rangeLimit = rangeNumbers;
let attempts = 3;
let totalPrize = 0;
let sumPrize = 10;
let currentPrize = sumPrize;
let defaultPrize = 10;

if (startGame) {
    let gamePlay = true;
    while (gamePlay) {
        let random = Math.floor(Math.random() * rangeNumbers);
        while (gamePlay) {
            let askUser = parseInt(prompt(
                `Enter a number from 1 to ${rangeLimit}
                Attempts left: ${attempts}
                Total prize: ${totalPrize}$
                Possible prize on current attempt ${currentPrize}$`), 10);
            if (isNaN(askUser) || askUser > rangeLimit) {
                break;
            } else if (askUser === random) {
                totalPrize += currentPrize;
                let gameWin = confirm(`Congratulation! Your prize is: ${totalPrize}$. Do you want to continue?`);
                random = Math.floor(Math.random() * rangeNumbers);
                sumPrize *= 3
                currentPrize = sumPrize;
                attempts = 3;
                rangeLimit += 5;
                if (!gameWin) {
                    break;
                }
                continue;
            } else if (attempts <= 1) {
                break;
            }
            currentPrize = Math.floor(currentPrize / 2);
            attempts--;
        }
        alert(`Thank you for a game. Your prize is: ${totalPrize} $`);
        let tryAgain = confirm('Do you want to play again?');
        if (tryAgain) {
            totalPrize = 0;
            currentPrize = defaultPrize;
            sumPrize = defaultPrize;
            attempts = 3;
            rangeLimit = rangeNumbers;
            continue;
        } else {
            break;
        }
    }
} else {
    alert('You did not become a millionaire, but can.');
}
