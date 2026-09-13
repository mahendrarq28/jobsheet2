const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5, rating: 4.5, brand: "Acer", tags: ["computer", "office"] },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2, brand: "Samsung", tags: ["mobile", "electronics"] },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 4.0, brand: "Sony", tags: ["audio", "electronics"] },
  { id: 4, title: "Tablet", price: 600, category: "tablets", stock: 8, rating: 4.3, brand: "Samsung", tags: ["mobile", "office"] },
  { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 20, rating: 3.9, brand: "Apple", tags: ["wearable", "electronics"] },
  { id: 6, title: "Gaming Mouse", price: 45, category: "accessories", stock: 30, rating: 4.1, brand: "Logitech", tags: ["gaming", "computer"] },
  { id: 7, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 12, rating: 4.6, brand: "Logitech", tags: ["gaming", "computer"] },
  { id: 8, title: "Monitor 24 inch", price: 180, category: "monitors", stock: 7, rating: 4.4, brand: "LG", tags: ["computer", "office"] },
  { id: 9, title: "Webcam", price: 60, category: "accessories", stock: 2, rating: 3.7, brand: "Logitech", tags: ["computer", "office"] },
  { id: 10, title: "External SSD 1TB", price: 130, category: "storage", stock: 18, rating: 4.5, brand: "Samsung", tags: ["storage", "computer"] },
  { id: 11, title: "Bluetooth Speaker", price: 75, category: "audio", stock: 9, rating: 4.0, brand: "JBL", tags: ["audio", "electronics"] },
  { id: 12, title: "Router WiFi 6", price: 110, category: "networking", stock: 6, rating: 4.2, brand: "TP-Link", tags: ["networking", "electronics"] },
  { id: 13, title: "Power Bank 20000mAh", price: 40, category: "accessories", stock: 25, rating: 3.8, brand: "Anker", tags: ["mobile", "electronics"] },
  { id: 14, title: "Laptop Stand", price: 30, category: "accessories", stock: 40, rating: 4.1, brand: "Anker", tags: ["office", "computer"] },
  { id: 15, title: "USB-C Hub", price: 35, category: "accessories", stock: 22, rating: 4.0, brand: "Anker", tags: ["computer", "office"] },
  { id: 16, title: "Gaming Chair", price: 220, category: "furniture", stock: 4, rating: 4.3, brand: "Secretlab", tags: ["gaming", "furniture"] },
  { id: 17, title: "4K Action Camera", price: 320, category: "cameras", stock: 5, rating: 4.4, brand: "GoPro", tags: ["camera", "electronics"] },
  { id: 18, title: "Drone Mini", price: 450, category: "cameras", stock: 3, rating: 4.2, brand: "DJI", tags: ["camera", "electronics"] },
  { id: 19, title: "Fitness Tracker", price: 90, category: "wearables", stock: 16, rating: 3.9, brand: "Xiaomi", tags: ["wearable", "electronics"] },
  { id: 20, title: "Noise Cancelling Earbuds", price: 150, category: "audio", stock: 11, rating: 4.5, brand: "Sony", tags: ["audio", "electronics"] },
  { id: 21, title: "Portable SSD 2TB", price: 210, category: "storage", stock: 9, rating: 4.6, brand: "Samsung", tags: ["storage", "computer"] },
  { id: 22, title: "Graphic Tablet", price: 190, category: "accessories", stock: 6, rating: 4.1, brand: "Wacom", tags: ["office", "computer"] },
  { id: 23, title: "Smart Home Hub", price: 100, category: "smart-home", stock: 14, rating: 3.8, brand: "Google", tags: ["smart-home", "electronics"] },
  { id: 24, title: "Wireless Charger", price: 25, category: "accessories", stock: 35, rating: 3.6, brand: "Anker", tags: ["mobile", "electronics"] },
  { id: 25, title: "27 inch Monitor", price: 260, category: "monitors", stock: 5, rating: 4.5, brand: "LG", tags: ["computer", "office"] },
  { id: 26, title: "Ergonomic Mouse", price: 55, category: "accessories", stock: 19, rating: 4.0, brand: "Logitech", tags: ["office", "computer"] },
  { id: 27, title: "Studio Headphones", price: 300, category: "audio", stock: 2, rating: 4.7, brand: "Sony", tags: ["audio", "electronics"] },
  { id: 28, title: "Laptop Cooling Pad", price: 28, category: "accessories", stock: 17, rating: 3.9, brand: "Cooler Master", tags: ["computer", "office"] },
  { id: 29, title: "VR Headset", price: 400, category: "vr", stock: 3, rating: 4.0, brand: "Meta", tags: ["gaming", "electronics"] },
  { id: 30, title: "Smart Light Bulb", price: 15, category: "smart-home", stock: 50, rating: 3.7, brand: "Xiaomi", tags: ["smart-home", "electronics"] }
];

function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}
 
console.log("\n===== BAGIAN 10 =====");
 
console.log("\n-- Latihan 10.1: countFrequency contoh sederhana --");
const words = ["laptop", "phone", "laptop", "tablet", "phone", "laptop"];
console.log(countFrequency(words));