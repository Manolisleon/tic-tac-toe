document.addEventListener("DOMContentLoaded", () => {
    let array = ["", "","",
        "", "", "",
        "", "", ""
      ];
      let i=1;


    const displayArray = (array) => {
        for (let i=0; i<9; i++) {
            let number =  "#place-"+(i+1);
            const numbers = document.querySelector(number);
            
            numbers.innerHTML = `<p>${array[i]}</p>`;
        }
    }

    const playAgain = () => {
        location.reload();
    } 

    const winner = (array) => {
        const winnerPlayer = document.querySelector("#winner");
        if (array[0]==="O"&&array[1]==="O"&&array[2]==="O") {
            winnerPlayer.textContent = "Player O is the winner";
            demo.addEventListener("click", playAgain);

        }
        else if (array[3]==="O"&&array[4]==="O"&&array[5]==="O") {
            winnerPlayer.textContent = "Player O is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[6]==="O"&&array[7]==="O"&&array[8]==="O") {
            winnerPlayer.textContent = "Player O is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[0]==="O"&&array[3]==="O"&&array[6]==="O") {
            winnerPlayer.textContent = "Player O is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[1]==="O"&&array[4]==="O"&&array[7]==="O") {
            winnerPlayer.textContent = "Player O is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[2]==="O"&&array[5]==="O"&&array[8]==="O") {
            winnerPlayer.textContent = "Player O is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[0]==="O"&&array[4]==="O"&&array[8]==="O") {
            winnerPlayer.textContent = "Player O is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[2]==="O"&&array[4]==="O"&&array[6]==="O") {
            winnerPlayer.textContent = "Player O is the winner";
            demo.addEventListener("click", playAgain);
        }
        
        else if (array[0]==="X"&&array[1]&&array[2] === "X") {
            winnerPlayer.innerHTML = "Player X is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[3]==="X"&&array[4]==="X"&&array[5]==="X") {
            winnerPlayer.innerHTML = "Player X is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[6]==="X"&&array[7]==="X"&&array[8]==="X") {
            winnerPlayer.innerHTML = "Player X is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[0]==="X"&&array[3]==="X"&&array[6]==="X") {
            winnerPlayer.innerHTML = "Player X is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[1]==="X"&&array[4]==="X"&&array[7]==="X") {
            winnerPlayer.innerHTML = "Player X is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[2]==="X"&&array[5]==="X"&&array[8]==="X") {
            winnerPlayer.innerHTML = "Player X is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[0]==="X"&&array[4]==="X"&&array[8]==="X") {
            winnerPlayer.innerHTML = "Player X is the winner";
            demo.addEventListener("click", playAgain);
        }
        else if (array[2]==="X"&&array[4]==="X"&&array[6]==="X") {
            winnerPlayer.innerHTML = "Player X is the winner";
            demo.addEventListener("click", playAgain);
        }
    }

    const nobodyWinner = (array) => {
        const winnerPlayer = document.querySelector("#winner");
        let p=0;
        for (let j=0; j<9; j++) {
            if (array[j] === "") {
                p++;
            }
        }
        if (p === 0) {
            winnerPlayer.textContent = "Nobody is the winner. Play again";
            demo.addEventListener("click", playAgain);
        }
    }

    const demohundler = (e) => {
        let p = e.target.id;
        let newP = p.slice(6)
        if (i%2 === 0) {
            if (array[newP - 1] === ""){   
                array[newP - 1] = "X";
                i++;
            }
        }
        else {
            if (array[newP - 1] === ""){   
                array[newP - 1] = "O";
                i++;
            }
        }
        

        displayArray(array);
        winner(array);
        nobodyWinner(array);
    }


    const demo = document.querySelector("#column");
    demo.addEventListener("click", demohundler);
    displayArray(array);

});