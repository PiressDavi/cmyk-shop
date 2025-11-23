import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Logo.jpg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-5 p-10 text-white">
        {/* Logo centralizado */}
        <img
          src={logo}
          alt="Gráfica Rápida JP"
          className="w-48 sm:w-60 mx-auto"
        />

        {/* Título */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-center">
          Escolha uma categoria
        </h1>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/grafica"
            className="px-12 py-6 bg-gradient-to-r from-blue-500 to-blue-700 
            hover:from-blue-600 hover:to-blue-800 rounded-2xl text-2xl font-bold 
            shadow-xl transition transform hover:scale-105"
          >
            Gráfica
          </Link>

          <Link
            to="/velas"
            className="px-12 py-6 bg-gradient-to-r from-pink-500 to-pink-700 
            hover:from-pink-600 hover:to-pink-800 rounded-2xl text-2xl font-bold 
            shadow-xl transition transform hover:scale-105"
          >
            Velas
          </Link>

          <Link
            to="/fotografia"
            className="px-12 py-6 bg-gradient-to-r from-purple-500 to-purple-700 
            hover:from-purple-600 hover:to-purple-800 rounded-2xl text-2xl font-bold 
            shadow-xl transition transform hover:scale-105"
          >
            Fotografia
          </Link>
        </div>
      </div>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5511947853999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 
        text-white rounded-full p-4 shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
}
