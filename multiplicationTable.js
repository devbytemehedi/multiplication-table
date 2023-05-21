function multiplicationTable(num) {
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error('Input must be a positive integer.');
  }

  for (let i = 1; i <= 10; i++) {
    const product = num * i;
    console.log(`${num} x ${i} = ${product}`);
  }
}
