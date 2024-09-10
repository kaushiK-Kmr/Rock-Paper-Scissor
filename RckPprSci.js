let gameBtn = document.querySelector(".newGme");//new Game Button
let btn1 = document.querySelectorAll(".option");//Game Option Buttons
let userScore = document.querySelector(".userScore");//User Scoreboard
let compScore = document.querySelector(".compScore");//Computer Scoreboard
let response = document.querySelector(".Response");//Bottom Message
let Naam = document.querySelector("#naamDe");//To store Name of the player
let resetBtn = document.querySelector(".reset");//Reset Button

let You = 0;
let Comp = 0;

//Draw Condition
const draw = () => {
    response.style.backgroundColor = "#00054b"
    response.innerText = "Its a Draw. Please try Again!";
};

//Game
const playGame = (userChoice) => {
    let compChoice = getCompChoice();
    console.log(`Computer Choice - ${compChoice}`);
    console.log(`User Choice - ${userChoice}`);

    let Winner = true;

    if(userChoice === compChoice) {
        draw();
    }
    else if(userChoice==="rock") {
        Winner = compChoice === "scissor" ? true : false;
        if(Winner) {
            response.innerText = "You Win! Rock beats Scissors !";
            response.style.backgroundColor = "green";
            You++;
            userScore.innerText = You;
        } else {
            response.innerText = "You lose! Paper beats Rock !";
            response.style.backgroundColor = "red";
            Comp++;
            compScore.innerText = Comp;
        }
    }
    else if(userChoice === "scissor") {
        Winner = compChoice === "paper" ? true : false;
        if(Winner) {
            response.innerText = "You Win! Scissor beasts paper !";
            response.style.backgroundColor = "green";
            You++;
            userScore.innerText = You;
        } else {
            response.innerText = "You Lose! Rock beats Scissors !";
            response.style.backgroundColor = "red";
            Comp++;
            compScore.innerText = Comp;
        }
    }
    else {
        Winner = compChoice === "rock" ? true : false;
        if(Winner) {
            response.innerText = "You Win! Paper beats Rock !";
            response.style.backgroundColor = "green";
            You++;
            userScore.innerText = You;
        } else {
            response.innerText = "You Lose! Scissor beats Paper !";
            response.style.backgroundColor = "red";
            Comp++;
            compScore.innerText = Comp;
        }
    }
};

//Computer Choice
const getCompChoice = () => {
    const answ = ["rock","paper","scissor"];
    let rndm = Math.floor(Math.random()*3);
    return(answ[rndm]);
};

//User Choice
    btn1.forEach((option) => {
    option.addEventListener("click" , ()=> {
        let userChoice = option.getAttribute("id");
        playGame(userChoice);
    });
});

//New Game Button
    gameBtn.addEventListener("click" , ()=> {
        You = 0;
        Comp = 0;
        compScore.innerText = "0";
        userScore.innerText = "0";
        response.innerText = "Play your Hand!"
        response.style.backgroundColor = "#00054b";
        let nemu = prompt("Enter your Name :");
        Naam.innerText = nemu;
    });

    //Player Name
    let nemu = prompt("Enter your Name :");
    Naam.innerText = nemu;

    //Reset Button
    resetBtn.addEventListener("click" , ()=> {
        You = 0;
        Comp = 0;
        compScore.innerText = "0";
        userScore.innerText = "0";
        response.innerText = "Play your Hand!"
        response.style.backgroundColor = "#00054b";
    });