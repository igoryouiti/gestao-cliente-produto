import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ClientService from "../../services/ClientService";
import Client from '../../models/Client';




export default function Clients() {

  const history = useHistory();
  const [clients, setClients] = useState([]);

  const service = new ClientService();


  useEffect(() => {
    let clients = service.listAllClients();

    if (clients instanceof String)
      history.push('/');
    else {
      setClients(clients);
    }
  }, []);

  function handleApagar(id: string) {
    service.deleteClient(id);
    history.push('/');

  }

  function handleEditar(id: string) {
    history.push(`/client/${id}/edit`)
  }

  return (
    <div>
      <h1>Lista Clientes</h1>

      {clients?.map((client: Client) => {
        return (
          <li key={client.id}>
            <h3>nome: {client.name}</h3>
            <div>id: {client.id}</div>
            <div>email: {client.email}</div>
            <div>telefone: {client.telephone}</div>
            <div>nascimento: {client.birthday}</div>
            <div>cpf: {client.cpf}</div>
            <h3>Endereço</h3>
            <div>id: {client.address.id}</div>
            <div>rua: {client.address.street}</div>
            <div>número: {client.address.number}</div>
            <div>complemento: {client.address.complement}</div>
            <div>bairro: {client.address.neighborhood}</div>
            <div>cidade: {client.address.city}</div>
            <div>estado: {client.address.state}</div>
            <div>cep: {client.address.cep}</div>
            <div>
              <button onClick={() => handleEditar(client.id)}>Editar</button>
              <button onClick={() => handleApagar(client.id)}>Apagar</button>
            </div>
          </li>
        )
      })}
    </div>
  )
};