targetNumber = Math.random()*99 + 1;
const startButton = document.getElementById("start");
var currentNumber = document.getElementById("Num");

function changeVal(id){
   switch(id) {
    case id === "m25":
        var holder = parseInt(currentNumber.textContent) -25;
        currentNumber.textContent = holder.toString();
    default:

   }
}
