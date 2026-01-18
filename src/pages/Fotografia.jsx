import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { fotografiaVideos } from "../data";

export default function Fotografia() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      {/* TEXTO */}
      <p className="text-lg text-center max-w-2xl mx-auto mt-8 text-white">
        Confira alguns registros dos nossos serviços.
      </p>

      {/* GRID */}
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {fotografiaVideos.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="
              bg-white
              rounded-2xl
              shadow-lg
              overflow-hidden
              w-[240px]
              cursor-pointer
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            {/* MÍDIA */}
            <div className="relative w-full aspect-[9/16] overflow-hidden bg-gray-100">
              {/* BLUR (somente imagem) */}
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
                />
              )}

              {/* CONTEÚDO */}
              {item.type === "video" ? (
                <video
                  src={`/videos/${item.file}`}
                  muted
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                  className="relative z-10 w-full h-full object-contain bg-black"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="relative z-10 w-full h-full object-contain"
                />
              )}
            </div>

            {/* INFO */}
            <div className="p-3 text-center">
              <h2 className="text-base font-bold text-gray-900">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </main>

      {/* AVISO */}
      <p className="text-xs text-gray-500 text-center mt-8 italic">
        *Valores sujeitos a alteração. Preço final confirmado apenas via WhatsApp.
      </p>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5511947853999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="
              relative
              max-w-[90vw]
              max-h-[90vh]
              bg-black
              rounded-xl
              overflow-hidden
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* BOTÃO FECHAR */}
            <button
              onClick={() => setSelectedItem(null)}
              className="
                absolute
                top-3
                right-3
                z-50
                bg-black/70
                text-white
                rounded-full
                p-2
                hover:bg-red-600
                transition
              "
            >
              <FaTimes />
            </button>

            {/* CONTEÚDO */}
            {selectedItem.type === "video" ? (
              <video
                src={`/videos/${selectedItem.file}`}
                controls
                autoPlay
                className="max-w-[90vw] max-h-[90vh] object-contain"
              />
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-[90vw] max-h-[90vh] object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
