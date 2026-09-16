// ui.js — rendering DOM (Bagian 17, disempurnakan di Bagian 26)

export function renderProducts(products, favorites) {
  const container = document.querySelector("#product-list");
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p class='empty-message'>Tidak ada produk ditemukan.</p>";
    return;
  }

  for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    const isFavorited = favorites.has(product.id);
    card.innerHTML = `
      <img src="${product.thumbnail || 'https://via.placeholder.com/100'}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class="category">${product.category}</p>
      <p>Harga: $${product.price}</p>
      <p>Rating: ${product.rating} ⭐</p>
      <p>Stok: ${product.stock}</p>
      <button class="fav-btn" data-id="${product.id}">${isFavorited ? "♥ Favorit" : "♡ Favoritkan"}</button>
    `;
    container.append(card);
  }
}

export function renderStatistics(stats) {
  const el = document.querySelector("#statistics");
  el.innerHTML = `
    <span>Total Produk: <strong>${stats.totalProducts}</strong></span>
    <span>Rata-rata Harga: <strong>$${stats.averagePrice.toFixed(2)}</strong></span>
    <span>Total Stok: <strong>${stats.totalStock}</strong></span>
    <span>Rata-rata Rating: <strong>${stats.averageRating.toFixed(2)}</strong></span>
  `;
}

export function renderStatus(status) {
  const el = document.querySelector("#status-message");
  const messages = {
    idle: "",
    loading: "Memuat produk...",
    error: "Terjadi kesalahan saat memuat produk. Coba muat ulang halaman.",
    success: "",
    empty: "Tidak ada produk yang cocok dengan pencarian/filter."
  };
  el.textContent = messages[status] || "";
}