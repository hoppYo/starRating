
export const range = (start, end, step = 1) => {
  
  if (end === undefined) {
    end = start;
    start = 0;
  }

  // Generate the range array
  let output = [];
  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

// Examples
console.log(range(10));
console.log(range(2, 10)); 
console.log(range(0, 10, 2)); 
console.log(range(5)); 

