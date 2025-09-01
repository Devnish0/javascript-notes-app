//! for looops -- breaks -- continue

//?for loop declaraiton

for (begin; condition; step) {
  // ... loop body ...
}

//?------variable declaration; condition check, index

for (let i = 0; i < 100; i++) {
  const element = i;
  console.log(element);
}

//?------if statements in the for loop-----------

for (let i = 0; i < 100; i++) {
  const element = i;
  console.log(element);
  if (element == 50) {
    console.log(`we have reached the 50 now`);
  }
}

//?------ loops in loops ------//

for (let i = 0; i <= 10; i++) {
  console.log(`this is the table of ${i}`);
  for (let j = 0; j <= 10; j++) {
    const element = j;
    // console.log(`this is inner loop ${j} of outer loop ${i}`);
    // ? table from 0 to 10
    // console.log(`${i} times ${j} is equals to ${i * j}`);
    console.log(`${i} * ${j} = ${i * j}`); //?table of 10
  }
}
//?----------------------------- which tbale do you want
let input = 10;
for (let i = 0; i <= 10; i++) {
  // console.log(`${input}*${i}=${input * i}`);
}

myArr = [`batmean`, `superman`, `superwomen`, `shaktiman`, `whatever`];
for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  console.log(element);
}

//!----------break and continue----------//

//? break is used for breaking the loop // no further thing will be printed
//? continue is used for skipping the current iteration // that one condition will get skipped or not printed

for (let i = 0; i <= 20; i++) {
  // console.log(i);

  if (i === 15) {
    break;
  }
}

for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log(`detected ${i}`);
    continue;
  }
  console.log(i); //skipped 15
}
