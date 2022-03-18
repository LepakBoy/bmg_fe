const func = (n) => {
  let arr = [];
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  arr.map((x) => {
    if (x % 15 === 0) {
      arr.splice(arr.indexOf(x), 1, ", BMG ,");
    }
  });

  arr.map((x) => {
    if (typeof x === "number") {
      sum += x;
    }
  });

  arr.map((x) => {
    if (x % 15 === 0) {
    }
  });

  //   console.log(result);

  console.log(`${arr.join(" + ")} = ${sum} `);
};

func(50);
