/**
 * Learn string
 */

// var str = "Javascript(JS) Fundamental: Learn String!";

    //get length of a string
// console.log(str.length)

    //search
// console.log(str.includes('learn'))
// console.log(str.includes('Learn'))
// console.log(str.includes('a'))
// console.log(str.search('Learn'))

    // cut string
// console.log(str.slice(0,4))
// console.log(str.slice(34))
// console.log(str.split(' '))

    //get index of a string
// console.log(str.indexOf('String'))
// console.log(str.indexOf('i'))
// console.log(str.lastIndexOf('i'))

    //search and replace
// console.log(str.replace(/a/g,'@'))

    //get character by index
// console.log(str.charAt(0))
// console.log(typeof str.charAt(100))
// console.log(str[1])
// console.log(str[100])

/**
 * Learn number
 */

// var number = 25;
// var realNum = 2.15654987;
// var result1 = number/'abc'
// var result2 = number/4
// console.log(isNaN(result1))
// console.log(isNaN(result2))
// console.log(result2)
// console.log(typeof result2)
// console.log(typeof result2.toString())
// console.log(realNum.toFixed(3))

/**
 * Learn Array
 */
// var arr = [
//     'mandarine',
//     'apple',
//     'watermelon',
//     'avaocado',
//     2021,
//     null,
//     undefined,
//     {},//an array
//     function(){

//     }
// ];
// console.log(arr);
// console.log(arr[0]) //mandarine
// console.log(typeof arr)//object
// console.log(typeof {})//object
// console.log(Array.isArray(arr))//true
// console.log(arr.length)
// console.log(arr[100]) // undefined

    //actions on an array
// var countries = [
//     'Germany',
//     'Egypt',
//     'Australia'
// ];  
    //toString()
// console.log(typeof countries)
// console.log(typeof countries.toString())
    
    //join()
// console.log(countries.join())
// console.log(countries.join(';'))

    //pop: delete the last item of an array
    //and return the deleted item
// console.log(countries.pop())//Australia
// console.log(countries.pop())//Egypt
// console.log(countries.pop())//Germany
// console.log(countries.pop()) //undefined -> for an empty array
// console.log(countries)

    //shift:delete the first element of an array
    //and return the deleted elements
// console.log(countries.shift())
// console.log(countries.shift())
// console.log(countries.shift())
// console.log(countries.shift())//undefined -> the array is empty

    //push: add more elements to the end of an array
// console.log(countries.push('Vietname', 'Japan'))
// console.log(countries)

    //unshift: add more elements to the beginning of an array
// console.log(countries.unshift('England'))
// console.log(countries)

    //slice(): delete element(s) at a specific index
    //and return the deleted elements
// console.log(countries.slice(0,2)) //delete two elements from the item 0
// console.log(countries.slice(0,0))//not delete any item

    //concat: join 2 arrays
// var arr1 = ['a','b','h','k'];
// var arr2 = ['c','d'];
// console.log(arr1.concat(arr2));

    //slicing: extract elements of an array from index
// console.log(arr1.slice(1))
// console.log(arr1.slice(1,3))
// console.log(arr1.slice(-2,-1))
// console.log(arr1.splice(0,1,'Vietnam'))

/**
 * function
 */
    //function with hardcode input
// function showConsoleLog(){
//      var logMessage = 'Test function'
//      console.log(logMessage)
// }
// showConsoleLog();

    //function with one input argument
// function typeOfMessage(logMessage){
//     console.log(typeof logMessage)
// }
// typeOfMessage('abc')
// typeOfMessage(123)
// typeOfMessage({})
// typeOfMessage(function(){})

    //function with undefined inputs
// function showConsoleLog(){
//     var finalStr=''
//     for(var para of arguments){
//         finalStr = finalStr + `${para} - `
//         console.log(finalStr);
//     }
//     console.log(arguments);
// }
// showConsoleLog('a','b');

    //function with returned values
// var isConfirm = confirm('Confirm?');
// console.log(isConfirm);

    //Declaration and Expression functions
// showLog();
// // showLog1();//error here
// function showLog(){
//     console.log('Declaration function');
// }

// var showLog1 = function(){
//     console.log('Expression function')
// }
// showLog1();//need to be called after it is declared

/**
 * object
 */
// var studentNote = 'note';
// var student1 = {
//     name: 'Vu An',
//     dob:'11/2/2021',
//     grade:'1',
//     address: 'Ha Noi, VN',
//     [studentNote]: 'a bit naughty',
//     getName: function(){
//         return this.name;
//     }
// };
    //add a new key to an existing object
// student1.email = 'an.vu@student.gmail'
// student1['myEmail'] = 'an.vu@student.gmail'//both the same

    //get values from an object
// console.log(student1);
// console.log(student1.name);
// console.log(student1.phone);//undefined
// console.log(student1['mobiPhone']);//undefined
// console.log(student1[studentNote])
// console.log(studentNote['note'])//undefined
// console.log(student1.getName())

// var addressKey = 'address';
// console.log(student1[addressKey])

    //delete a key value
// delete student1.grade
// console.log(student1)

    //object constructor
// function Student(firstName, lastName, dob){
//     this.firstName= firstName;
//     this.lastName=lastName;
//     this.dob=dob,
//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// var student1 = new Student('An','Vu','21/3/2020')
// var student2 = new Student('Minh','Hoang','1/2/1998')
// student1.email = 'an.vu@student.vn'
// student2.mobiPhone ='01234698'
// console.log(student1)
// console.log(student2)

// console.log(student1.getName())
// console.log(student2.getName())

    //object prototype for adding more key value to an exisiting constructor
// Student.prototype.className = "Javascript"
// Student.prototype.getClassName = function(){
//     return this.className;
// }
// console.log(student1.className)//this value is in proto
// console.log(student1)
// console.log(student2.getClassName())

/**
 * Date object
 */
// var dateObj = new Date();
// var dateStr = Date();
// console.log(dateObj)
// console.log(typeof dateObj)
// console.log(typeof dateStr)

// var year = dateObj.getFullYear();
// var month = dateObj.getMonth() + 1;
// var date = dateObj.getDate();
// console.log(date,month,year)
// console.log(`${date}/${month}/${year}`)

/**
 * if else
 */
var day = 2;
if(day ===2){
    console.log('Today is Monday');
} else if(day===3){
    console.log('Today is Tuesday')
} else if(day===4){
    console.log('Today is Wednesday')
}

/**
 * switch .... case
 */
var day =4;
switch(day){
    case 2:
        console.log('Today is Monday')
        break;
    case 3:
        console.log('Today is Tuesday')
        break;
    case 4:
        console.log('Today is Wednesday')
        break; 
    case 5:
        console.log('Today is Thursday')   
        break;
    default:
        console.log('Unknown')
}

/**
 * Ternary operator
 */
var item = {
    name: 'chocolate',
    priceInDollar: 3
}
var result = item.priceInDollar<5 ? `${item.priceInDollar} dollars` : '10 dollars'
console.log(result)