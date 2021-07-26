import { useHistory } from 'react-router-dom';
import ClientService from '../services/ClientService';
import ProductService from '../services/ProductService';

import '../styles/header.css';

export default function Header() {

  const history = useHistory();
  const productService = new ProductService();
  const clientService = new ClientService();
  function handleButtonDeleteAll() {
    productService.deleteAllProducts();
    clientService.deleteAllClients();
    history.push('/');
  }

  function handleButtonClients() {
    history.push('/clients/management');
  }

  function handleButtonProducts() {
    history.push('/products/management');
  }

  return (
    <div className="header">
      <h1>Gestão de Cliente e Produtos</h1>
      <div className="button-container">
        <button type="button" onClick={handleButtonClients}>Clientes</button>
        <button type="button" onClick={handleButtonProducts}>Produtos</button>
        <button type="button" onClick={handleButtonDeleteAll}>Apagar Tudo</button>
      </div>
    </div >
  );
};