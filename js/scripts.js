//functional logic
function openBar() {
  document.getElementById("rSideBar").style.width = "35%";
}

function closeBar() {
  document.getElementById("rSideBar").style.width = "0";
}

function makeColorID(counter){
  return "#saveColor" + counter;
}

function makeDisplayID(counter){
  return "#displayColor" + counter;
}
function saveColor(counter, currentColor){
  let currentColorID = makeColorID(counter);
  $(currentColorID).css("background-color", currentColor);
}

function addSaveDiv(counter){
  let divName = "<div class='col-sm-2 colorDiv' id='saveColor" + counter +"'></div>";
  return divName;
}

function addDisplayDiv(counter){
  let divName = "<div class='col-sm-2 colorDiv' id='displayColor" + counter +"'></div>";
  return divName;
}
function getWidth(){
  return $("#rSideBar");
}

function makeRowWithInnerDiv(paletteCounter){
  return "<div class='row display-row' id='palette" + paletteCounter + "'><div id=display" + paletteCounter + "></div></div>" 
}
function toggleSidebar(width){
  if(width > 0){
    closeBar();
  } else{
    openBar();
  }
}
//___________________________________________________________________________________
//Palette object business logic
function Palette(){
  this.colors = {}
  this.currentID = -1;
}

Palette.prototype.addColor = function(colorToAdd){
  colorToAdd.id = this.assignID();
  this.colors[colorToAdd.id] = colorToAdd;
}

Palette.prototype.assignID = function(){
  this.currentId += 1;
  return this.currentId;
}

Palette.prototype.findColor = function(id){
  if(this.colors[id] != undefined){
    return this.colors[id];
  }
  return false;
}
//___________________________________________________________________________________
//Color Object business logic
function Color(hex, name){
  this.hex = hex;
  this.name = name;
}
//___________________________________________________________________________________
function createColor(hex, name){
  let newColor = new Color(hex, name);
  return newColor;
}
//___________________________________________________________________________________
//business logic


function attachButtonListeners(){
  $("#toggleButton").on("click", function(){
    let sidebarWidth = $("#rSideBar").width();
    toggleSidebar(sidebarWidth);
  });
  $("#sideClose").on("click", function(){
    closeBar();
  })
}
/*
function displayColors(palette, paletteCounter){
  //let rowCode = makeRowWithInnerDiv(paletteCounter);
  let currentDisplayPaletteID = "#paletteDisplay" + paletteCounter;
  //$(currentDisplayPaletteID).append(rowCode); 

  let paletteKeys = Object.keys(palette);
  for(let i = 0; i < paletteKeys.length; i++){
    let currentColor = palette.findColor(i).hex;
    let currentDisplay = addDisplayDiv(i);
    let currentDisplayID = makeDisplayID(i);
    $(currentDisplayPaletteID).append(currentDisplay);
    $(currentDisplayID).css("background-color", currentColor);
  }
}
*/

//___________________________________________________________________________________
//UI logic
$(document).ready(function(){
  let currentPalette = new Palette();
  let colorArray = [];
  let counter = 0;
  let paletteCounter = 1;
  attachButtonListeners();

  $("#color-picker").on("input", function(){
    let currentHex = $("#color-picker").val();

    $("#colorDisplay").css("background-color", currentHex);
  });
  //colorArray on saveButton click
  $("#saveButton").on("click", function(){
    if(counter<14){
      let currentHex = $("#color-picker").val();
      let newColor = createColor(currentHex, "");
      currentPalette.addColor(newColor);
      let newSaveDiv = addSaveDiv(counter);
      $("#colorDisplay").after(newSaveDiv);
      saveColor(counter, currentHex);
      counter++;
    } else{
      alert("You cannot add any more colors. Please save your palette.")
    }
  });

  $("#paletteButton").on("click", function(){
    
    //displayColors(currentPalette, paletteCounter);
   let currentDisplayPaletteID = "#paletteDisplay" + paletteCounter;
  //$(currentDisplayPaletteID).append(rowCode); 
  let newArray = Object.keys(currentPalette);
  for(let i = 0; i < newArray.length; i++){
    let currentColor = currentPalette.findColor(i);
    let currentHex = currentColor.hex;
    let currentDisplay = addDisplayDiv(i);
    let currentDisplayID = makeDisplayID(i);
    $(currentDisplayPaletteID).append(currentDisplay);
    $(currentDisplayID).css("background-color", "#" + currentHex);
  }
    paletteCounter++;
  })


})

//playground
//take a palette and display each color in it


