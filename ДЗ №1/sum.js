const args = process.argv.slice(2);
const input = args[0];
let arr;
try {
  arr = JSON.parse(input);
} catch (err) {
  console.error(`Error parsing JSON array: ${err.message}`);
  process.exit(1);
}

function sum(arr) {
  let result = 0;

  if (!Array.isArray(arr)) {
    return result;
  }

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      return (result += sum(element));
    }

    result += element;
  });

  return result;
}

console.log("Сума чисел:", sum(arr));
