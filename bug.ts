function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // 8
let result2 = subtract(10, 5); // 5

// Uncommon error: Type narrowing is not happening as expected
function processResult(result: number | string): void {
  if (typeof result === 'number') {
    console.log('Number:', result * 2); // Type is correctly narrowed here
  } else {
    console.log('String:', result.toUpperCase()); // Type is correctly narrowed here
  }
}

let result3 = add(5, '3'); // Type error: Argument of type 'string' is not assignable to parameter of type 'number'.
processResult(result3); // The compiler does not catch the type error because it does not narrow the type properly