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