
let boxes = document.querySelectorAll(".box");
let WinMsg = document.querySelector('h2')
let reSet_Btn = document.querySelector("#reset-btn") 

let turnO = true;

const  board = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

function ResetGame(){
    turnO =true;
    enableBtns();
}

function enableBtns(){  // to enable all btns working after winning
    WinMsg.innerText="";
    for(let box of boxes){
        box.disabled= false;
        box.innerText=""
    }
}
function disableBtns(){  // to disable 
    for(let box of boxes){
        box.disabled= true;
    }
}

boxes.forEach(box => {
    
    box.addEventListener('click',()=>{
      
        if(turnO){
            box.innerText="X";
            turnO=false;
        }
        else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;


        checkWinner();
    })
});
function winnerMsg(symbol){   // to show winner message in h2 
    WinMsg.innerText=  `The Winner is ${symbol}`
    
    setTimeout(()=>{
        WinMsg.innerText=  ""; 
    },6000)
    disableBtns();
}

function checkWinner(){     // to find winner pattern

    for(let pattern of board){

        let pos1= boxes[pattern[0]].textContent;
        let pos2= boxes[pattern[1]].textContent;
        let pos3= boxes[pattern[2]].textContent;
        if(pos1 != ""  && pos2 != "" && pos3 != ""){
        console.log(pos1,pos2,pos3);
            if(pos1===pos2 &&  pos3===pos2 ){
                winnerMsg(pos1);
            }
        }
       
    
    }
}

reSet_Btn.addEventListener('click',()=> enableBtns());