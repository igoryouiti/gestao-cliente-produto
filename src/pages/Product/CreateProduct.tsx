import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Form/Input';
import Product from '../../models/Product';
import ProductService from '../../services/ProductService';

export default function CreateProduct() {
  const history = useHistory();

  const handleSubmit: SubmitHandler<Product> = data => {
    const product: Product = data;

    const service = new ProductService();

    service.createProduct(product);

    history.push('/products');
  }

  return (
    <div>
      Cadastro Produto
      <Form onSubmit={handleSubmit}>
        <label>Nome: </label>
        <Input name="name" />
        <label>Descrição: </label>
        <Input name="description" />
        <label>Fornecedor: </label>
        <Input name="provider" />
        <button type="submit">Cadastrar</button>
      </Form>
    </div>
  );
}