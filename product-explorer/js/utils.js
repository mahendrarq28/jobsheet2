// utils.js — helper umum

export function formatPrice(price) {
  return `$${price.toLocaleString("en-US")}`;
}

export function truncateText(text, maxLength = 50) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}