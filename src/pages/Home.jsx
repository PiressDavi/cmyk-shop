import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const { products, loading, error } = useProducts();

  if (loading)
    return <p className="text-center mt-20 text-white">Carregando produtos...</p>;

  if (error)
    return (
      <p className="text-center mt-20 text-red-500">
        Erro ao carregar produtos: {error.message}
      </p>
    );

  if (products.length === 0)
    return <p className="text-center mt-20 text-white">Nenhum produto encontrado.</p>;

  return (
    <>
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5511991941575"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
}
