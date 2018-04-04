/* 
    Program name: Recipe Display Application
    Author: Julia McLane
    Date: April 3rd 2018
    Filename: script.js
    */
    
/* global $ */

//displays the next element after the current target 

function display(event) {
    
   // $(event.currentTarget).next().fadeIn('slow');
    $(event.currentTarget).next().animate( {height: "toggle"}, "slow");

}//end of display


//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);



//toggle button
    $("#button").click(function(){
        $("p").first().animate( {height: "toggle"}, "slow");//adds new instruction
        $("#hidden").animate( {height: "toggle"}, "slow");//add new ingredient 
        $("li").first().next().animate( {height: "toggle"}, "fast");//hides ingredient
       
        
    });//end of toggle button
    
//css for line height    
$("p,li,button").css("line-height","27px",);


//css for hover function
$("p,li").hover(function() {
    $(this).css("background-color","#ccffff");
    }, function () {
    $(this).css("background-color","ivory");
  

    });//end of hover function



