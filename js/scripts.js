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
  let divName = "<div class='col-sm-3 colorDiv' id='saveColor" + counter +"'></div>";
  return divName;
}
//Color Object business logic
function Color(hex){
  this.hex = hex;
}

function createColor(hex){
  let newColor = new Color(hex);
  return newColor;
}

//UI logic
$(document).ready(function(){
  let sidebarDisplay = false;
  let display = $("#colorDisplay");
  let colorArray = [];
  let counter = 0;

  $("#color-picker").on("input", function(){
    let currentHex = $("#color-picker").val();
    $(display).css("background-color", currentHex);
  });
  $("#toggleButton").click(function(event){
    if(sidebarDisplay){
      closeBar();
      sidebarDisplay = false;
    } else{
      openBar();
      sidebarDisplay = true;
    }
    event.preventDefault();
  });

  $("#saveButton").click(function(event){
    let currentHex = $("#color-picker").val();
    let newColor = createColor(currentHex);
    colorArray.push(newColor);
    let newSaveDiv = addSaveDiv(counter);
    $("#colorDisplay").after(newSaveDiv);
    saveColor(counter, currentHex);

    event.preventDefault();
  })
})