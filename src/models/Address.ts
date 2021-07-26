export default interface Address {
  id: string;
  street: string;
  number?: number | string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
}