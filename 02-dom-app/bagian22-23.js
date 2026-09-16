function simulateFetch(shouldSucceed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data berhasil diambil");
      } else {
        reject("Terjadi error saat mengambil data");
      }
    }, 500); // simulasi delay jaringan 500ms
  });
}
 
console.log("\n-- Promise yang berhasil (resolve) --");
simulateFetch(true)
  .then(result => console.log("then:", result))
  .catch(error => console.error("catch:", error))
  .finally(() => console.log("finally: selesai, apa pun hasilnya"));
 
console.log("\n-- Promise yang gagal (reject) --");
simulateFetch(false)
  .then(result => console.log("then:", result))
  .catch(error => console.error("catch:", error))
  .finally(() => console.log("finally: selesai, apa pun hasilnya"));
 
 
/* ============================================================
   BAGIAN 23 — Async/Await
============================================================ */
 
async function loadProductsSimulated() {
  const state = { products: [], status: "idle" };
 
  console.log("\n===== BAGIAN 23 =====");
  console.log("Status awal:", state.status);
 
  try {
    state.status = "loading";
    console.log("Status:", state.status);
 
    const result = await simulateFetch(true); // menunggu Promise selesai dulu
    state.products = [{ id: 1, title: "Laptop" }]; // anggap ini hasil dari API
    state.status = "success";
    console.log("Hasil await:", result);
    console.log("Status:", state.status);
  } catch (error) {
    state.status = "error";
    console.error("Terjadi error:", error);
  } finally {
    console.log("Selesai loadProductsSimulated(), status akhir:", state.status);
  }
}
 
setTimeout(() => {
  loadProductsSimulated();
}, 1500);