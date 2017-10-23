/**
 * Kahlia Lepple (c) 2017
 * SE 3316 - Web Technologies - Lab 2
 **/

//Load in some fruits on the shelf
function addFruitToShelf() 
{
    var fruits = ["apple", "banana", "strawberry", "grapes", "orange"];
    
    for(let i = 0; i < fruits.length; i++) 
    {
        //Create a list element
        var listElem = document.createElement("LI");
        
        //Create a text node and add it to the list element
        var fruit = document.createTextNode(fruits[i]);
        listElem.appendChild(fruit);
        
        //Add the completed list element to the list of fruits on the shelf
        document.getElementById("fruits").appendChild(listElem);
    }
}

//Transfer fruits from the shelf to the basket
function addFruitToBasket() 
{
    //Get the user's input
    var fruit = document.getElementById("newfruit").value.toLowerCase();
    
    //Get the fruit shelf list
    var fruitShelf = document.getElementById("fruits");
    var fruitsOnShelf = fruitShelf.getElementsByTagName("li");
    
    //Make an array of the text values in the list
    var fruitArray = [];
    for(let i = 0; i < fruitsOnShelf.length; i++)
    {
        fruitArray[i] = fruitsOnShelf.item(i).innerText.toLowerCase();
    }
   
    //Get index of the user's inputted fruit
    var index = fruitArray.indexOf(fruit);
    
    //If the fruit shelf contains that fruit
    if(index > -1)
    {
        //Remove fruit from shelf
        fruitShelf.removeChild(fruitShelf.childNodes[index]);
        
        //Add the fruit to the basket
        var listElem = document.createElement("LI");
        listElem.appendChild(document.createTextNode(fruit));
        document.getElementById("basket").appendChild(listElem);
        
     } else {
        alert("That fruit is currently not on the shelf.");
    }
}