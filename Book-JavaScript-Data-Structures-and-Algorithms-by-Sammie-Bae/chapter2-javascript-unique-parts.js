//Chapter 3 Unique Parts : Bộ phận độc đáo

/***************** I.JavaScript Scope : phạm vi JS *****************/

// 1. Global Declaration: Global Scope
test = "sss"; // prints "sss"

// 2. Declaration with var: Functional Scope
// 3. Declaration with let: Block Scope

/***************** II.Equality and Types *****************/

/*   1. Primitive Types */

function Types() {
  var string = "string";
  var number = 1;
  var boolean = true;
  var object = {};
  var array = [1, 2, 3]; //object

  var fnc = function () {
    console.log("function");
  };
  // Symbol
  var syblob = Symbol("string");
  var syblob1 = Symbol("string");
  console.log(syblob == syblob1); //false

  const secretKey = Symbol("secret");
  const data = {
    name: "John",
    age: 30,
    [secretKey]: "sensitive data",
  };

  console.log(data[secretKey]); // 'sensitive data'

  var blank; //type undefined , value blank => undefined
  var nullVar = null; //type object , value nullVar => null
}

/*   2. Truthy/Falsey Check
 - Falsey : false, null, undefined, NaN, 0 , Empty strings ('' and "")
*/
/*   3. === vs ==
        - === is used to check equality more strictly than ==.
        - === checks for both the type and the value
        - == checks only for the value 
*/

// 4. Objects
var o1 = {};
var o2 = {};

o1 == o2; // returns false
//the variables have different addresses in memory.

// Summary
