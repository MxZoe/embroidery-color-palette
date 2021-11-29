take input from color picker and show it in a display div
make a sidebar with a new div
save to that new div

to do:
html
__________________________________________________________________________________________________________
change (x) to button

javascript
__________________________________________________________________________________________________________
add attacheventhandler function
-(x)button
-toggle
-save
-random
-palette

  $("#toggleButton").click(function(event){
    if(sidebarDisplay){
      closeBar();
    } else{
      openBar();
    }
    event.preventDefault();
  });

