function greatestProduct(matrix) {
  let biggestProduct = 0;
  for (let i = 0; i <= matrix[0].length - 4; i++) {
    let product = 1;
    product *= matrix[0][i];
    product *= matrix[0][i + 1];
    product *= matrix[0][i + 2];
    product *= matrix[0][i + 3];
    if (product > biggestProduct) {
      biggestProduct = product;
    }
  }
  return biggestProduct;
}

function greatestProduct(matrix) {
  let biggestProduct = 0;
  matrix.forEach((row, rowIndex) => {
    for (let i = 0; i <= row.length - 4; i++) {
      let product = 1;
      product *= row[i];
      product *= row[i + 1];
      product *= row[i + 2];
      product *= row[i + 3];
      if (product > biggestProduct) {
        biggestProduct = product;
      }
    }
  });
  return biggestProduct;
}
