export default function ProductCard({ product }) {
  // Criar a mensagem formatada
  const message = `Gostaria de informações sobre o seguinte produto:\n\nNome: ${product.name}\nDescrição: ${product.description}\nPreço: R$ ${product.price.toFixed(2)}`;

  // Montar o link do WhatsApp (substitua o número abaixo pelo seu)
  const whatsappLink = `https://wa.me/5511947853999?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className="
          bg-k
          rounded-2xl
          p-6
          shadow-[0_0_15px_rgba(0,174,239,0.7)]
          hover:shadow-[0_0_30px_rgba(236,0,140,0.9)]
          transition-shadow
          duration-500
          cursor-pointer
          flex
          flex-col
          items-center
          text-center
          h-[400px]  /* altura fixa opcional */
        "
      >
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl mb-4 border-4 border-gradient-to-r from-c via-m to-y"
            style={{
              borderImageSlice: 1,
              borderImageSource:
                'linear-gradient(90deg, #00AEEF, #EC008C, #FFF200)',
            }}
          />
        ) : (
          <div className="w-full h-48 bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 mb-4">
            Sem imagem
          </div>
        )}
        <h3 className="text-c text-xl font-extrabold mb-2 tracking-wide">
          {product.name}
        </h3>
        <p className="text-gray mb-4 text-sm leading-relaxed line-clamp-3">
          {product.description}
        </p>
        <p className="text-blue-400 font-bold text-lg">
          {`R$ ${product.price.toFixed(2)}`}
        </p>
      </div>
    </a>
  );
}
