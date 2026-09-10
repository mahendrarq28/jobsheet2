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

const allTags = nestedProducts.flatMap(p => p.tags);

const allComments = nestedProducts.flatMap(p => p.reviews.map(r => r.comment));
 
console.log("\n===== BAGIAN 4 =====");
 
console.log("\n-- Latihan 4.1: Semua tags (flatMap) --");
console.log(allTags);
 
console.log("\n-- Latihan 4.2: Semua comment (flatMap) --");
console.log(allComments);