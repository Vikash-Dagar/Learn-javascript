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
//*************************************Operation************************************/
//2+2,20/2  ->operations
let value=34
let negvalue=-(value)
console.log(negvalue)
console.log(3**3) // calculate the power of number 3^3 ->9
console.log(6/3)

let str1 ="Vikash   "
let str2 ="Dagar"
let str3 =str1+str2       // similaraly other datatypes can be done
console.log(str3)
console.log("1  " + 5)
console.log("1  "+5 +5)     // similaraly other datatypes can be done
console.log(5+5+ "  1")
console.log(2+2/2*3)        //2/2=1, 1*3=3, 3+2=5
