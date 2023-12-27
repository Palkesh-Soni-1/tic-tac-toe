let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let start = document.querySelector("#start");
let startBtn = document.querySelector("#start-btn");
let choice = document.querySelector(".choice")
let xChoose = document.querySelector("#X-choose");
let oChoose = document.querySelector("#O-choose");
let turns = document.querySelector(".turns");

let turnO = true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],  
]

boxes.forEach((box)=>
{
  box.addEventListener("click",()=>
  {
    console.log("button clicked");
    if(turnO)
    {
      turns.innerText="X turns";
      box.innerText = "O";
      turnO = false;
      onXTurns();
    }
    else
    {
      turns.innerText="O turns";
      box.innerText = "X";
      turnO = true;
      onOTurns();
    }
    box.disabled = true;
    checkWinner();
  })
})
const resetGame=()=>
{
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  start.classList.remove("hide");
  turns.classList.add("hide");
  document.body.style.backgroundColor="rgba(0,0,0,0.5)";
  boxes.forEach((box)=>
{
  box.disabled = true;
})
}
const enableBoxes=()=>
{
  for(let box of boxes)
  {
    box.disabled = false;
    box.innerText="";
  }
}
const disableBoxes=()=>
{
  for(let box of boxes)
  {
    box.disabled = true;
  }
}
const showWinner=(winner)=>
{
  msg.innerText = `Congratulation! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner=()=>
{
  for(pattern of winpatterns)
  {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val!=""&&pos2Val!=""&&pos3Val!="")
    {
      if(pos1Val===pos2Val&&pos2Val===pos3Val)
      {
        console.log(pos1Val);
        showWinner(pos1Val);
      }
    }
  }
}

const choiceGiven=()=>
{
  choice.classList.remove("hide");
  start.classList.add("hide");
}
const oStarts=()=>
{
 choice.classList.add("hide");
 turns.innerText="O turns";
 turns.classList.remove("hide");
 onOTurns();
 enableBoxes();
}
const xStarts=()=>
{
 choice.classList.add("hide");
 turns.classList.remove("hide");
 turnO = false;
 onXTurns();
 enableBoxes();
}
boxes.forEach((box)=>
{
  box.disabled = true;
})

const onXTurns=()=>{
  document.body.style.backgroundColor="#8A817C"
}
const onOTurns=()=>{
  document.body.style.backgroundColor="#9F7E69"
}

startBtn.addEventListener("click",choiceGiven);
oChoose.addEventListener("click",oStarts);
xChoose.addEventListener("click",xStarts);


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

