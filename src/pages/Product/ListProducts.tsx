import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Product from "../../models/Product";
import ProductService from "../../services/ProductService";


export default function ListProducts() {

  const history = useHistory();
  const [products, setProducts] = useState([]);

  const service = new ProductService();


  useEffect(() => {
    let products = service.listAllProducts();

    if (products instanceof String)
      history.push('/');
    else {
      setProducts(products);
    }
  }, []);

  function handleApagar(id: string) {
    service.deleteProduct(id);
    history.push('/products/management');

  }

  function handleEditar(id: string) {
    history.push(`/product/${id}/edit`)
  }
  return (
    <div>
      <h1>ListProduct</h1>
      {products?.map((product: Product) => {
        return (
          <li key={product.id}>
            <h3>nome: {product.name}</h3>
            <div>id: {product.id}</div>
            <div>descrição: {product.description}</div>
            <div>fornecedor: {product.provider}</div>
            <div>
              <button onClick={() => handleEditar(product.id)}>Editar</button>
              <button onClick={() => handleApagar(product.id)}>Apagar</button>
            </div>
          </li>
        )
      })}
    </div>
  )
}
