
export default function Product() {
  return (
    <div className="product-container">
      <p>Produto</p>
      <div className="client">
        <label>Nome: </label>
        <label>Descrição: </label>
        <label>Imagem: </label>
        <label>Fornecedor: </label>
        <label>ID: </label>
      </div>
      <div>
        <button>Editar</button>
        <button>Deletar</button>
      </div>
    </div>
  )
}
