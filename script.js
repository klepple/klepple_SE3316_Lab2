/**
 * Kahlia Lepple (c) 2017
 * SE 3316 - Web Technologies - Lab 2
 **/

$(document).ready(function() {
    var fruits = ["apple", "banana", "strawberry", "grapes", "orange"];
    $.each(fruits, function(index){
        $('#fruits').append($('<li>').text(fruits[index])); 
    });
});