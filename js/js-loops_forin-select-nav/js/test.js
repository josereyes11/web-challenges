const products = {
  p1: { name: "Laptop", price: 899 },
  p2: { name: "Headphones", price: 49 },
  p3: { name: "Monitor", price: 220 },
};

const ul = document.createElement("ul");
document.body.append(ul);

// Your task:
// Use a for...in loop to create one <li> per product.
// Each <li>'s text should read like: "Laptop - $899"

for (const key in products) {
  const li = document.createElement("li");

  li.textContent = `${products[key].name} - $${products[key].price}`;
  ul.append(li);
}
