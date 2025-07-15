import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Admin() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) console.error("Erro ao carregar categorias:", error.message);
      else setCategories(data);
    }
    fetchCategories();
  }, []);

  async function handleAddProduct(e) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("products").insert([
      {
        name,
        price: parseFloat(price),
        description,
        image_url: imageUrl,
        category_id: categoryId || null,
      },
    ]);
    setLoading(false);

    if (error) alert("Erro ao cadastrar produto: " + error.message);
    else {
      alert("Produto cadastrado com sucesso!");
      setName("");
      setPrice("");
      setDescription("");
      setImageUrl("");
      setCategoryId("");
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    alert("Sessão encerrada!");
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
          className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </div>

      <form
        onSubmit={handleAddProduct}
        className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-2xl space-y-6"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:border-pink-500 transition"
          placeholder="Nome do produto"
          required
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:border-pink-500 transition"
          placeholder="Preço"
          required
          step="0.01"
        />

        <textarea
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:border-pink-500 transition resize-none"
          placeholder="Descrição"
        ></textarea>

        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:border-pink-500 transition"
          placeholder="URL da imagem"
        />

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:border-pink-500 transition"
        >
          <option value="">Selecione uma categoria</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 text-white font-extrabold rounded-3xl shadow-lg hover:from-pink-600 hover:via-red-600 hover:to-pink-700 disabled:opacity-60 disabled:cursor-not-allowed transition duration-300"
        >
          {loading ? "Cadastrando..." : "Cadastrar Produto"}
        </button>
      </form>
    </div>
  );
}
