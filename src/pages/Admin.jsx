import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";
import {
  getCategories,
  seedCategories,
  addProduct,
} from "../services/localDB";

export default function Admin() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  /* ---------- LOAD CATEGORIES ---------- */
  useEffect(() => {
    seedCategories(); // cria categorias iniciais se não existirem
    setCategories(getCategories());
  }, []);

  /* ---------- ADD PRODUCT ---------- */
  function handleAddProduct(e) {
    e.preventDefault();

    if (!name || !price || !categoryId) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);

    const newProduct = {
      id: crypto.randomUUID(),
      name,
      price: Number(price),
      description,
      image_url: imageUrl,
      category_id: categoryId,
      created_at: new Date().toISOString(),
    };

    addProduct(newProduct);

    setLoading(false);
    alert("Produto cadastrado com sucesso!");

    setName("");
    setPrice("");
    setDescription("");
    setImageUrl("");
    setCategoryId("");
  }

  /* ---------- LOGOUT ---------- */
  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      <div className="w-full max-w-2xl flex justify-between items-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-wide">
          Painel de Administração
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      <form
        onSubmit={handleAddProduct}
        className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-2xl space-y-6"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-pink-400"
          placeholder="Nome do produto"
          required
        />

        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-pink-400"
          placeholder="Preço"
          required
        />

        <textarea
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-pink-400 resize-none"
          placeholder="Descrição"
        />

        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-pink-400"
          placeholder="URL da imagem"
        />

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 focus:ring-4 focus:ring-pink-400"
          required
        >
          <option value="">Selecione a categoria</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 text-white font-extrabold rounded-3xl hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Cadastrando..." : "Cadastrar Produto"}
        </button>
      </form>
    </div>
  );
}
