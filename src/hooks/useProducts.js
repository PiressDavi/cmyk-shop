// src/hooks/useProducts.js
import { useEffect, useState } from "react";
import { getProducts } from "../services/localDB";

/* ===============================
   TODOS OS PRODUTOS
================================ */
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const data = getProducts();
      setProducts(data);
    } catch (err) {
      setError("Erro ao carregar produtos");
    } finally {
      setLoading(false);
    }
  }, []);

  return { products, loading, error };
}

/* ===============================
   PRODUTOS POR CATEGORIA
================================ */
export function useProductsByCategory(categoryId) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (!categoryId) {
        setProducts([]);
        setLoading(false);
        return;
      }

      const allProducts = getProducts();
      const filtered = allProducts.filter(
        (product) => product.category_id === categoryId
      );

      setProducts(filtered);
    } catch (err) {
      setError("Erro ao filtrar produtos");
    } finally {
      setLoading(false);
    }
  }, [categoryId]);

  return { products, loading, error };
}
