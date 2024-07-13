let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
//rock, paper,scissors
const options = ["rock","paper","scissors"];
const rndIdx = Math.floor(Math.random()*3);
return options[rndIdx];
}

const drawGame = () => {
   // console.log("Game was draw.")
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
     //   console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
       // console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
//console.log("user choice = ", userChoice);
const compChoice = genCompChoice();
//console.log("user choice = ", compChoice);

if(userChoice === compChoice){
    //draw
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissors, paper
       userWin = compChoice==="paper"?false : true;
    }else if(userChoice==="paper"){
        //rock , scissors

      userWin =  compChoice === "scissors" ? false : true;

    }else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};



choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userchoice);
        playGame(userChoice);
    })
})