import Address from "./Address";

export default interface Client {
  id: number;
  name: String;
  email: String;
  telephone: number;
  birthday: String;
  cpf: number;
  address: Address;
}