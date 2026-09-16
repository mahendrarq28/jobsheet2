async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=30");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data.products; // DummyJSON membungkus hasil dalam { products, total, skip, limit }
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    throw error;
  }
}
 
const mockApiResponse = {
  products: [
    { id: 1, title: "Essence Mascara Lash Princess", price: 9.99, category: "beauty", stock: 5, rating: 4.94, brand: "Essence" },
    { id: 2, title: "Eyeshadow Palette with Mirror", price: 19.99, category: "beauty", stock: 44, rating: 3.28, brand: "Glamour Beauty" },
    { id: 3, title: "Powder Canister", price: 14.99, category: "beauty", stock: 89, rating: 3.82, brand: "Velvet Touch" },
    { id: 4, title: "Red Lipstick", price: 12.49, category: "beauty", stock: 34, rating: 3.99, brand: "Chic Cosmetics" },
    { id: 5, title: "iPhone 9", price: 549, category: "smartphones", stock: 34, rating: 4.69, brand: "Apple" },
    { id: 6, title: "iPhone X", price: 899, category: "smartphones", stock: 34, rating: 4.44, brand: "Apple" },
    { id: 7, title: "Samsung Universe 9", price: 1249, category: "smartphones", stock: 36, rating: 2.48, brand: "Samsung" },
    { id: 8, title: "OPPOF19", price: 280, category: "smartphones", stock: 123, rating: 4.3, brand: "OPPO" },
    { id: 9, title: "Huawei P30", price: 499, category: "smartphones", stock: 32, rating: 4.09, brand: "Huawei" },
    { id: 10, title: "MacBook Pro", price: 1749, category: "laptops", stock: 83, rating: 4.57, brand: "Apple" }
  ],
  total: 100,
  skip: 0,
  limit: 10
};
 
 
/* ============================================================
   Latihan 24.1 — simulasi loading state + error handling
============================================================ */
 
async function loadProducts(state) {
  state.status = "loading";
  console.log("Status:", state.status, "(tampilkan spinner/loading di UI di sini)");
 
  try {
    // di aplikasi asli: const products = await fetchProducts();
    // di sini disimulasikan pakai mock data + delay
    const products = await new Promise(resolve =>
      setTimeout(() => resolve(mockApiResponse.products), 300)
    );
    state.products = products;
    state.status = "success";
    console.log("Status:", state.status, `(${products.length} produk berhasil dimuat)`);
  } catch (error) {
    state.status = "error";
    console.error("Status:", state.status, error.message);
  }
}
 
 
/* ============================================================
   BAGIAN 25 — API Data Processing
============================================================ */
 
// 25.1 — Statistics
function getStatistics(products) {
  const totalProducts = products.length;
  const prices = products.map(p => p.price);
  const averagePrice = prices.reduce((a, b) => a + b, 0) / totalProducts;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const averageRating = products.reduce((sum, p) => sum + p.rating, 0) / totalProducts;
  return { totalProducts, averagePrice, highestPrice, lowestPrice, totalStock, averageRating };
}
 
// 25.2 — Category Analytics
function getCategoryAnalytics(products) {
  const grouped = products.reduce((groups, p) => {
    if (!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
    return groups;
  }, {});
 
  return Object.entries(grouped).map(([category, items]) => {
    const prices = items.map(p => p.price);
    const ratings = items.map(p => p.rating);
    return {
      category,
      jumlahProduk: items.length,
      rataRataHarga: (prices.reduce((a, b) => a + b, 0) / items.length).toFixed(2),
      rataRataRating: (ratings.reduce((a, b) => a + b, 0) / items.length).toFixed(2),
      totalStok: items.reduce((sum, p) => sum + p.stock, 0)
    };
  });
}
 
// 25.3 — Product Search dengan Tiga Mode
function exactSearch(products, keyword) {
  return products.filter(p => p.title === keyword);
}
 
function partialSearch(products, keyword) {
  return products.filter(p => p.title.includes(keyword));
}
 
function caseInsensitiveSearch(products, keyword) {
  const lower = keyword.toLowerCase();
  return products.filter(p => p.title.toLowerCase().includes(lower));
}
 
const state = { products: [], status: "idle" };
 
loadProducts(state).then(() => {
  console.log("\n===== BAGIAN 25 =====");
 
  console.log("\n-- 25.1: Statistics --");
  console.log(getStatistics(state.products));
 
  console.log("\n-- 25.2: Category Analytics --");
  console.table(getCategoryAnalytics(state.products));
 
  console.log("\n-- 25.3: Search 3 Mode --");
  console.log("Exact search 'iPhone 9':", exactSearch(state.products, "iPhone 9").map(p => p.title));
  console.log("Partial search 'iPhone':", partialSearch(state.products, "iPhone").map(p => p.title));
  console.log("Case-insensitive search 'iphone':", caseInsensitiveSearch(state.products, "iphone").map(p => p.title));
  console.log("Case-insensitive search 'IPHONE X':", caseInsensitiveSearch(state.products, "IPHONE X").map(p => p.title));
});