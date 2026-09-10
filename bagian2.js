const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Tablet", price: 600, category: "tablets", stock: 8 },
  { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 20 },
  { id: 6, title: "Gaming Mouse", price: 45, category: "accessories", stock: 30 },
  { id: 7, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 12 },
  { id: 8, title: "Monitor 24 inch", price: 180, category: "monitors", stock: 7 },
  { id: 9, title: "Webcam", price: 60, category: "accessories", stock: 2 },
  { id: 10, title: "External SSD 1TB", price: 130, category: "storage", stock: 18 },
  { id: 11, title: "Bluetooth Speaker", price: 75, category: "audio", stock: 9 },
  { id: 12, title: "Router WiFi 6", price: 110, category: "networking", stock: 6 },
  { id: 13, title: "Power Bank 20000mAh", price: 40, category: "accessories", stock: 25 },
  { id: 14, title: "Laptop Stand", price: 30, category: "accessories", stock: 40 },
  { id: 15, title: "USB-C Hub", price: 35, category: "accessories", stock: 22 },
  { id: 16, title: "Gaming Chair", price: 220, category: "furniture", stock: 4 },
  { id: 17, title: "4K Action Camera", price: 320, category: "cameras", stock: 5 },
  { id: 18, title: "Drone Mini", price: 450, category: "cameras", stock: 3 },
  { id: 19, title: "Fitness Tracker", price: 90, category: "wearables", stock: 16 },
  { id: 20, title: "Noise Cancelling Earbuds", price: 150, category: "audio", stock: 11 },
  { id: 21, title: "Portable SSD 2TB", price: 210, category: "storage", stock: 9 },
  { id: 22, title: "Graphic Tablet", price: 190, category: "accessories", stock: 6 },
  { id: 23, title: "Smart Home Hub", price: 100, category: "smart-home", stock: 14 },
  { id: 24, title: "Wireless Charger", price: 25, category: "accessories", stock: 35 },
  { id: 25, title: "27 inch Monitor", price: 260, category: "monitors", stock: 5 },
  { id: 26, title: "Ergonomic Mouse", price: 55, category: "accessories", stock: 19 },
  { id: 27, title: "Studio Headphones", price: 300, category: "audio", stock: 2 },
  { id: 28, title: "Laptop Cooling Pad", price: 28, category: "accessories", stock: 17 },
  { id: 29, title: "VR Headset", price: 400, category: "vr", stock: 3 },
  { id: 30, title: "Smart Light Bulb", price: 15, category: "smart-home", stock: 50 }
];

function findProductById(products, id) {
  return products.find(p => p.id === id);
}
function getLowStockProducts(products) {
  return products.filter(p => p.stock < 10);
}
function updateStock(products, id, newStock) {
  return products.map(p =>
    p.id === id ? { ...p, stock: newStock } : p
  );
}
 
console.log("\n===== BAGIAN 2 =====");
 
console.log("\n-- Latihan 2.1: Cari produk id=5 --");
console.log(findProductById(products, 5));
 
console.log("\n-- Latihan 2.2: Produk stok < 10 --");
console.log(getLowStockProducts(products).map(p => `${p.title} (stock: ${p.stock})`));
 
console.log("\n-- Latihan 2.3: Update stok produk id=1 jadi 99 --");
const productsUpdated = updateStock(products, 1, 99);
console.log("Produk asli (tidak berubah):", findProductById(products, 1));
console.log("Produk hasil update:", findProductById(productsUpdated, 1));