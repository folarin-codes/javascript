/*
Create a mini calculator , thats accepts 2 numbers from the user and also accepts the symbol of the calculation they want to perform , long to the console (alert the user) the results of the operation. make sure the operations are addition , subtraction , multiplication and division.

Extra challenge : validate the user's input to make sure the user provides actual numbers
*/


// var firstName = 'adefolarin';

// console.log(firstName);

// var num1 = Number(prompt('enter a number'));

// //console.log(typeof num1 , num1)

//  var num2 = Number(prompt('enter another number'));

// var operation = prompt('enter the operation symbol');



 
// var answer;


// if (operation == '+') {

//       answer = num1 + num2;
      
//       if (isNaN(answer)) {

//             alert('Enter valid numbers');
            
//       }
//       else{
//             console.log(answer);
//       }

      
// }
// else if (operation == '-') {

//       answer = num1 - num2;
      
//       if (isNaN(answer)) {

//             alert('Enter valid numbers');
            
//       }
//       else{
//             console.log(answer);
//       }
      
// }
// else if (operation == '*') {

//       answer = num1 * num2;
      
//       if (isNaN(answer)) {

//             alert('Enter valid numbers');        
//       }
//       else{
//             console.log(answer);
//       }
// }
// else if (operation == '/') {
//       answer = num1 / num2;
      
//       if (isNaN(answer)) {

//             alert('Enter valid numbers');
            
         
            
//       }
//       else{
//             console.log(answer);
//       }
// }
// else {
//       alert('Enter either an addition , subtraction , multiplication or division symbol')
// }


/* Create a calculator converter application ....... */

let temp = Number(prompt('enter your temperature'));

let tempUnit = prompt('Enter your temperature unit').toLowerCase();

let desiredTempUnit = prompt('Enter your desired temperature in full').toLowerCase();

let tempFahrenheit = 'fahrenheit';

let tempCelcius = 'celcius';

let tempKelvin = 'kelvin';

let result;

if (!isNaN(temp)) {

      if (tempUnit == tempCelcius && desiredTempUnit == tempKelvin) {
            result = temp + 273.15;

            alert(` The result of your convertion is ${result} ${desiredTempUnit}`)
            
      }
      else if (tempUnit == tempCelcius && desiredTempUnit == tempFahrenheit) {
            
            result = (temp * 1.8) + 32;

            alert(` The result of your convertion is ${result} ${desiredTempUnit}`)
            
      }
      else if (tempUnit == tempKelvin && desiredTempUnit == tempCelcius) {
            
            result = temp - 273.15;

            alert(` The result of your convertion is ${result} ${desiredTempUnit}`)
            
      } else if (tempUnit == tempKelvin && desiredTempUnit == tempFahrenheit) {
            
            result = ((temp - 273.15) * 1.8) + 32;

            alert(` The result of your convertion is ${result} ${desiredTempUnit}`)
            
      } else if (tempUnit == tempFahrenheit && desiredTempUnit == tempCelcius) {

            result = (temp - 32) * 0.555556;

            alert(` The result of your convertion is ${result} ${desiredTempUnit}`)

            
      } else if (tempUnit == tempFahrenheit && desiredTempUnit == tempKelvin) {
            
            result = ((temp - 32) * 0.555556) + 273.15;

            alert(` The result of your convertion is ${result} ${desiredTempUnit}`)

            
      } else if (tempUnit == desiredTempUnit) {

            alert('Enter a different desired temparature unit')
            
      }
            
      else {

            alert('Enter the correct units of temparature in full')
            
      }      
}
else {
      alert('enter a numeric value as your unit')
      
}
