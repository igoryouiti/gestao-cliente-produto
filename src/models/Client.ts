import Address from "./Address";

export default interface Client {
  id: string;
  name: string;
  email: string;
  telephone: number;
  birthday: string;
  cpf: number;
  address: Address;
}