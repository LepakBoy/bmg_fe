let result = [];

for (let i = 0; i >= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    i = "Frontend Backend";
  } else if (i % 3 == 0) {
    i = "Frontend";
  } else if (i % 5 == 0) {
    i = "Backend";
  } else {
    i = i;
  }
  result.push(i);
}

console.log(result);

// const func = (a) => {
//   for (let i = 0; i >= a; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       i = "Frontend Backend";
//     } else if (i % 3 == 0) {
//       i = "Frontend";
//     } else if (i % 5 == 0) {
//       i = "Backend";
//     } else {
//       i = i;
//     }
//     console.log(i);
//   }

//     return;
// };

// func(50);
