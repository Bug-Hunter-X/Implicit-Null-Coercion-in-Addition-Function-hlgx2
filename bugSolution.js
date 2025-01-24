function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle null, undefined, or non-numeric values
  }
  return a + b; 
}