import Client from "../models/Client";
import { nanoid } from 'nanoid';

export default class ClientService {

  clientStorage = window.localStorage.get('clients');

  createClient(client: Client) {
    if (client === null)
      return;

    if (client.id === "")
      client.id = nanoid();

    if (this.clientStorage === null)
      window.localStorage.set('clients', JSON.stringify(client));
    else {
      this.clientStorage.push(JSON.stringify(client));
      window.localStorage.set('clients', localStorage);
    }
  }

  editClient(id: String, client: Client) {
    if (client === null || this.clientStorage === null)
      return

    this.deleteClient(id);
    this.createClient(client);

  }

  deleteAllClients() {
    if (this.clientStorage === null)
      return

    window.localStorage.removeItem('clients');
  }

  deleteClient(id: String) {
    if (id === null || this.clientStorage === null)
      return

    this.clientStorage.splice((this.clientStorage.findIndex((element: Client) => {
      element.id === id
    })));



  }

  listAllClients(): Storage | String {

    if (this.clientStorage === null)
      return "Não existe clientes"

    return this.clientStorage;
  }

  listClient(id: string): Client | String {

    let client: Client;

    if (id === null || this.clientStorage === null)
      return "Não existe clientes"

    client = this.clientStorage.findIndex((element: Client) => {
      element.id === id
    });
    return client;
  }


}