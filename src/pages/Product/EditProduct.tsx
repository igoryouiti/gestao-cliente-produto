import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory, useParams } from 'react-router-dom';
import Input from '../../components/Form/Input';
import Product from '../../models/Product';
import ProductService from '../../services/ProductService';

export default function EditProduct() {
  const history = useHistory();

  type Id = {
    id: string;
  };

  const { id } = useParams<Id>();

  const service = new ProductService();
  const product: Record<string, any> = service.listProduct(id);

  console.log(product);

  const initialData: Record<string, any> = product;

  const handleSubmit: SubmitHandler<Product> = data => {
    const product: Product = data;

    product.id = id

    service.editProduct(id, product);

    history.push('/products/management');
  }

  return (
    <div>
      Cadastro Produto
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <label>Nome: </label>
        <Input name="name" />
        <label>Descrição: </label>
        <Input name="description" />
        <label>Fornecedor: </label>
        <Input name="provider" />
        <button>Editar</button>
      </Form>
    </div>
  );
}
