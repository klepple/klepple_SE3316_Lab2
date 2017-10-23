/**
 * Kahlia Lepple (c) 2017
 * SE 3316 - Web Technologies - Lab 2
 **/
 
/*global $*/ 

$(document).ready(function() {
    //Array of fruits
    var fruits = ["apple", "banana", "strawberry", "grapes", "orange"];
    
    //Add fruits to shelf as page is loaded
    $.each(fruits, function(index){
        $('#fruits').append($('<li>').text(fruits[index])); 
    });
    
    //When button is clicked, remove fruit from shelf and add to basket
    $("#fruitButton").click(function() {
        //Get user input
        var newFruit = $('#newfruit').val().toLowerCase();
        
        //Make array of fruits
        var fruitArray = [];
        $("#fruits li").each(function() {
            fruitArray.push($(this).text())
        });
        
        //Get index of the fruit the user wants to add to their basket
        var index = fruitArray.indexOf(newFruit);
        
        //Check if shelf contains the fruit
        if(index > -1) {
            //Remove fruit from shelf
            $("#fruits li").eq(index).remove();
            
            //Add fruit to basket
            $('#basket').append($('<li>').text(newFruit)); 
            
        } else {
            $('#newfruit').val("Fruit not available.");
        }
    });
});