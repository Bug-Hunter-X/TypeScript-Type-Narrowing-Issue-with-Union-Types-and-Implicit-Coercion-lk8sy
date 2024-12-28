function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

// Solution: Use type guards or runtime type checking to ensure that the narrow type is correct
function processResult(result: number | string): void {
  if (typeof result === 'number') {
    console.log('Number:', result * 2); 
  } else if (typeof result === 'string' && !isNaN(parseFloat(result))){
    const numResult = parseFloat(result)
    console.log('String Number:', numResult * 2) 
  } else {
    console.log('String:', result.toUpperCase());
  }
}

let result1 = add(5, 3); // 8
let result2 = subtract(10, 5); // 5

// Now this will print 16 and not cause a runtime error.
let result3 = add(5, 3);
processResult(result3); 