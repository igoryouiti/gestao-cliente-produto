import React, { useRef } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import Client from '../../models/Client';
import Input from '../../components/Form/Input';

export default function EditClient() {
  const formRef = useRef<FormHandles>(null)
  const initialData: Client = {
    id: 1,
    name: "igor",
    cpf: 12345678977,
    email: "igor@aua.com",
    telephone: 12345678,
    birthday: "1991-09-04",
    address: {
      id: 1,
      cep: "08775550",
      city: "Aua city",
      complement: "bloco D",
      neighborhood: "Rodeio",
      state: "São Paulo",
      street: "Rua 13",
      number: 12
    }
  }



  const handleSubmit: SubmitHandler<Client> = data => {
    console.log(data)
  }

  return (
    <div>
      Editar Cliente - { }
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <div className="client-form">
          <label>Nome</label>
          <Input name="name" />
          <label>E-mail</label>
          <Input type="email" name="email" />
          <label>Telefone</label>
          <Input name="telephone" />
          <label>Data Nascimento</label>
          <Input type="date" name="birthday" />
          <label>CPF</label>
          <Input name="cpf" />
        </div>
        <div className="client-form">
          <label>Rua</label>
          <Input name="address.street" />
          <label>Número</label>
          <Input name="address.number" />
          <label>Complemento</label>
          <Input name="address.complement" />
          <label>Bairro</label>
          <Input name="address.neighborhood" />
          <label>Cidade</label>
          <Input name="address.city" />
          <label>Estado</label>
          <Input name="address.state" />
          <label>CEP</label>
          <Input name="address.cep" />
        </div>
        <button type="submit" >Cadastrar</button>
      </Form>
    </div>
  );
}