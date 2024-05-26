"use strict";
// Day 05
// Question 13
let cars = ["Tesla", "BMW", "Mercedies"];
cars.forEach((car) => {
    console.log(` I would like to own a ${car}.`);
});
// Question 14
let guests = ["Ilma", "Mehak", "Asma"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, Would You Like To Join Me For Dinner`);
});
// Question 15
let unableToAttend = "Asma";
console.log(`${unableToAttend} is not coming gor dinner.`);
let newGuest = "Hamna";
guests[2] = newGuest;
guests.forEach(guest => {
    console.log(`Dear ${guest}, Would You Like To Join Me For Dinner`);
});
