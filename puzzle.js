var red = 3;
var kolona = 2;

var currTile;
var otherTile;

var turns = 0;

window.onload = function() {
  for (let r = 0; r < red
  ; r++) {
      for (let c = 0; c < kolona; c++) {
          //<img>
          let tile = document.createElement("img");
          tile.src = "./images/blank.jpg";
          //DRAG FUNCTIONALITY
          tile.addEventListener("dragstart", dragStart); 
          tile.addEventListener("dragover", dragOver);   
          tile.addEventListener("dragenter", dragEnter); 
          tile.addEventListener("dragleave", dragLeave); 
          tile.addEventListener("drop", dragDrop);       
          tile.addEventListener("dragend", dragEnd);      

          document.getElementById("board").append(tile);
      }
  }

  //pieces
  let pieces = [];
  for (let i=1; i <= red
  *kolona; i++) {
      pieces.push(i.toString()); 
  }
  pieces.reverse();
  for (let i =0; i < pieces.length; i++) {
      let j = Math.floor(Math.random() * pieces.length);

      //swap
      let tmp = pieces[i];
      pieces[i] = pieces[j];
      pieces[j] = tmp;
  }

  for (let i = 0; i < pieces.length; i++) {
      let tile = document.createElement("img");
      tile.src = "./images/" + pieces[i] + ".jpg";

  
      tile.addEventListener("dragstart", dragStart); 
      tile.addEventListener("dragover", dragOver);   
      tile.addEventListener("dragenter", dragEnter); 
      tile.addEventListener("dragleave", dragLeave); 
      tile.addEventListener("drop", dragDrop);       
      tile.addEventListener("dragend", dragEnd);      

      document.getElementById("pieces").append(tile);
  }
}

function dragStart() {
  currTile = this; 
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
  otherTile = this; 
}

function dragEnd() {
  if (currTile.src.includes("blank")) {
      return;
  }
  let currImg = currTile.src;
  let otherImg = otherTile.src;
  currTile.src = otherImg;
  otherTile.src = currImg;
  turns += 1;
  document.getElementById("turns").innerText = turns;
}
