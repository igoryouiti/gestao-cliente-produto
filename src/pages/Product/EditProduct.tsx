import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import ImageInput from '../../components/Form/ImageInput';
import Input from '../../components/Form/Input';
import Product from '../../models/Product';

export default function EditProduct() {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<Product> = data => {
    console.log(data)
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
        <label>Imagem: </label>
        <ImageInput name="imageAddress" />
        <button>Cadastrar</button>
      </Form>
    </div>
  );
}
