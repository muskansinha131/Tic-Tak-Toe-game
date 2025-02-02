let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetButton");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".ms-container");
let msg = document.querySelector("#msg");
let turn = true ;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>{
    turn = true ;
    enableBoxes();
    msgContainer.classList.add("hide");
};

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was Clicked");
        count++;
        if(turn){
        box.innerText = "X";
        turn = false ;
        }
        else
        {
            box.innerText = "O";
            turn = true ;
        }
        box.disabled = true;
        if(count === 9)
        {
            box.innerText ="Draw";
        }
        box.style.backgroundColor = "pink";
        checkWinner(); //This is function here i am doing function call
    }
    )
});

const disabledBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true ;
    }
}

const enableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = false ;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
msg.innerText = `Congratulation , Winner is ${winner}` ;
msgContainer.classList.remove("hide") ;
disabledBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);