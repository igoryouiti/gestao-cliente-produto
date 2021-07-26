import React, { useEffect, useRef, useState } from 'react'
import { SubmitHandler, FormHandles, Scope } from '@unform/core'
import { Form } from '@unform/web';
import Client from '../../models/Client';
import Input from '../../components/Form/Input';
import { useHistory, useParams } from 'react-router-dom';
import ClientService from '../../services/ClientService';

export default function EditClient() {
  const formRef = useRef<FormHandles>(null)
  const history = useHistory();
  const [clients, setClients] = useState<Client>();

  type Id = {
    id: string;
  };

  const { id } = useParams<Id>();

  const service = new ClientService();
  const client: Record<string, any> = service.listClient(id);

  console.log(client);

  const initialData: Record<string, any> = client;

  const handleSubmit: SubmitHandler<Client> = data => {
    const client: Client = data;

    service.editClient(id, client);

    history.push('/clients');
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
        <Scope path="address">
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
        </Scope>

        <button type="submit" >Cadastrar</button>
      </Form>
    </div>
  );
}