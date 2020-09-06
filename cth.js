let nama = 'hacktiv8';

for (let i = 0; i < nama.length; i++){
  let tampung = '';
  for(let j = 0; j < nama.length; j++) {
    if(j > nama.length - i - 1) {
      tampung += ' ';
    }
    else {
      tampung += nama[j]
    }
  }
  console.log(tampung); 
  /*
//          8
//         v8
//        iv8
//       tiv8
//       
//     cktiv8
//    acktiv8
//   hacktiv8
//   */
}

for (let i = 0; i < nama.length; i++){
  let tampung = '';
  for(let j = 0; j < nama.length; j++) {
    if(j >= nama.length - i -1) {
      tampung += nama[j];
    }
  }
  console.log(tampung); 
  /*
//   hacktiv8
//   hacktiv
//   hackti
//   hackt
//   hack
//   hac
//   ha
//   h
//   */
}

/*
    > looping 
    - counted loop (for, foreach, repeat) perulangan yang di tentukan batasnya
    - uncounted loop (while, do while) 

*/

// for
// for (let i=0; i<20; i++){
//     if(i%2 ===0){
//         console.log(i);
//     }
// };

//while
// let lulus = true;
// let i=0;
//     while (!lulus) {
//         console.log(lulus);
//         i++;
//             if (i == 5 ) {
//                 lulus = false;
//             }
//             if (i == 20) {
//                 complete=true;
//             }   
//         }
    // let complete = true;
    // let i=0;
    //     while (complete) {
    //         i++;
    //         if (i%2 !== 0) {
    //             console.log(i);
            
    //         }if (i == 20 ) {
    //             complete = false;
    //             }
    //     }

//foreach     
// let arr=[1,2,3,4,5];
// arr.forEach(function name(el) {
//     console.log(el);
// // });
// arr.forEach(element => {
//     if (element %2 === 0) {
//         console.log(element);
//     }
//     });

// deret fibonachi = for = 1 < 20
// let index1=1;
// let index2=0;
// let sum;
//     for (let i = 1; i < 20; i++){
//         sum = index1 + index2;
//         index1=index2
//         index2=sum;
//         console.log(sum);
//     }

    // for (let i = 3; i < 30; i++){
    //         let prima=0;  
    //     for (let x = 3; x < 30; x++) {
    //         if (i % x == 0) {
    //             prima=prima+1;
    //         }
    //     } if (prima>=2) {
    //         console.log(i);
    //     }
    // }