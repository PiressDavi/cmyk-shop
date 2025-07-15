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
        if (error) {
          setError(error);
          setProducts([]);
        } else {
          setProducts(data);
          setError(null);
        }
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}
