/**
you are given an array A of size N. Your frined gave an amazing task for You

your friend likes one type of sequence. so, he
called that type of sequence a fair sequence.

you should select a fair sequence of maximum length from an array


Here a fair sequence is nothing but you have to select elements in a pattern like positive element
negative element, positive element, .....
(or) negative element positive element, negative element ... to form a sequence
Your task is to print the maximum sum of elements possible by selecting a fair subsequence with maximum
length.

Example : 1

INPUT :

5- N (number of elements in an array)
21 12 13 21 2 --- Array A consists of N elements

OUTPUT
19

EXPLANATION:
Here you can select 21, -1 subsequences of maximum legth 2. The sum is 19 which is the 
maximum possible for a fair subsequence of length 2.

*/

let arr = [3, 4, -2, -3, -4];
let arr1 = [];
function sum(arr){
    let len = arr.length;
    arr1.push(arr[0]);
    if(arr1[0]>0){
        for(i=1; i < len; i++){
            if(arr[i] > 0){
                arr1.push(arr[i]);
                arr.slice(arr[i])
            }
        }
    }
    // if(arr1[0]>0){
    //     for(i=1; i < len; i++){
    //         if(arr[i] < 0){
    //             arr1.push(arr[i]);
    //             arr.slice(arr[i]-1)
    //         }
    //     }
    // }
    return arr1
}

console.log(sum(arr));




// let j=0;
// function narcissistic(value){
//   value = value.toString();
//
//   for(i = 0 ; i < value.length;  i++){
//     j += value[i]**value.length;
//     console.log(j);
//   }
//   if(j == value){
//     return true
//   }else {
//     return false
//   }
// }
// console.log(narcissistic(371));

// function wrapValue(n){
//     let local = n;
//     return () => local;
// }

// let wrap1 = wrapValue(1);
// console.log(wrap1());

// console.log(wrapValue(2));



// function multiplier(factor){
//     return number => number * factor
// }

// let twice = multiplier(2);

// console.log(twice(2))
