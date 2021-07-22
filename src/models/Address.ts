export default interface Address {
  id: number;
  street: string;
  number?: number | string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: number;
}