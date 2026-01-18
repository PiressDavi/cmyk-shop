const CAT_KEY = "categories";
const PROD_KEY = "products";

/* ---------- CATEGORIES ---------- */
export function getCategories() {
  const data = localStorage.getItem(CAT_KEY);
  return data ? JSON.parse(data) : [];
}

export function seedCategories() {
  if (!localStorage.getItem(CAT_KEY)) {
    const initial = [
      { id: "1", name: "Gráfica" },
      { id: "2", name: "Velas" },
      { id: "3", name: "Fotografia" },
    ];
    localStorage.setItem(CAT_KEY, JSON.stringify(initial));
  }
}

/* ---------- PRODUCTS ---------- */
export function getProducts() {
  const data = localStorage.getItem(PROD_KEY);
  return data ? JSON.parse(data) : [];
}

export function addProduct(product) {
  const products = getProducts();
  products.push(product);
  localStorage.setItem(PROD_KEY, JSON.stringify(products));
}
