let start = document.querySelector("#start");
let player_score = document.querySelector(".s");
let computer_score = document.querySelector(".s1");
let select = document.querySelector("#select");
let  scissor = document.querySelector("#scissor");
let paper = document.querySelector("#paper");
let rock = document.querySelector("#rock");
let icons =  document.querySelectorAll(".icon");
let s = document.querySelector(".s");
let s1 = document.querySelector(".s1");

let count_comp = 0;
let count_player = 0;
let choices = ["scissor","paper","rock"];
let gameStarted = false;


function initial_start() {
    icons.forEach((icon) => {
        icon.addEventListener("click", () => {
            if (!gameStarted) {
                select.classList.remove("hide");
                select.innerText = "Click Start";
            }
        });
    });
}

initial_start();
start.addEventListener("click",() => {
    count_comp = 0;
    s.innerText = "00"
    count_player = 0;
    s1.innerText = "00"
    gameStarted= true;
})



function playersChoice(players){
    if (gameStarted){
        const computer = choices[Math.floor(Math.random() * choices.length)]
    console.log(players);
    console.log(computer);
    const result = winner(players ,computer)
    }
    else{
        initial_start()
    }
    
}

rock.addEventListener("click", () => playersChoice("rock"));
paper.addEventListener("click", () => playersChoice("paper"));
scissor.addEventListener("click", () => playersChoice("scissor"))




function winner(players ,computerChoice){
    if (players=="scissor" && computerChoice == "paper"){
        count_player+=1;
        select.classList.remove("hide");
        select.innerText = `You Win! Computer choose - ${computerChoice}`;
        select.style.color="green";
        s.innerText= count_player;
    }
    else if  (players=="paper" && computerChoice == "rock"){
        count_player+=1;
        select.classList.remove("hide");
        select.innerText = `You Win! Computer choose - ${computerChoice}`;
        select.style.color="green";
        s.innerText= count_player;
    }
    else if(players=="rock" && computerChoice == "scissor"){
        count_player+=1;
        select.classList.remove("hide");
        select.innerText = `You Win! Computer choose - ${computerChoice}`;
         select.style.color="green";
        s.innerText= count_player;
    }
    else if(players=="paper" && computerChoice == "scissor"){
        count_comp+=1;
        select.classList.remove("hide");
        select.innerText = `You Loose! Computer choose - ${computerChoice}`;
        select.style.color="red";
        s1.innerText= count_comp;
    }
    else if(players=="rock" && computerChoice == "paper"){
        count_comp+=1;
        select.classList.remove("hide");
        select.innerText = `You Loose!  Computer choose - ${computerChoice}`;
         select.style.color="red";
        s1.innerText= count_comp;
    }
    else if(players=="scissor" && computerChoice == "rock"){
        count_comp+=1;
        select.classList.remove("hide");
        select.innerText = `You Loose!  Computer choose - ${computerChoice}`;
         select.style.color="red";
        s1.innerText= count_comp;
    }else{
        select.classList.remove("hide");
        select.innerText = `It's a Draw! Both Choose - ${computerChoice}`;
        select.style.color="blue";
        return "It's A Draw"
    }
}


