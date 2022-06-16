let player = "X";
let gameOver = false;

const changePlayer = () => {
  return player === "X" ? "0" : "X";
};
let counter=0;
const checkWon = () => {
    counter=counter+1;
    if(counter === 9)
    {
        
        document.getElementsByClassName("result")[0].innerText = " DRAW";  
        document.querySelector("img").style.width = "0px"; 
    }
  let boxTexts = document.getElementsByClassName("boxText");
  let winPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winPos.forEach((ele) => {
    if (
      boxTexts[ele[0]].innerText === boxTexts[ele[1]].innerText &&
      boxTexts[ele[1]].innerText === boxTexts[ele[2]].innerText &&
      boxTexts[ele[0]].innerText !== ""
    ) {
      document.getElementsByClassName("result")[0].innerText =
        boxTexts[ele[0]].innerText + " won";
      gameOver = true;
      document.querySelector("img").style.width = "100px";
    }
    
  });
};

let boxes = document.getElementsByClassName("box");
// console.log(boxes);
Array.from(boxes).forEach((box) => {
  let boxText = box.querySelector(".boxText");
  box.addEventListener("click", () => {
    if (boxText.innerText === "" && !gameOver) {
      boxText.innerText = player;
      player = changePlayer();
      checkWon(counter);
      document.getElementsByClassName("player")[0].innerText = player;
    }
  });
});

// reset button
let reset = document.getElementsByClassName("reset")[0];
// console.log(reset);
reset.addEventListener("click", () => {
  let boxTexts = document.querySelectorAll(".boxText");
  //   console.log(boxTexts);
  boxTexts.forEach((boxText) => {
    boxText.innerText = "";
  });
  player = "X";
  gameOver = false;
  counter=0;
  document.querySelector("img").style.width = "0px";
});
