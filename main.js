// // import {bola} from './test'

// // // // // JAVASCRIPT BASICS

// // // // // VARIABLES?

// // // // // var , let , const

// // // // //ES6 OR ES2015;

// // // // var firstName = 'Micheal';

// // // // firstName = 'Michelle';

// // // // var middleName = 'Adefolarin';

// // // // let surname = 'Suberu';

// // // // surname = 'Obi';

// // // // const PI = 3.142;


// // // // console.log(firstName, middleName , surname , PI);
// // // // // console.log(middleName)


// // // // // DATATYPES

// // // // // PRIMITIVE DATATYPES , NON-PRIMITIVE TYPES

// // // // // STRINGS , NUMBERS , BOOLEANS , UNDEFINED , NULL , SYMBOL;

// // // // //NON-PRIMITIVE DATATYPES : ARRAYS , OBJECTS , MAPS

// // // // //STRINGS : anything inside of a quote is atring;

// // // // 'folarin', "micheal", 'president', "course", `javascript`

// // // // //NUMBERS 4 ,7,90 ,10.8,

// // // // var currentAge = 45;

// // // // //BOOLEAN : false // true ;

// // // // var largeNumber = 500;

// // // // var smallNumber = 5;

// // // // console.log(smallNumber < largeNumber);


// // // // //undefined

// // // // var isMarried;

// // // // console.log(isMarried);

// // // // //NULL

// // // // var hello = null;

// // // // console.log(hello);



// // // // full name , email address , password.





// // // // var firstName = prompt('enter your first name');

// // // // var lastName = prompt('enter your last name');
// // // // var email = prompt('enter your email');
// // // // var password = prompt('enter your password');

// // // // alert(password);
// // // // alert(email)


// // // // console.log('first Name : ', firstName, ' last name :', lastName, ' email : ', email, 'password: ', password);

// // // // console.log(`first name : ${firstName}
// // // //             last name : ${lastName}
// // // //             email : ${email}
// // // //             password : ${password}

// // // // `);



// // // var fullName, dateOfBirth;

// // // var fullName = 'chidi micheal';

// // // var fullname = 'Ade ronke';

// // // console.log('', fullName)

// // // //  ARITHMETIC OPERATORS IN JS

// // // var grossSalary = 500000;

// // // var tax = 50000;

// // // var netSalary = grossSalary - tax;

// // // var bonus = 100000;

// // // var totalPackage = netSalary + bonus;

// // // //console.log(totalPackage);


// // // var num1 = 4;
// // // var num2 = 5;

// // // var product = num1 * num2;

// // // var division = product / 2;
// // // // console.log(product);

// // // console.log(division);

// // // var num = ((5 + 6) - 7) * (10 / 5);

// // // var num2 = 5 + 6 - 7 * 10 / 5;

// // // // console.log(num, num2);

// // // var exponent = 2 ** 4;

// // // // exponential (**)
// // // //modulus (%)

// // // var modulus = 7 % 2;

// // // //console.log(modulus);

// // // //console.log(Math);

// // // // sconsole.log(num);

// // // // CONDITIONALS


// // // // var powerBankPrice = 20000;
// // // // var cashAtHand = 15000;

// // // // console.log(cashAtHand > powerBankPrice);


// // // // if (cashAtHand < powerBankPrice) {
// // // //       console.log('I will save to complete the money');
// // // // }
// // // // else {

// // // //       console.log('I have enough to purchase the powerbank');
      
// // // // }


// // // // var temp = 0;

// // // // var normalTemperature = 30;


// // // // if ( normalTemperature < temp ) {

// // // //       console.log('I will go to work');   //1
      
// // // // }
// // // // else {

// // // //       console.log('I wont go to work today'); //2
      
// // // // }

// // // // ahmed : 1
// // // // jumoke : 1
// // // // nancy : 1
// // // // wale : 1
// // // // miracle : 1


// // // var merit = 4.5;

// // // var myGrade = 1.5;

// // // if (myGrade >= merit) {
      
// // //       console.log('I am going to harvard university for my M.Sc');
      
// // // }

// // // else if (myGrade >= 4) {

// // //       console.log(' I am going to MIT');
      
// // // }
// // // else if (myGrade >= 3.5) {

// // //       console.log('I am going to Manitoba University');
      
// // // }
// // // else if(myGrade >= 3.0){
// // //       console.log('I am going to CU');
// // // }
// // // else {
// // //       console.log("I am going to sunday school");
// // // }



// // // // switch () {
      
// // // // }


// // var email = prompt('enter your email');

// // var pin = Number(prompt('enter your pin'));

// //  console.log( pin)


// // // console.log(pin, typeof pin);

// // var number = 7;

// // console.log(6 == 7);

// // // !=

// // console.log(6 != 7);

// // // &&

// // // ||


// // if (typeof pin == 'number' && pin == NaN) {
      
// //       console.log('Your email :', email, ' your pin : ', pin);
// // }
// // else {
// //       alert('your pin must be a number');
// // }


// var num1 = parseInt(prompt('enter a number'));

// var num2 = parseInt(prompt('Enter another number'));

// var answer;

// var operation = prompt('Enter your operation symbol');

// if (operation == '+') {

//       answer = num1 + num2;

//       if (isNaN(answer)) {

//             alert('Enter valid Numbers');
//       }
//       else {
            
//       alert(`Your answer is ${answer}`)
//       console.log(answer);
            
//       }

// }
// else if (operation == '-') {
//       answer = num1 - num2;

//      if (isNaN(answer)) {

//             alert('Enter valid Numbers');
//       }
//       else {
            
//       alert(`Your answer is ${answer}`)
//       console.log(answer);
            
//       }

// }
// else if (operation == '*') {
//       answer = num1 * num2;
      
//       if (isNaN(answer)) {

//             alert('Enter valid Numbers');
//       }
//       else {
            
//       alert(`Your answer is ${answer}`)
//       console.log(answer);
            
//       }
// ;

// }
// else if (operation == '/') {

//       answer = num1 / num2;

//       if (isNaN(answer)) {

//             alert('Enter valid Numbers');
//       }
//       else {
            
//       alert(`Your answer is ${answer}`)
//       console.log(answer);
            
//       }


// }
// else {
//       alert('Enter a valid operator that is either addidtion , subtraction , division or multiplication ');
// }



var user_temp = Number(prompt(' give your temperature in digits`'));
var user_unit = prompt('your desired standard temperature unit');
var converted_unit = prompt('state your desired standard temperature unit to be converted into');
 
var converted_temp;

var first_unit = 'celcius';
 
var second_unit = 'kelvin';
 
var third_unit = 'farenheit';

if (!isNaN(user_temp) && user_unit == first_unit || user_unit == second_unit || user_unit == third_unit  ) {
      

      if (user_unit === first_unit, converted_unit === second_unit) {
            converted_temp = user_temp + 273.15 + second_unit;
            console.log(converted_temp);
      }
      else if (user_unit === first_unit, converted_unit === third_unit) {
            converted_temp = ((1.8 * user_temp) + 32) + third_unit;
            console.log(converted_temp);
      }
      else if (user_unit === second_unit, converted_unit === first_unit) {
            converted_temp = user_temp - 273.15 + first_unit;
            console.log(converted_temp);
      }
      else if (user_unit === second_unit, converted_unit === third_unit) {
            converted_temp = (1.8 * (user_temp - 273.15) + 32) + third_unit;
            console.log(converted_temp);
      }
      else if (user_unit === third_unit, converted_unit === first_unit) {
            converted_temp = (0.556 * (user_temp - 32)) + first_unit;
            console.log(converted_temp);
      }
      else if (user_unit === third_unit, converted_unit === second_unit) {
            converted_temp = ((0.556 * user_temp) + 459.67) + second_unit
            console.log(converted_temp);
      }
      else if (user_unit === converted_unit) {
            alert('same unit');
      }
      else {
            alert('wrong unit input');
      }
}

else {
      alert('Enter a correct temperature unit');
}
    



  