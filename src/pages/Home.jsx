import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Logo.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center text-white pt-16 gap-8">
        {/* Logo */}
        <img
          src={logo}
          alt="Gráfica Rápida JP"
          className="w-44 sm:w-52"
        />

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/grafica"
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-700 
            hover:from-blue-600 hover:to-blue-800 rounded-2xl text-xl font-bold 
            shadow-xl transition transform hover:scale-105 text-center"
          >
            Gráfica
          </Link>

          <Link
            to="/velas"
            className="px-10 py-4 bg-gradient-to-r from-pink-500 to-pink-700 
            hover:from-pink-600 hover:to-pink-800 rounded-2xl text-xl font-bold 
            shadow-xl transition transform hover:scale-105 text-center"
          >
            Velas
          </Link>

          <Link
            to="/fotografia"
            className="px-10 py-4 bg-gradient-to-r from-purple-500 to-purple-700 
            hover:from-purple-600 hover:to-purple-800 rounded-2xl text-xl font-bold 
            shadow-xl transition transform hover:scale-105 text-center"
          >
            Fotografia
          </Link>
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5511947853999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 
        text-white rounded-full p-4 shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
}
