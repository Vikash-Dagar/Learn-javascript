// JavaScript is a "dynamic keytype language", meaning that the type of a
//  variable is assigned at runtime based on its value
//datatype 2 types
//PRIMITIVE :    these datatype make a copy of their during passing.
// 7 TYPES // number,string,boolean,null,bigint,undefined,symbol(it is used to make a value unique)
let score=10.1
let name="vikash"
let id=true
let temp=null
let bigint=19213123138n
let marks;
let id1=Symbol('123')
let id2=Symbol('123')
console.log(id1===id2);


//REFERENCE or non-primitive datatype (call by reference)
//array,objects,functions
//ARRAY
let arr = ["truck","car","bus","bike"]

//objects
{       // any value inside curly brakets is a object wheather it is a 
       // function,another object,array,number,string
    name:"vikash"
    age:21
}
let myObj={           // "we can also put a object in a variable"
    name:"abc",
    age:30,
}

//functions:        function(){}   //fxn defination
 
const myFxn=function(){        //we can treat a fxn as a variable in JS. 
    console.log("Hello Vikash")
} 
console.log(typeof myFxn)