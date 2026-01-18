import React from "react";
import ProductCard from "../components/ProductCard";
import { FaWhatsapp } from "react-icons/fa";
import { graficaProducts } from "../data/graficaProducts";

export default function Grafica() {
  const sortedProducts = [...graficaProducts].sort(
    (a, b) => b.id - a.id
  );

  return (
    <>
      <p className="text-lg text-center max-w-2xl mx-auto mt-8">
        Escolha entre nossos produtos personalizados de gráfica.
      </p>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>

      <p className="text-xs text-gray-500 text-center mt-8 italic">
        *Valores sujeitos a alteração. Preço final confirmado apenas via WhatsApp.
      </p>

      <a
        href="https://wa.me/5511947853999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
}
