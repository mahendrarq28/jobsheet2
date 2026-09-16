// algorithms.js — searching, sorting, grouping, statistik (Bagian 6-10, 25)

export function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

export function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

export function sortProducts(products, sortBy) {
  const arr = [...products];
  switch (sortBy) {
    case "price-asc": return arr.sort((a, b) => a.price - b.price);
    case "price-desc": return arr.sort((a, b) => b.price - a.price);
    case "rating": return arr.sort((a, b) => b.rating - a.rating);
    case "title": return arr.sort((a, b) => a.title.localeCompare(b.title));
    default: return arr;
  }
}

export function groupByCategory(products) {
  return products.reduce((groups, p) => {
    if (!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
    return groups;
  }, {});
}

// Bagian 25.1 — Statistics
export function getStatistics(products) {
  const totalProducts = products.length;
  if (totalProducts === 0) {
    return { totalProducts: 0, averagePrice: 0, highestPrice: 0, lowestPrice: 0, totalStock: 0, averageRating: 0 };
  }
  const prices = products.map(p => p.price);
  const averagePrice = prices.reduce((a, b) => a + b, 0) / totalProducts;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const averageRating = products.reduce((sum, p) => sum + p.rating, 0) / totalProducts;
  return { totalProducts, averagePrice, highestPrice, lowestPrice, totalStock, averageRating };
}

// Bagian 25.2 — Category Analytics
export function getCategoryAnalytics(products) {
  const grouped = groupByCategory(products);
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

// Bagian 25.3 — Tiga mode pencarian
export function exactSearch(products, keyword) {
  return products.filter(p => p.title === keyword);
}

export function partialSearch(products, keyword) {
  return products.filter(p => p.title.includes(keyword));
}

export function caseInsensitiveSearch(products, keyword) {
  const lower = keyword.toLowerCase();
  return products.filter(p => p.title.toLowerCase().includes(lower));
}