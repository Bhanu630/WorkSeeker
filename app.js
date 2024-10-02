let userscore = 0;
let compscore = 0;

const choices=document.querySelectorAll(".choice");
const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");

const compGeneratechoice = () =>{
    const options=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return options[index];
};

const draw =(compchoice,userchoice) =>{
    msg.innerText=`drawn ${compchoice} , ${userchoice} play Again`;
    msg.style.background="blue";
};

const showWinner=(userWin,userchoice,compchoice)=>{
   if (userWin) {
    userscore++;
    userpara.innerText=userscore;
    msg.innerText=`you win . ${userchoice} beats  ${compchoice}`;
    msg.style.background="green";
   }
   else{
    compscore++;
    comppara.innerText=compscore;
    msg.innerText=`computer win . ${userchoice}  beats   ${compchoice}`;
    msg.style.background="red";
   }
};

const playGames=(userchoice) =>{
    const compchoice=compGeneratechoice();
     if(compchoice===userchoice){
        draw(compchoice,userchoice);
     }
     else{
      let userWin =true;
        if(userchoice==="rock")
        {
          userWin = compchoice === "paper" ? false : true;
        }
        else if(userchoice==="paper")
        {
            userWin = compchoice === "scissors" ? false : true;
        }
        else
        {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compchoice);
     }
};

choices.forEach((choice)=>{
    choice.addEventListener( "click" , () =>{
        const userchoice =choice.getAttribute("id");
        playGames(userchoice);
    }); 
});