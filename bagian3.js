const nestedProducts = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];
 
const allTagsNested = nestedProducts.map(p => p.tags);
 
function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}
 
function getReviewCounts(products) {
  return products.map(p => ({
    id: p.id,
    title: p.title,
    totalReviews: p.reviews.length
  }));
}
 
function getFiveStarReviews(products) {
  return products.flatMap(p => p.reviews.filter(r => r.rating === 5));
}
 
function getCalculatedAverageRating(product) {
  const total = product.reviews.reduce((sum, r) => sum + r.rating, 0);
  return total / product.reviews.length;
}
 
function getMostReviewedProduct(products) {
  return products.reduce((max, p) =>
    p.reviews.length > max.reviews.length ? p : max
  );
}
 
const allRatingsFlat = nestedProducts.flatMap(p => p.reviews.map(r => r.rating));
 
console.log("\n===== BAGIAN 3 =====");
 
console.log("\n-- 1. Semua tag (belum diratakan) --");
console.log(allTagsNested);
 
console.log("\n-- 2. Produk dengan tag 'electronics' --");
console.log(findProductsByTag(nestedProducts, "electronics").map(p => p.title));
 
console.log("\n-- 3. Jumlah review per produk --");
console.log(getReviewCounts(nestedProducts));
 
console.log("\n-- 4. Review rating 5 dari semua produk --");
console.log(getFiveStarReviews(nestedProducts));
 
console.log("\n-- 5. Rata-rata rating dihitung ulang (Laptop) --");
console.log(getCalculatedAverageRating(nestedProducts[0]));
 
console.log("\n-- 6. Produk dengan review terbanyak --");
console.log(getMostReviewedProduct(nestedProducts).title);
 
console.log("\n-- 7. Semua rating jadi array datar --");
console.log(allRatingsFlat);