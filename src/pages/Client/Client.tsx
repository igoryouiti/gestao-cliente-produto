
export default function Client() {
  return (
    <div className="client-container">
      <p>Client</p>
      <div className="client">
        <label>Nome: </label>
        <label>e-mail: </label>
        <label>Telefone: </label>
        <label>Data Nascimento: </label>
        <label>cpf: </label>
        <label>ID: </label>
      </div>
      <div className="address">
        <p>Endereço</p>
        <label>Rua: </label>
        <label>Número: </label>
        <label>Complemento: </label>
        <label>Bairro: </label>
        <label>Cidade: </label>
        <label>Estado: </label>
        <label>CEP: </label>
        <label>ID: </label>
      </div>
      <div>
        <button>Editar</button>
        <button>Deletar</button>
      </div>
    </div>
  )
}