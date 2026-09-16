const product = {
  id: 1,
  title: "Laptop",
  price: 1200,
  category: "laptops",
  rating: 4.5,
  stock: 10,
  dimensions: { width: 30, height: 2, depth: 20 }
};
 
const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5, rating: 4.5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 4.0 }
];

// 1. Template literal
const label = `${product.title} - $${product.price}`;
console.log("\n-- Template literal --");
console.log(label);
 
// 2. Arrow function
const getTitle = (product) => product.title;
console.log("\n-- Arrow function --");
console.log(getTitle(product));
 
// 3. Destructuring
const { title, price, category } = product;
const [firstProduct, ...restProducts] = products;
console.log("\n-- Destructuring object --");
console.log(`title: ${title}, price: ${price}, category: ${category}`);
console.log("\n-- Destructuring array (rest parameter) --");
console.log("firstProduct:", firstProduct.title);
console.log("restProducts:", restProducts.map(p => p.title));
 
// 4. Spread
const updatedProduct = { ...product, stock: 20 };
const newProduct = { id: 4, title: "Tablet", price: 600, category: "tablets", stock: 8, rating: 4.3 };
const merged = [...products, newProduct];
console.log("\n-- Spread object --");
console.log("Stock asli:", product.stock, "| Stock updated:", updatedProduct.stock);
console.log("\n-- Spread array --");
console.log("Jumlah produk setelah merge:", merged.length);
 
// 5. Rest parameter
function sumPrices(...prices) {
  return prices.reduce((a, b) => a + b, 0);
}
console.log("\n-- Rest parameter --");
console.log("Total dari sumPrices(1200, 800, 100):", sumPrices(1200, 800, 100));
 
// 6. Optional chaining & nullish coalescing
const width = product.dimensions?.width ?? "Tidak diketahui";
const productNoDimensions = { id: 5, title: "Voucher" };
const widthMissing = productNoDimensions.dimensions?.width ?? "Tidak diketahui";
console.log("\n-- Optional chaining & nullish coalescing --");
console.log("Width produk yang punya dimensions:", width);
console.log("Width produk yang TIDAK punya dimensions:", widthMissing);
 
// 7. Default parameter
function filterByCategory(products, category = "all") {
  if (category === "all") return products;
  return products.filter(p => p.category === category);
}
console.log("\n-- Default parameter --");
console.log("Tanpa argumen category:", filterByCategory(products).map(p => p.title));
console.log("Dengan category='phones':", filterByCategory(products, "phones").map(p => p.title));

// Versi SEBELUM refactor (dari Bagian 5)
function getStatisticsOld(products) {
  const totalProducts = products.length;
  const prices = products.map(p => p.price);
  const averagePrice = prices.reduce((a, b) => a + b, 0) / totalProducts;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const averageRating = products.reduce((sum, p) => sum + p.rating, 0) / totalProducts;
  return { totalProducts, averagePrice, highestPrice, lowestPrice, totalStock, averageRating };
}
 
// Versi SESUDAH refactor — destructuring di parameter loop + optional chaining untuk data yang mungkin kosong
function getStatistics(products) {
  const totalProducts = products.length;
  const prices = products.map(({ price }) => price);
  const averagePrice = prices.reduce((a, b) => a + b, 0) / totalProducts;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const totalStock = products.reduce((sum, { stock }) => sum + stock, 0);
  // optional chaining berguna kalau ada produk yang mungkin tidak punya field rating
  const averageRating = products.reduce((sum, p) => sum + (p?.rating ?? 0), 0) / totalProducts;
 
  return { totalProducts, averagePrice, highestPrice, lowestPrice, totalStock, averageRating };
}
 
console.log("\n===== Latihan 20.1: getStatistics (refactored) =====");
console.log(getStatistics(products));
console.log("\nHasil sama dengan versi lama?", JSON.stringify(getStatistics(products)) === JSON.stringify(getStatisticsOld(products)));