import Product from "../models/Product";
import { nanoid } from 'nanoid';

export default class ProductService {

  productStorage = window.localStorage.getItem('products')

  createProduct(product: Product) {
    if (product === null)
      return;

    console.log(product.id)

    if (!product.id)
      product.id = nanoid();

    let storage = [];

    if (this.productStorage === null) {
      storage.push(product);
      window.localStorage.setItem('products', JSON.stringify(storage));

    } else {
      let parsedProductStorage = JSON.parse(this.productStorage)
      storage.push(product);
      parsedProductStorage.map((e: Product) => {
        return storage.push(e);
      });
      window.localStorage.setItem('products', JSON.stringify(storage));
    }
  }

  editProduct(id: string, product: Product) {
    if (product === null || this.productStorage === null)
      return

    this.deleteProduct(id);
    this.createProduct(product);

  }

  deleteAllProducts() {
    if (this.productStorage === null)
      return

    window.localStorage.removeItem('products');
  }

  deleteProduct(id: string) {
    if (id === null || this.productStorage === null)
      return

    let parsedProductStorage = JSON.parse(this.productStorage)
    let storage: Array<Product> = [];
    parsedProductStorage.map((e: Product) => {
      return storage.push(e);
    });

    let index: number = storage.findIndex((element: Product) => {
      return element.id === id
    })

    if (index > -1)
      storage.splice(index, 1);

    window.localStorage.setItem('products', JSON.stringify(storage));
  }

  listAllProducts(): [] | String {

    if (this.productStorage === null)
      return "Não existe produtos"

    return JSON.parse(this.productStorage);
  }

  listProduct(id: string): Record<string, any> {

    if (id === null || this.productStorage === null)
      return ({ message: "error" })

    let parsedProductStorage = JSON.parse(this.productStorage)
    let storage: Array<Product> = [];
    parsedProductStorage.map((e: Product) => {
      return storage.push(e);
    });

    let product: Product | undefined;

    product = storage.find((element: Product) => {
      return element.id === id
    });

    if (product === undefined)
      return { message: "não existe este produto" }

    console.log("Product no service: " + product)

    return product;
  }


}