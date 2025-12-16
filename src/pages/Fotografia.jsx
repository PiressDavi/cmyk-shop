import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Foto Polaroid",
    description: "QRCode e WhatsApp direto para a sua mão",
    file: "video1.mp4",
  },
  // {
  //   id: 2,
  //   title: "Evento Corporativo",
  //   description: "Cobertura completa de eventos empresariais.",
  //   file: "video2.mp4",
  // },
];

export default function Fotografia() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-white">
        Catálogo de Fotografia
      </h1>

      <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto">
        Assista aos vídeos dos nossos serviços.
      </p>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-black rounded-2xl shadow-xl overflow-hidden w-[240px] max-w-full"
          >
            {/* VÍDEO 9:16 */}
            <div className="relative w-full aspect-[9/16] bg-black">
              <video
                src={`/videos/${video.file}`}
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* INFO */}
            <div className="p-3 bg-white">
              <h2 className="text-base font-bold">{video.title}</h2>
              <p className="text-sm text-gray-600">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </main>

      {/* WhatsApp */}
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
