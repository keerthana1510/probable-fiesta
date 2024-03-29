let users=0;
let comps=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorep=document.querySelector("#user-score");
const comScorep=document.querySelector("#com-score");

const genComChoice=()=>{
    const options=["rock","scissor","paper"];
    const randIndx= Math.floor(Math.random()*3);
    return options[randIndx];
    
};
const draw=()=>{
    console.log("game was draw");
    msg.innerText="Draw";
    msg.style.backgroundColor="yellow";
    
};
const showWinner=(userwin, userChoice, ComChoice)=>{
    if(userwin){ 
        users++;
        userScorep.innerText=users;
        console.log("you win");
        msg.innerText = "You Win!";
        msg.style.backgroundColor="green";

    }
    else{
        comps++;
        comScorep.innerText=comps;
        console.log("you lose");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor="red";
        }
}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const ComChoice= genComChoice();
    console.log("com choice=",ComChoice);

    if(userChoice == ComChoice){
        draw();
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=ComChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userwin=ComChoice==="scissor"?false:true;
        }
        else{
            userwin=ComChoice==="rock"?false:true;
        }
        showWinner(userwin, userChoice, ComChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


