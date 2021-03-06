import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClientManagement from './pages/Client/ClientManagement';
import ProductsManagement from './pages/Product/ProductsManagement';
import Clients from './pages/Client/Clients';
import ListProducts from './pages/Product/ListProducts';
import EditProduct from './pages/Product/EditProduct';
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
        <Route path="/product/create" component={CreateProduct} />
        <Route path="/product/:id/edit" component={EditProduct} />
        <Route path="/clients" component={Clients} />
        <Route path="/client/create" component={CreateClient} />
        <Route path="/client/:id/edit" component={EditClient} />
      </Switch>
    </BrowserRouter>
  );
}