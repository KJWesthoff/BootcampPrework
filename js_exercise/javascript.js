// Grow box 
document.getElementById("grow_button1").addEventListener("click", function () {
    var size_increment = 50
    
    curr_height = document.getElementById("box").clientHeight;
    curr_width = document.getElementById("box").clientWidth;
    new_height = curr_height + size_increment;
    new_width = curr_width + size_increment;
    
     
    document.getElementById("box").style.height = new_height + "px";
    document.getElementById("box").style.width = new_width + "px";
  });
  

// Blue box
document.getElementById("blue_button2").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "blue";
});

//Fade background color
document.getElementById("fade_button3").addEventListener("click", function () {
    document.getElementById("box").style.opacity = "50%";
  });


//Reset (found it easiest just to reload the page....)
document.getElementById("reset_button4").addEventListener("click", function () {
    document.location.reload();
  
  });
