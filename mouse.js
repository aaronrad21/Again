

      document.getElementById("console").addEventListener("mouseover", function(){

              var randomColor = Math.floor(Math.random()*16777215).toString(16);
  
               document.getElementById("console").style.color = "#" + randomColor;

        })