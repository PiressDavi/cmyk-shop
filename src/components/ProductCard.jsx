export default function ProductCard({ product }) {
  const price =
    typeof product.price === "number"
      ? product.price.toFixed(2)
      : "Sob consulta";

  const message = `Olá! Gostaria de informações sobre o produto abaixo:\n\n🖨️ Produto: ${product.name
    }\n📄 Descrição: ${product.description || "Não informada"
    }\n💰 Preço: ${price === "Sob consulta" ? price : `R$ ${price}`}`;

  const whatsappLink = `https://wa.me/5511947853999?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Solicitar informações sobre ${product.name} no WhatsApp`}
      className="block h-full"
    >
      <div
        className="
          bg-white
          rounded-2xl
          p-6
          shadow-lg
          hover:shadow-xl
          transition-all
          duration-300
          cursor-pointer
          flex
          flex-col
          items-center
          text-center
          h-[400px]
        "
      >
        {/* IMAGEM */}
        {product.image_url ? (
          <div
            className="w-full h-48 rounded-xl mb-4 p-[3px]"
            style={{
              background:
                "linear-gradient(90deg, #00AEEF, #EC008C, #FFF200)",
            }}
          >
            <img
              src={product.image_url}
              alt=""
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="w-full h-full object-cover rounded-lg bg-white"
            />
          </div>
        ) : (
          <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 mb-4">
            Sem imagem
          </div>
        )}

        {/* INFO */}
        <h3 className="text-gray-900 text-xl font-extrabold mb-2 tracking-wide">
          {product.name}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
          {product.description || "Descrição não informada."}
        </p>

        <div className="mt-auto">
          <p className="text-green-600 font-bold text-lg">
            {price === "Sob consulta" ? price : `R$ ${price}`}
          </p>
        </div>
      </div>
    </a>
  );
}
