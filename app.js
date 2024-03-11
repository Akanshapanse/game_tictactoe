//access all of the box with DOM
let boxes = document.querySelectorAll(".box");
console.log(`boxes`);
let resetBtn = document.querySelector(".reset-btn"); 

let NewGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player X, Player O
const winPatterns = [ //checking the pattern
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetGame = () => { //reset button
    turnO = true;
    enableBoxes();
    msgContainer.classList("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=> //when clicking on box somthing will type
    { console.log(`box was clicked`);
        //box.innerText = "abc";
      if(turnO){ //playerO If turnO is true type O
            box.innerText ="O";
            turnO = false;
       }else { //playerX turn
        box.innerText ="X";
        turnO = true;
       }

       //if we press on box O OR X Replace
       // that's why we doing box disable
       box.disabled = true;
       checkWinner(); //function we will check who is winner with function
    });
});

const disableBoxes =() => {  //show winner then button have to be disbaled 
    for (let box of boxes){
        box.disabled = true;
        
    }
};
const enableBoxes =() => {  //start new game again then all the game will be enable
    for (let box of boxes){
        box.disabled = true;
        box.innerText=""; // 
       
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();// function call
    
}
// another function for checkwinner
const checkWinner = () =>{
   //our winPattern array we will check now
    for ( let pattern of winPatterns){
    //console.log(pattern[0],pattern[1],pattern[2]); // index value with
    //console.log(
    //  boxes[pattern[0]].innerText, //
    // boxes[pattern[1]].innerText, 
    //  boxes[pattern[2]].innerText
    //  ); 
let pos1Val =   boxes[pattern[0]].innerText //position 1
let pos2Val =   boxes[pattern[1]].innerText //position 2
let pos3Val =   boxes[pattern[2]].innerText //position 3

if(pos1Val != "" && pos2Val != "" && pos3Val !=""){ //should have to check 3 value not empty
    if (pos1Val===pos2Val && pos2Val===pos3Val){
        console.log("winner", pos1Val);
        showWinner(pos1Val);
            }
        }
    }
};
NewGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);
