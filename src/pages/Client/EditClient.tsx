import { SubmitHandler, Scope } from '@unform/core'
import { Form } from '@unform/web';
import Client from '../../models/Client';
import Input from '../../components/Form/Input';
import { useHistory, useParams } from 'react-router-dom';
import ClientService from '../../services/ClientService';

export default function EditClient() {
  const history = useHistory();

  type Id = {
    id: string;
  };

  const { id } = useParams<Id>();

  const service = new ClientService();
  const client: Record<string, any> = service.listClient(id);

  const addressId = client.address.id;
  const initialData: Record<string, any> = client;

  const handleSubmit: SubmitHandler<Client> = data => {
    const client: Client = data;

    client.id = id
    client.address.id = addressId;
    service.editClient(id, client);

    history.push('/clients/management');
  }

  return (
    <div>
      Editar Cliente - { }
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <div className="client-form">
          <label>Nome</label>
          <Input required={true} name="name" />
          <label>E-mail</label>
          <Input required={true} type="email" name="email" />
          <label>Telefone</label>
          <Input required={true} name="telephone" />
          <label>Data Nascimento</label>
          <Input required={true} type="date" name="birthday" />
          <label>CPF</label>
          <Input required={true} name="cpf" />
        </div>
        <Scope path="address">
          <div className="client-form">
            <label>Rua</label>
            <Input required={true} name="address.street" />
            <label>Número</label>
            <Input required={true} name="address.number" />
            <label>Complemento</label>
            <Input required={true} name="address.complement" />
            <label>Bairro</label>
            <Input required={true} name="address.neighborhood" />
            <label>Cidade</label>
            <Input required={true} name="address.city" />
            <label>Estado</label>
            <Input required={true} name="address.state" />
            <label>CEP</label>
            <Input required={true} name="address.cep" />
          </div>
        </Scope>

        <button type="submit" >Editar</button>
      </Form>
    </div>
  );
}