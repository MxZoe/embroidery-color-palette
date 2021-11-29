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

function saveColor(counter, currentColor){
  let currentColorID = makeColorID(counter);
  $(currentColorID).css("background-color", currentColor);
}

function addSaveDiv(counter){
  let divName = "<div class='col-sm-2 colorDiv' id='saveColor" + counter +"'></div>";
  return divName;
}

function getWidth(){
  return $("#rSideBar");
}
//Color Object business logic
function Color(hex){
  this.hex = hex;
}

function createColor(hex){
  let newColor = new Color(hex);
  return newColor;
}
//business logic
function toggleSidebar(width){
  if(width > 0){
    closeBar();
  } else{
    openBar();
  }
}

function attachButtonListeners(){
  $("#toggleButton").on("click", function(){
    let sidebarWidth = $("#rSideBar").width();
    toggleSidebar(sidebarWidth);
  });
}

//UI logic
$(document).ready(function(){
  
  let colorArray = [];
  let counter = 0;
  attachButtonListeners();

  $("#color-picker").on("input", function(){
    let currentHex = $("#color-picker").val();

    $("#colorDisplay").css("background-color", currentHex);
  });
  //don't know how to make this a part of the attachButtonListeners since i push to 
  //colorArray on saveButton click
  $("#saveButton").on("click", function(){
    let currentHex = $("#color-picker").val();
    let newColor = createColor(currentHex);
    colorArray.push(newColor);
    let newSaveDiv = addSaveDiv(counter);
    $("#colorDisplay").after(newSaveDiv);
    saveColor(counter, currentHex);
  });

})