// src/pages/Home.jsx
import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-center mt-20 text-white">Carregando produtos...</p>;

  if (error) return <p className="text-center mt-20 text-red-500">Erro ao carregar produtos: {error.message}</p>;

  if (products.length === 0) return <p className="text-center mt-20 text-white">Nenhum produto encontrado.</p>;

  return (
    <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
