import Address from "./Address";

export default interface Client {
  id: number;
  name: String;
  email: String;
  address: Address;
  telefone: number;
  birthDay: Date;
  cpf: number;
}