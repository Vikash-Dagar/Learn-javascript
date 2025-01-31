console.log("vikash")
const accountId = 12345        //we cant change value of "const" varaible in fututre code
//accountId=123        this is not alloweded

let accountEmail = "@dagar.gmail"
var accountPassward = "4321"
accountCity="Jhajjar"            //we can declare a variable in javascript "without any keyword"
let accountState                //here value isnot given to this so "undefined" will show in output

/*in javascript prefer not to use "var"
because of issue in block scope and functional scope.
prefer only "let" and "const"
*/

accountEmail = "@vikashDagar.gmail"
accountPassward = "0000"
accountCity="Bengluru"

console.log(accountId)
console.table([accountId,accountEmail,accountPassward,accountCity,accountState])