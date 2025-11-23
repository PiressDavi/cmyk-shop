import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { FaWhatsapp } from "react-icons/fa";

export default function Grafica() {
  const { products, loading, error } = useProducts();

  if (loading)
    return <p className="text-center mt-20 text-white">Carregando produtos...</p>;

  if (error)
    return (
      <p className="text-center mt-20 text-red-500">
        Erro ao carregar produtos: {error.message}
      </p>
    );

  const filtered = products.filter(
    (p) => p.category_id === "11111111-1111-1111-1111-111111111111"
  );

  if (filtered.length === 0)
    return <p className="text-center mt-20 text-white">Nenhum produto encontrado.</p>;

  const sortedProducts = [...filtered].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-white mt-10 mb-4">
        Catálogo de Gráfica
      </h1>

      <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-10">
        Escolha entre nossos produtos personalizados de gráfica.
      </p>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5511947853999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
}
