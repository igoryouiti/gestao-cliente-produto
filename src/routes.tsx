import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClientManagement from './pages/Client/ClientManagement';
import ProductsManagement from './pages/Product/ProductsManagement';
import ListClients from './pages/Client/ListClients';
import ListProducts from './pages/Product/ListProducts';
import Product from './pages/Product/Product';
import EditProduct from './pages/Product/EditProduct';
import Client from './pages/Client/Client';
import EditClient from './pages/Client/EditClient';
import Header from './components/Header';
import CreateClient from './pages/Client/CreateClient';
import CreateProduct from './pages/Product/CreateProduct';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={ClientManagement} />
        <Route path="/clients/management" component={ClientManagement} />
        <Route path="/products/management" component={ProductsManagement} />
        <Route path="/products" component={ListProducts} />
        <Route path="/product" exact component={Product} />
        <Route path="/product/create" component={CreateProduct} />
        <Route path="/product/edit" component={EditProduct} />
        <Route path="/clients" component={ListClients} />
        <Route path="/client" exact component={Client} />
        <Route path="/client/create" component={CreateClient} />
        <Route path="/client/edit" component={EditClient} />
      </Switch>
    </BrowserRouter>
  );
}