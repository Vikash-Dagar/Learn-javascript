let score="33abc"
console.log(typeof score)

let valueInNumber=Number(score)   //now change this "string to int"
console.log(valueInNumber)         // here datatype is NotaNumber or random value
                            //here we need not to make mistake like this in our code
console.log(typeof valueInNumber)  //here valueInNumber is a number datatype

/*
"33" -> "number"
"33aabc"  -> "NaN"not a number
null  -> 0 or random value
undefined  -> NaN
true -> 1/false -> 0
*/
let isloggedin=0 
let booleanIsloggedin=Boolean(isloggedin)         //here "number/string converted to boolean" datatype
console.log(booleanIsloggedin)        //boolean coverted answer will show
console.log(typeof booleanIsloggedin)

let number=34
let numberString=String(number)
console.log(numberString)
console.log(typeof numberString)