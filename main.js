// let name = prompt("your name:");
// // let gender = prompt ("gender:");
// // if (gender == `male`){alert (`welcome Mr. ${name}`)}
// // else if (gender== `female`){alert(`Welcome Ms. ${name}`)}
// // else {
// //     alert(`Welcome, ${name}!`);
// // }

// // let ask = confirm("do want you to order shawrma, zinger, burger")
// // let ordername = prompt(" write your order?")
// // let ordre = alert ("your order is being prepared")

// // console.log(`${name} ${ordername}`);


// // let number = 4;
// // let numbername = "";
// // switch(number){
// //     case 1:
// //         numbername = "ONE";
// //     break;
// //     case 2:
// //         numbername = "TWO";
// //     break;
// //     case 3:
// //         numbername = "THREE";
// //     break;
// //     case 4:
// //         numbername = "FOUR";
// //     break;
// //     case 5:
// //         numbername = "FIVE";
// //     break;
// //     case 6:
// //         numbername = "SIX";
// //     break;

// //     case 7:
// //         numbername = "SEVEN";
// //     break;
    
// //     case 8:
// //         numbername = "EIGHT";
// //     break;
// //     case 9:
// //         numbername = "NINE";
// //     break;

// //     default:
// //         nmbername = "SEVEN";
// //     break;

// // }
// // console.log(numbername)

// // //task function

//  let usersinformation =[name, gender, ordername]

//  console.log(usersinformation)


//  for(let r=0; r<usersinformation.length; r++ ){
//      console.log(usersinformation[r])
//  }


// // function genderquestion(){
// //     let gender = prompt ("gender:");
// // if (gender == `male`){alert (`welcome Mr. ${name}`)}
// // else if (gender== `female`){alert(`Welcome Ms. ${name}`)}
// // else {
// //     alert(`Welcome, ${name}!`);
// // }
// // return gender;
// // }


// const e=[5,3,2,4,4,3];
// e.reverse();
// console.log(e);



// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
// }




// const blaable= "orange"
// let q= blaable.split('').sort().join('');
// console.log(q);



let numbers= "025468";
let result = "";
function tires(input) {
    

    
    for (let i = 0; i < input.length; i++) {
       
        result += input[i];

       
        if (input[i] % 2 === 0 && input[i + 1] % 2 === 0) {
            result += "-"; 
        }
    }

    return result;
}


console.log(tires(numbers))







function userage(age) {
    
    return age >= 18 ? "The user is Adult" : "The user is Minor";
}


console.log(userage(20)); 
console.log(userage(16)); 
