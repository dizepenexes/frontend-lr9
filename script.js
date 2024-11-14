document.addEventListener("DOMContentLoaded", function() {
    let userTotalScore = 0;
    let computerTotalScore = 0;
    let round = 0;

    let cardValues = {
        1: 4,
        2: 3, 
        3: 2,
        4: 4, 
        5: 3, 
        6: 2, 
        7: 10, 
        8: 9, 
        9: 8,
        10: 7, 
        11: 6, 
        12: 11, 
        13: 10, 
        14: 9, 
        15: 8, 
        16: 7, 
        17: 6, 
        18: 11,
        19: 4, 
        20: 3, 
        21: 2, 
        22: 10, 
        23: 9, 
        24: 8, 
        25: 6, 
        26: 11, 
        27: 4,
        28: 3, 
        29: 2, 
        30: 10, 
        31: 9, 
        32: 8, 
        33: 7, 
        34: 6, 
        35: 11, 
        36: 7
    };

    function getRandomCard() {
        let cardNumber = Math.floor(Math.random() * 36) + 1;
        let cardValue = cardValues[cardNumber];
        let cardImage = `cards/(${cardNumber}).jpg`;
        return { cardNumber, cardValue, cardImage };
    }

    let userName = prompt("Введіть своє ім'я:");
    userName = userName ? userName.trim() : "Користувач";
    document.getElementById("userName").textContent = userName;

    window.drawCard = function() {
        if (round < 3) {
            let userCard = getRandomCard();
            let computerCard = getRandomCard();

            document.getElementById("userCard").src = userCard.cardImage;
            document.getElementById("computerCard").src = computerCard.cardImage;
            document.getElementById("userCardValue").textContent = "Номінал: " + userCard.cardValue;
            document.getElementById("computerCardValue").textContent = "Номінал: " + computerCard.cardValue;

            userTotalScore += userCard.cardValue;
            computerTotalScore += computerCard.cardValue;

            document.getElementById("userScore").textContent = userTotalScore;
            document.getElementById("computerScore").textContent = computerTotalScore;

            if (userTotalScore > 21) {
                document.getElementById("message").textContent = userName + " програв, набравши більше 21 очка!";
                endGame();
                return;
            } else if (computerTotalScore > 21) {
                document.getElementById("message").textContent = "Комп'ютер програв, набравши більше 21 очка!";
                endGame();
                return;
            }

            round++;
            if (round === 3) {
                determineWinner();
            }
        }
    };

    function determineWinner() {
        if (userTotalScore <= 21 && (userTotalScore > computerTotalScore || computerTotalScore > 21)) {
            document.getElementById("message").textContent = userName + " переміг з " + userTotalScore + " очками!";
        } else if (computerTotalScore <= 21 && (computerTotalScore > userTotalScore || userTotalScore > 21)) {
            document.getElementById("message").textContent = "Комп'ютер переміг з " + computerTotalScore + " очками!";
        } else {
            document.getElementById("message").textContent = "Нічия!";
        }
        document.getElementById("drawCardButton").disabled = true;
        document.getElementById("endGameButton").disabled = true;
        document.getElementById("restartGameButton").style.display = "inline";
    }

    window.endGame = function() {
        determineWinner();
    };

    window.restartGame = function() {
        userTotalScore = 0;
        computerTotalScore = 0;
        round = 0;

        document.getElementById("userScore").textContent = userTotalScore;
        document.getElementById("computerScore").textContent = computerTotalScore;
        document.getElementById("userCard").src = "";
        document.getElementById("computerCard").src = "";
        document.getElementById("userCardValue").textContent = "Номінал: 0";
        document.getElementById("computerCardValue").textContent = "Номінал: 0";
        document.getElementById("message").textContent = "";

        document.getElementById("drawCardButton").disabled = false;
        document.getElementById("endGameButton").disabled = false;
        document.getElementById("restartGameButton").style.display = "none";
    };
});
