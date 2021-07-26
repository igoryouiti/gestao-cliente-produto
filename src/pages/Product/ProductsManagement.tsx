import { useHistory } from "react-router-dom";


export default function ProductsManagement() {
  const history = useHistory();

  function handleButtonCreateProduct() {
    history.push('/product/create')
  };

  function handleButtonListProducts() {
    history.push('/products')
  };

  return (
    <div>
      <h1>Cliente</h1>
      <div>
        <button type="button" onClick={handleButtonCreateProduct}>Cadastrar</button>
        <button type="button" onClick={handleButtonListProducts}>Listar</button>
      </div>
    </div>
  );
}