import { useRef } from 'react'
import { SubmitHandler, FormHandles, Scope } from '@unform/core'
import { Form } from '@unform/web';
import Client from '../../models/Client';
import Input from '../../components/Form/Input';



export default function CreateClient() {

  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<Client> = (data) => {
    console.log(data)
    const client: Client = data;

    console.log(client)
  }

  return (
    <div>
      Cadastro Cliente
      <Form ref={formRef} onSubmit={handleSubmit}>
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
            <Input name="street" />
            <label>Número</label>
            <Input name="number" />
            <label>Complemento</label>
            <Input name="complement" />
            <label>Bairro</label>
            <Input name="neighborhood" />
            <label>Cidade</label>
            <Input name="city" />
            <label>Estado</label>
            <Input name="state" />
            <label>CEP</label>
            <Input name="cep" />
          </div>
        </Scope>
        <button type="submit" >Cadastrar</button>
      </Form>
    </div>
  );
}