export default interface Address {
  id: number;
  street: string;
  number?: number | string;
  complement: string;
  cep: number;
}