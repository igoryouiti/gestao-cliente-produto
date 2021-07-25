import Address from "./Address";

export default interface Client {
  id: String;
  name: String;
  email: String;
  telephone: number;
  birthday: String;
  cpf: number;
  address: Address;
}