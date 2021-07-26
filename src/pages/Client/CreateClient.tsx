import { useRef } from 'react'
import { SubmitHandler, FormHandles, Scope } from '@unform/core'
import { Form } from '@unform/web';
import Client from '../../models/Client';
import Input from '../../components/Form/Input';
import ClientService from '../../services/ClientService';
import { useHistory } from 'react-router-dom';



export default function CreateClient() {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<Client> = (data) => {
    const client: Client = data;

    const service = new ClientService();

    service.createClient(client);

    history.push('/clients');

  }

  return (
    <div>
      Cadastro Cliente
      <Form ref={formRef} onSubmit={handleSubmit}>
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
            <Input required={true} name="street" />
            <label>Número</label>
            <Input name="number" />
            <label>Complemento</label>
            <Input required={true} name="complement" />
            <label>Bairro</label>
            <Input required={true} name="neighborhood" />
            <label>Cidade</label>
            <Input required={true} name="city" />
            <label>Estado</label>
            <Input required={true} name="state" />
            <label>CEP</label>
            <Input required={true} name="cep" />
          </div>
        </Scope>
        <button type="submit" >Cadastrar</button>
      </Form>
    </div>
  );
}