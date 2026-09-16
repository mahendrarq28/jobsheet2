// main.js — orchestration, menyambungkan semua modul (Bagian 21, alur akhir di Bagian 26)

import { fetchProducts } from "./api.js";
import { sortProducts, getStatistics } from "./algorithms.js";
import { renderProducts, renderStatistics, renderStatus } from "./ui.js";
import { state } from "./state.js";

// Bagian 18 — render() memproses state, lalu tampilkan hasilnya ke DOM
function render() {
  let result = [...state.products];

  // Search (Bagian 25.3 — pakai pola case-insensitive)
  if (state.search.trim() !== "") {
    const keyword = state.search.toLowerCase();
    result = result.filter(p => p.title.toLowerCase().includes(keyword));
  }

  // Filter kategori
  if (state.category !== "all") {
    result = result.filter(p => p.category === state.category);
  }

  // Sort (Bagian 8)
  if (state.sortBy !== "default") {
    result = sortProducts(result, state.sortBy);
  }

  const displayStatus = (result.length === 0 && state.status === "success") ? "empty" : state.status;
  renderStatus(displayStatus);
  renderProducts(result, state.favorites);

  // Statistik selalu dihitung dari SEMUA produk, bukan hasil filter,
  // supaya user tetap lihat gambaran keseluruhan data
  renderStatistics(getStatistics(state.products));
}

// Kategori dropdown dibuat otomatis dari data yang benar-benar ada (Bagian 11 — Set)
function populateCategoryOptions(products) {
  const categories = [...new Set(products.map(p => p.category))];
  const select = document.querySelector("#category-select");
  for (const cat of categories) {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.append(option);
  }
}

// Bagian 23 — async/await dengan try/catch/finally
async function init() {
  state.status = "loading";
  render();

  try {
    const products = await fetchProducts();
    state.products = products;
    state.status = "success";
    populateCategoryOptions(products);
  } catch (error) {
    state.status = "error";
  } finally {
    render();
  }

  // Bagian 19 — Event Handling
  document.querySelector("#search-input").addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
  });

  document.querySelector("#category-select").addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
  });

  document.querySelector("#sort-select").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render();
  });

  // Bagian 26 — favorit, pakai event delegation karena tombolnya dibuat dinamis
  document.querySelector("#product-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("fav-btn")) {
      const id = Number(e.target.dataset.id);
      if (state.favorites.has(id)) state.favorites.delete(id);
      else state.favorites.add(id);
      render();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);