// src/hooks/useProducts.js
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .then(({ data, error }) => {
        if (error) setError(error);
        else setProducts(data || []);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}

// FILTRAR PRODUTOS POR CATEGORIA
export function useProductsByCategory(categoryId) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryId) return;

    supabase
      .from("products")
      .select("*")
      .eq("category_id", categoryId)
      .then(({ data, error }) => {
        if (error) setError(error);
        else setProducts(data || []);
        setLoading(false);
      });
  }, [categoryId]);

  return { products, loading, error };
}
