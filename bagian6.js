const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5, rating: 4.5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 4.0 },
  { id: 4, title: "Tablet", price: 600, category: "tablets", stock: 8, rating: 4.3 },
  { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 20, rating: 3.9 },
  { id: 6, title: "Gaming Mouse", price: 45, category: "accessories", stock: 30, rating: 4.1 },
  { id: 7, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 12, rating: 4.6 },
  { id: 8, title: "Monitor 24 inch", price: 180, category: "monitors", stock: 7, rating: 4.4 },
  { id: 9, title: "Webcam", price: 60, category: "accessories", stock: 2, rating: 3.7 },
  { id: 10, title: "External SSD 1TB", price: 130, category: "storage", stock: 18, rating: 4.5 },
  { id: 11, title: "Bluetooth Speaker", price: 75, category: "audio", stock: 9, rating: 4.0 },
  { id: 12, title: "Router WiFi 6", price: 110, category: "networking", stock: 6, rating: 4.2 },
  { id: 13, title: "Power Bank 20000mAh", price: 40, category: "accessories", stock: 25, rating: 3.8 },
  { id: 14, title: "Laptop Stand", price: 30, category: "accessories", stock: 40, rating: 4.1 },
  { id: 15, title: "USB-C Hub", price: 35, category: "accessories", stock: 22, rating: 4.0 },
  { id: 16, title: "Gaming Chair", price: 220, category: "furniture", stock: 4, rating: 4.3 },
  { id: 17, title: "4K Action Camera", price: 320, category: "cameras", stock: 5, rating: 4.4 },
  { id: 18, title: "Drone Mini", price: 450, category: "cameras", stock: 3, rating: 4.2 },
  { id: 19, title: "Fitness Tracker", price: 90, category: "wearables", stock: 16, rating: 3.9 },
  { id: 20, title: "Noise Cancelling Earbuds", price: 150, category: "audio", stock: 11, rating: 4.5 },
  { id: 21, title: "Portable SSD 2TB", price: 210, category: "storage", stock: 9, rating: 4.6 },
  { id: 22, title: "Graphic Tablet", price: 190, category: "accessories", stock: 6, rating: 4.1 },
  { id: 23, title: "Smart Home Hub", price: 100, category: "smart-home", stock: 14, rating: 3.8 },
  { id: 24, title: "Wireless Charger", price: 25, category: "accessories", stock: 35, rating: 3.6 },
  { id: 25, title: "27 inch Monitor", price: 260, category: "monitors", stock: 5, rating: 4.5 },
  { id: 26, title: "Ergonomic Mouse", price: 55, category: "accessories", stock: 19, rating: 4.0 },
  { id: 27, title: "Studio Headphones", price: 300, category: "audio", stock: 2, rating: 4.7 },
  { id: 28, title: "Laptop Cooling Pad", price: 28, category: "accessories", stock: 17, rating: 3.9 },
  { id: 29, title: "VR Headset", price: 400, category: "vr", stock: 3, rating: 4.0 },
  { id: 30, title: "Smart Light Bulb", price: 15, category: "smart-home", stock: 50, rating: 3.7 }
];

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}