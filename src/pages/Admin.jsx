import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  // Buscar categorias do Supabase
  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) {
        console.error("Erro ao carregar categorias:", error.message);
      } else {
        setCategories(data);
      }
    }

    fetchCategories();
  }, []);

  // Inserir produto
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

    if (error) {
      alert("Erro ao cadastrar produto: " + error.message);
    } else {
      alert("Produto cadastrado com sucesso!");
      setName("");
      setPrice("");
      setDescription("");
      setImageUrl("");
      setCategoryId("");
    }
  }

  return (
    <div className="min-h-screen bg-k flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold text-c mb-8 tracking-wider">
        Painel de Administração
      </h1>

      <form
        onSubmit={handleAddProduct}
        className="bg-k rounded-2xl shadow-[0_0_25px_rgba(236,0,140,0.7)] p-8 w-full max-w-lg"
      >
        <div className="mb-6">
          <label className="block text-m font-semibold mb-2">Nome</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-m bg-white text-black placeholder:text-blue-300 focus:outline-none focus:border-c"
            placeholder="Nome do produto"
          />
        </div>

        <div className="mb-6">
          <label className="block text-m font-semibold mb-2">Preço (R$)</label>
          <input
            type="number"
            step="0.01"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-m bg-white text-black placeholder:text-blue-300 focus:outline-none focus:border-c"
            placeholder="Preço do produto"
          />
        </div>

        <div className="mb-6">
          <label className="block text-m font-semibold mb-2">Descrição</label>
          <textarea
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-m bg-white text-black placeholder:text-blue-300 focus:outline-none focus:border-c resize-none"
            placeholder="Descrição do produto"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-m font-semibold mb-2">
            URL da Imagem
          </label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-m bg-white text-black placeholder:text-blue-300 focus:outline-none focus:border-c"
            placeholder="https://exemplo.com/imagem.jpg"
          />
        </div>

        <div className="mb-8">
          <label className="block text-m font-semibold mb-2">
            Categoria
          </label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-m bg-white text-black focus:outline-none focus:border-c"
          >
            <option value="">Selecione uma categoria</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-c via-m to-y text-k font-extrabold rounded-2xl hover:from-m hover:via-y hover:to-c transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Cadastrando..." : "Cadastrar Produto"}
        </button>
      </form>
    </div>
  );
}
