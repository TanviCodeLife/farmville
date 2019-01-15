export class Farm {
  constructor() {
    this.farmLevel = 0;
    this.basicRows = this.getFarm();
    this.farmMap = this.replaceChars(this.basicRows);
    this.gameStart = false;
    this.gameOver = true;
    this.seeds = false;
  }

  replaceChars(rows) {
    const leaf = "\u{1f331}";
    const farmer = "\u{1f469}" + "\u{200d}" + "\u{1f33e}"; //add farmer


    for(let i = 0; i < rows.length; i++) {
      let chars = rows[i].split("");
      chars = chars.map((c) => {return (c === ".") ? leaf : c});
      chars = chars.map((c) => {return (c === "*") ? farmer : c});
      rows[i] = chars.join("");
    }
    return rows;
  }

  getFarm(){
    let rows = [];
 rows = ["................................",
         "................................",
         "................................",
         "................................",
         "................................",
         "................................",
         "................................",
         "...............................*"];
  return rows;
  }

startGame(){
  if(this.gameStart == true){
    console.log("Game Start");
    let divPlant = document.createElement("div");
    divPlant.setAttribute("id", "seedMessage");
    document.getElementById("seedMessage").innerHTML = "Start Planting!";
    farmBoard.appendChild(divPlant);
    //make plant seeds button visible to the user.
  }

}

plantSeeds(){
  when button is clicked farmer should be able to move
  add movement to the farmer as per x and y coordinates based on key press
}

}
