import { useHistory } from 'react-router-dom';

import '../styles/header.css';

export default function Header() {

  const history = useHistory();

  function handleButtonClientes() {
    history.push('/clients/management');
  }

  function handleButtonProdutos() {
    history.push('/products/management');
  }

  return (
    <div className="header">
      <h1>Gestão de Cliente e Produtos</h1>
      <div className="button-container">
        <button type="button" onClick={handleButtonClientes}>Clientes</button>
        <button type="button" onClick={handleButtonProdutos}>Produtos</button>
        <button type="button">Apagar Tudo</button>
      </div>
    </div >
  );
};