function randomNumberArr(max) {
  const res = new Array();
  let start = Date.now();
  for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(max));

    res.push(randomNumber);

    let end = Date.now();
    let time = end - start;
    // console.log(`${time}ms`);
  }

  return res;
}

// function pushTest(n) {
//   const arr = [];

//   for (let i = 0; i < n; i++) {
//     arr.push(i);
//   }

//   return arr;
// }

// console.log(randomNumberArr(1000));

// function popTest(max) {
//   let res = randomNumberArr(max);
//   const n = res.length;
//   let start = Date.now();

//   for (let i = 0; i < n; i++) {
//     res.pop();

//     let end = Date.now();
//     let time = end - start;
//     console.log(`${time}ms`);
//   }

//   return res;
// }

// console.log(popTest(1000));

// function mapTest(max) {
//   let arr = randomNumberArr(max);
//   let start = Date.now();
//   let res = arr.map((el) => {
//     return el + 1;
//   });
//   let end = Date.now();
//   let time = end - start;
//   console.log(`${time}ms`);
//   return res;
// }

// console.log(mapTest(100));

// function filterTest(max) {
//   let arr = randomNumberArr(max);
//   console.log(arr);
//   let start = Date.now();
//   let res = arr.filter((el) => {
//     let end = Date.now();
//     let time = end - start;
//     console.log(`${time}ms`);
//     return el % 2 === 0;
//   });

//   return res;
// }

// console.log(filterTest(1000000));

// function reduceTest(max) {
//   let arr = randomNumberArr(max);
//   console.log(arr);
//   let start = Date.now();
//   let res = arr.reduce((acc, el) => {
//     let end = Date.now();
//     let time = end - start;
//     console.log(`${time}ms`);
//     return (acc += el);
//   });

//   return res;
// }

// console.log(reduceTest(100000));

// function everyTest(max) {
//   let arr = randomNumberArr(max);
//   console.log(arr);
//   let start = Date.now();
//   let res = arr.every((el) => {
//     let end = Date.now();
//     let time = end - start;
//     console.log(`${time}ms`);
//     return el < max / 2;
//   });

//   return res;
// }

// console.log(everyTest(6));

function unshiftTest(n) {
  const arr = [];
  console.log(arr);
  let start = Date.now();

  for (let i = 1; i <= n; i++) {
    let end = Date.now();
    let time = end - start;
    console.log(`${time}ms`);
    arr.unshift(i);
  }

  return arr;
}

console.log(unshiftTest(100000));
