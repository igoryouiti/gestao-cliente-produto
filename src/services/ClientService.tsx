import Client from "../models/Client";
import { nanoid } from 'nanoid';

export default class ClientService {

  clientStorage = window.localStorage.getItem('clients')

  createClient(client: Client) {
    if (client === null)
      return;

    if (!client.id)
      client.id = nanoid();

    if (!client.address.id)
      client.address.id = nanoid();

    let storage = [];

    if (this.clientStorage === null) {
      storage.push(client);
      window.localStorage.setItem('clients', JSON.stringify(storage));

    } else {
      let parsedClientStorage = JSON.parse(this.clientStorage)
      storage.push(client);
      parsedClientStorage.map((e: Client) => {
        return storage.push(e);
      });
      window.localStorage.setItem('clients', JSON.stringify(storage));
    }
  }

  editClient(id: string, client: Client) {
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

  deleteClient(id: string) {
    if (id === null || this.clientStorage === null)
      return

    let parsedClientStorage = JSON.parse(this.clientStorage)
    let storage: Array<Client> = [];
    parsedClientStorage.map((e: Client) => {
      return storage.push(e);
    });

    let index: number = storage.findIndex((element: Client) => {
      return element.id === id
    })

    if (index > -1)
      storage.splice(index, 1);

    window.localStorage.setItem('clients', JSON.stringify(storage));
  }

  listAllClients(): [] | String {

    if (this.clientStorage === null)
      return "Não existe clientes"

    return JSON.parse(this.clientStorage);
  }

  listClient(id: string): Record<string, any> {

    if (id === null || this.clientStorage === null)
      return ({ message: "error" })

    let parsedClientStorage = JSON.parse(this.clientStorage)
    let storage: Array<Client> = [];
    parsedClientStorage.map((e: Client) => {
      return storage.push(e);
    });

    let client: Client | undefined;

    client = storage.find((element: Client) => {
      return element.id === id
    });

    if (client === undefined)
      return { message: "não existe este cliente" }

    console.log("Client no service: " + client)

    return client;
  }


}