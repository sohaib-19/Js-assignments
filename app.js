/* ***************************************STOPWATCH********************************************** */

 var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0;

    }
    else if(sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = 0
       
    }
   
}

function Start() {
    interval = setInterval(timer,10)
    disableBtn()
}
function Stop() {

    clearInterval(interval)
}
function Reset() {
    var min = 0;
var sec = 0;
var msec = 0;
minHeading.innerHTML = min
secHeading.innerHTML = sec
msecHeading.innerHTML = msec
Stop()
}
function disableBtn(){
    var btn = document.getElementById("Start");
    btn.disabled = true
}
 




//Assignment no.1 
                        // A L E R T S
// Q)

//alert("Hello, there!"); 

// Q)

//alert("Error! Please enter a valid password.");

// Q)

//alert("Welcome to JS Land..\nHappy Coding!");

// Q)
/* 
alert("Welcome to JS Land");
alert("Happy Coding!\n Prevent this page from making addtional dialogs.") */

// Q)

//console.log("Hello... I can run JS through my web browser's console")

//Assignment no.2
                        // VARIABLES FOR STRINGS
// Q)

//var userName;

// Q)

//var myName = "Syed Sohaib Ahmed";

// Q)
/* 
 var message = "Hello World!";
 alert(message); */

 // Q)
/* 
 var Name = 'John Doe';
 var age = 15;
 var course = 'Certified Mobile Application Develpoment'
alert(Name);
alert(age);
alert(course); */

// Q)
/* 
var pizza = 'PIZZA\nPIZZ\nPIZ\nPI\nP';
alert(pizza); */

// Q)
/* 
var email = 'syedsohaibahmed4@gmail.com';
alert('My E-mail address is' + " " + email ); */

// Q)
/* 
var book = "Smarter way to learn JavaScript";
alert('I am trying to learn from the book' + " " + book); */

// Q)

//document.write('Yah! I can write HTML content through JavaScript');

// Q)
/* 
var sign = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
alert(sign);
document.write(sign); */



//Assignment no.3
                        // VARIABLES FOR NUMBERS
// Q)

/* var age = 15;
alert('I am ' + age + ' years old'); */

// Q)

/* var n = 14;
alert('You have visited this site ' + n + ' times ');  */

// Q)

/* var birthYear = 2000;
document.write('My birth year is ' + birthYear + "<br>");
document.write('Data type of my ddeclared variable as a number') */

// Q)

/* var visitorName = 'John Doe';
var productTitle = 'T-shirts';
var quantity = 5;

document.write(visitorName + ' ordered ' + quantity + " " + productTitle + ' on XYZ clothing store'); */



//Assignment no.4
                        // LEGAL AND ILLEGAL VARIABLES 

// Q)

//var firstName, age, lastName;

// Q)

        //LEGAL VARIABLES
/* var name;
var $age;
var _home;
var lastName;
var $1234; */

        //ILLEGAL VARIABLES
/* var %name;
var 19sohaib;
var #country;
var 1packet;
var -javaScript;
 */

 // Q(a)

// HEADING STATING RULES FOR NAMIN JS VARIABLES
// document.write("The first character must be a letter or an underscore (_).<br> A variable name can't contain any spaces.<br> A variable name can contain only letters, numbers, dollar signs, and underscores.<br>Though a variable name can't be any of JavaScripts keywords it can contain keywords. For example, userAlert and myVar are legal. <br> Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a Rose. If you assign the string Floribundas to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty. <br> It is good to declare variable names in Camel Case.");

// (b)

//document.write('Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>dollar signs</b> and <b>underscores</b>.');


// (c)

//document.write(' Variables must begin with a <b>dollar signs</b>,<b>underscores or <b>letters</b> ');

// (d)

//document.write('Variable names are case <b> sensitive </b>')

// (e)

//document.write("Variable names should not be JS <b>keyword </b>");


//Assignment no.5
                        // MATHS EXPRESSION

// Q)

                        //*ADDITION*
        
/* var a = 5
var b = 132
var c = a + b;

document.write('Sum of ' + a + ' and ' + b + ' is ' + c); */

                        //*MULTIPLICATION*
/* var a = 5
var b = 132
var c = a * b;

document.write('"<br>"Multiplication of ' + a + ' and ' + b + ' is ' + c); */


                        //*DIVISION*
/* var a = 5
var b = 132
var c = a / b;

document.write('"<br>"Division of ' + a + ' and ' + b + ' is ' + c);
 */
                        //*SUBTRACTION*
/* var a = 500
var b = 132
var c = a - b;

document.write('"<br>"Subtraction of ' + a + ' and ' + b + ' is ' + c); */

                        //*MODULUS
/* var a = 5
var b = 132
var c = a % b;

document.write('"<br>"Modulus of ' + a + ' and ' + b + ' is ' + c); */

// Q)

/* var a = 9;
var b = 3;
++a;
var d = a + 6;
--d;
var c = a / b;

document.write('Value after variable declaration is undefined "<br>"')
document.write('Initial value ' + a + "<br>");
document.write('Value after increment is ' + ++a + "<br>");
document.write('Value after addition' + d + "<br>");
document.write('Value after decrement is ' + --d + "<br>");
document.write('Value after division ' +c+ "<br>");
document.write('The remainder is ' + a % b ); */

// Q)

//var movieTicket = 600;
//document.write('Total cost of buying 5 tickets is Rs.' + movieTicket*5);

// Q)

/* var a = 2;
document.write('<b>TABLE OF TWO</b>' + "<br>");

document.write('2 * 1 = 2'+ "<br>")
document.write('2 * 2 = 4' + "<br>")
document.write('2 * 3 = 6' + "<br>")
document.write('2 * 4 = 8' + "<br>")
document.write('2 * 5 = 10' + "<br>")
document.write('2 * 6 = 12' + "<br>")
document.write('2 * 7 = 14' + "<br>")
document.write('2 * 8 = 16' + "<br>")
document.write('2 * 9 = 18' + "<br>")
document.write('2 * 10 = 20' + "<br>")
 */

// Q)

/* var celsiusTemp = 26;
var farTemp = 80;

document.write('26 degree is ' +(farTemp-32) * 5/9 + ' Fahrenheit' + "<br>")
document.write('80 Fahrenheit is ' +(celsiusTemp * 9 / 5) + 32 + ' celcius') */


// Q)

/* var item1 = 590;
var item2 = 999;
var quantityItem1 = 4;
var quantityItem2 = 6;
var shipping = 120;
var $1 = item1*quantityItem1;
var $2 = item2*quantityItem2;
var totalBill = $1+$2+shipping;
document.write('Price of Item 1 = ' + item1 + "<br>");
document.write('Quantity of item 1 is ' +quantityItem1 + "<br>");
document.write('Price of Item 2 = ' + item2 + "<br>");
document.write('Quantity of item 2 is ' +quantityItem2 + "<br>");
document.write('Shipping Charges = ' +shipping + "<br>");
document.write('Total cost of your order is ' + totalBill ); */


// Q)

/* var totalMarks = 650;
var marksObtained = 500;
document.write('MARKSHEET' + "<br>");
document.write('Total Marks = ' +totalMarks + "<br>");
document.write('Marks Obtained = ' +marksObtained + "<br>")
var per = marksObtained / totalMarks * 100;
document.write('Percentage = ' +per) 
 */

// Q)

/* var usDollars = 10
var saudiRiyals = 25
var dollarPkr = 10 * 104.80;
var riyalPkr = 25 * 28;
var currencyInPkr = dollarPkr + riyalPkr;
document.write("CURRENCY IN PKR" + "<br>" + "<br>" + "<br>")
document.write("TOTAL CURRENCY IN PKR = Rs." +currencyInPkr )
 */


 // Q)

/*  var num = 5
var result = (num + 5) + ( num * 10) ;
document.write (result / 2) */

//Assignment no.6

// Q)
/* 
var a = 8
document.write('Result:' + "<br>")
document.write('The value of a is: ' + a + "<br>")
document.write('...................................................' + "<br>" + "<br>")
++a
document.write('The value of ++a is: ' + a + "<br>")
document.write('Now the value of a is: ' + a + "<br>" + "<br>" + "<br>") 
document.write('The value of a++ is: ' + a + "<br>")
a++
document.write('Now the value of a++ is: ' + a + "<br>" + "<br>" + "<br>")
--a
document.write('The value of --a is: ' + a + "<br>")
document.write('Now the value of a is: ' + a + "<br>" + "<br>" + "<br>") 
document.write('The value of a-- is: ' + a + "<br>")
a--
document.write('Now the value of a-- is: ' + a + "<br>") */



// Q)
/* var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write('Answer: ' +result + "<br>")
document.write('Stage 1. "--a" It is a pre decrement so the value of a becomes 1 right now' + "<br>" )
document.write('Stage 2. "--a - --b " = 1 - 0 = 1' + "<br>")
document.write('Stage 3. "--a - --b + ++b" = 1 - 0 + 1 = 2' + "<br>")
document.write('Stage 4. "--a - --b + ++b + b--" = 1 - 0 + 1 + 1 = 3' + "<br>" ) */


// Q)
/* 
var inp = prompt('Enter the value', 'Your Name');
 if (inp != null){
         document.write('Hello ' + inp + '! How are you doing today?')
 } */


// Q)
/* 
var sub1 = prompt('Enter Course Name: ', 'Course 1')
document.write('Course no.1 is ' + sub1 + "<br>" )
var sub2 = prompt('Enter Course Name: ', 'Course 2')
document.write('Course no.2 is ' + sub2 + "<br>")
var sub3 = prompt('Enter Course Name: ', 'Course 3') 
document.write('Course no.3 is ' + sub3 + "<br>" )
var totalMarks = 300;
document.write('Total Marks ' + totalMarks +"<br>")
var markObtained1 = prompt('Enter Marks for ' + sub1 + '.')
var markObtained2 = prompt('Enter Marks for ' + sub2 + '.')
var markObtained2 = prompt('Enter Marks for ' + sub3 + '.')
document.write('Marks Obtained in ' + sub1 + '= '  + markObtained1 +"<br>")
document.write('Marks Obtained in '  + sub2 + '= ' +markObtained2 +"<br>")
document.write('Marks Obtained in '  + sub3 + '= ' +markObtained2 +"<br>")
var Percentage1 = markObtained1 / totalMarks * 100;
var Percentage2 = markObtained2 / totalMarks * 100;
var Percentage3 = markObtained3 / totalMarks * 100;
document.write(Percentage1)
document.write(Percentage2)
document.write(Percentage2) */

//Assignment no.7

//Q)

/* var city = prompt("Enter your city name?");
if (city === 'karachi'){
        document.write('Welcome to the city of lights')
}
else {
        document.write('Wrong city')
} */

//Q)

/* var gender = prompt("Enter your gender");
if(gender === 'male'){
        document.write('Good Morning Sir!')
}
else if (gender === 'female'){
        document.write('Good Morning Mam')
}
else {
        document.write('unknown gender')
} */

//Q)

/* 
var colors = prompt('Choose any Color: Red, Yellow, Green')
if (colors === 'red'){
        document.write('Must Stop')
}
else if (colors === 'yellow'){
        document.write('Ready to move')
}
else if (colors === 'green'){
        document.write('Move now')
}
else {
        alert('Wrong Color Choosen')
} */

//Q)
/* 
var fuelRemaining = +prompt("How much fuel remaining in your car?", 1)
if (fuelRemaining === 0.25){
        alert('Please refill the fuel in your car')
}
else{
        alert('You have enough fuel in your car')
} */

//Q)

/* a) var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} ALERT MESSAGE DISPLAYED */

/* b)  var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
 } ALERT MESSAGE NOT DISPLAYED */

 /* c) var c = 12;
 if (c++ === 13){
 alert("condition 1 is true");
 }
 if (c === 13){
 alert("condition 2 is true"); //CONDITION 2 IS TRUE
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 } */
 
/* d) var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 } ALERT MESSAGE DISPLAYED
 */ 
/* 
 e) if (true){
 alert("True");
}
 if (false){
alert("False");
 } ALERT MESSAGE DISPLAYED TRUE*/
/* 
if("car" < "cat"){
 alert("car is smaller than cat");   }
         ALERT MESSAGE DISPLAYED CAR IS SMALLER THAN CAT        */

//Q)
/* var totalMarks = 300;
var sub1 = +prompt('Enter the marks of English')
var sub2 = +prompt('Enter the marks of OOP')
var sub3 = +prompt('Enter the marks of Management')
document.write('MARKSHEET' + "<br>")
document.write('Total Marks = ' +totalMarks+ "<br>")
var obtainedMarks = sub1 + sub2 + sub3;
document.write('Marks Obtained = ' + obtainedMarks + "<br>")
var percent = obtainedMarks / totalMarks;
var finalPer = percent * 100;
document.write('Percentage = ' + finalPer + "<br>")
if (finalPer >= 80){
        document.write('Grade A1' + "<br>")
        document.write('Remarks : Excellent')
}
else if (finalPer >= 70){
        document.write('Grade A' + "<br>")
        document.write('Remarks : Good')
}
else if (finalPer >= 60){
        document.write('Grade B' + "<br>")
        document.write('Remarks : You need to improve')
}
else {
        document.write('Grade Fail' + "<br>")
        document.write('Sorry! :(')
} */

//Q)

/* var num = 6;
var guess = prompt('Guess the number i chosed between 1 to 10')
if (guess == num){
        document.write('Bingo! Correct answer')
}
else if(guess == num+1){
        document.write('Close enough!')
}
else if(guess == num-1){
        document.write('Close enough!')
}
else {
        document.write('Sorry! You guessed wrong')
} */

//Q)

/* var num = +prompt('Enter a number to check if it is divisible by 3');
if (num % 3 == 0){
        alert('This number is divisible by 3')
}
else {
        alert('This number is not divisible by 3')
} */

//Q)

/* var num = +prompt('Enter any number')
if (num % 2 == 0){
        alert('This is an odd number')
}
else {
        alert('This is an even number')
} */

//Q)

/* var temp = +prompt('Enter the temprature in Centigrade');
if (temp >= 40){
        document.write('Its too hot outside')
}
else if (temp >= 30){
        document.write('The weather today is normal')
}
else if (temp >= 20){
        document.write("Today's weather is cool")
}
else if (temp >= 10){
        document.write('OMG! Today the weather is so coool')
} */

//Q

/* var fnum = +prompt('Enter the First number')
var oper = prompt('Operator')
var snum = +prompt('Enter the Second number')

 if (oper == '+'){
        alert(fnum + snum);
}
else if (oper == '-'){
        alert(fnum - snum);
}
else if (oper == '/'){
        alert(fnum / snum);
}
else if (oper == '*'){
        alert(fnum * snum);
}
else if (oper == '%'){
        alert(fnum % snum);
}
else {
        alert('This is not the Operator')
} */


//Assignment no. 12-13
//Q)
/* var inp = +prompt('Enter first number')
var inp1 = +prompt('Enter Second number')
if (inp > inp1 ){
        alert(inp)
}
else if (inp1 > inp){
        alert(inp1)
}
else if (inp === inp1){
        alert('Both numbers are equal')
} */

//Q)

/* var num = +prompt('Enter any number')
if (num > 0){
        alert('The number is Positive')
}
else if (num < 0){
        alert('The number is Negative')
}
else if (num === 0){
        alert('The number is equal to zero')
} */

//Q)
/* var char = prompt(Enter any character);
if (char === a ){
        alert('hello')
}
else {
        alert('False')
} */

//Q)
/* var greeting;
var hour = 13;
if (hour < 18) {
document.write(greeting = "Good day");
}
else {
        document.write(greeting = "Good evening");
} */

// Assignment no. 14-16

//Q)
// var names = [];

//Q)
// var array1 = ["john", "doe"]

//Q)

var num = [1, 3, 5]