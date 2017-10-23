/**
 * Kahlia Lepple (c) 2017
 * SE 3316 - Web Technologies - Lab 2
 **/

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
        console.log(newFruit);
        var fruitArray = [];
        $("#fruits li").each(function() {
            fruitArray.push($(this).text())
        });
        console.log(fruitArray);
        var index = fruitArray.indexOf(newFruit);
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