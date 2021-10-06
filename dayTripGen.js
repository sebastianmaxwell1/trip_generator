"use strict"


let destinationArray = ["Greece", "Ireland", "Japan", "Florida", "Palestine"]

function destinationSelector() {
    let destinations = Math.floor(Math.random() * destinationArray.length);
    return destinationArray[destinations];
}

let destinationResult = destinationSelector();


console.log(destinationResult);



let restaurantArray = ["Local Resturant", "Chain Resturant", "Finger Foods", "5 Star"];

function restaurantSelector() {
    let restaurants = Math.floor(Math.random() * restaurantArray.length);
    return restaurantArray[restaurants];
}

let restaurantResult = restaurantSelector();

console.log(restaurantResult);


let transportationArray = ["Uber / Cab", "Bus", "Walk!", "Reindeer"];

function transportationSelector() {

    let transportation = Math.floor(Math.random() * transportationArray.length);
    return transportationArray[transportation];
}

let transResult = transportationSelector();

console.log(transResult);

let entertainmentArray = ["Live Music", "Theater", "Sporting Events", "Alcohol","Outdoor Event"];

function entertainmentSelector() {
    let entertainment = Math.floor(Math.random() * entertainmentArray.length);
    return entertainmentArray[entertainment];
}
let entertainmentResult = entertainmentSelector();

console.log(entertainmentResult);

//Random Button Function
const randomClick = document.getElementById("random-button").addEventListener("click", function(){
    document.getElementById("destination-input").value = destinationSelector();
    document.getElementById("entertainment-input").value = entertainmentSelector();
    document.getElementById("restaurant-input").value = restaurantSelector();
    document.getElementById("transportation-input").value = transportationSelector();
});