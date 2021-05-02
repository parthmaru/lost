import "./App.css";
import Home from "./components/Customer/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/Customer/ProductList/ProductList";
import Order from "./components/Customer/Order/Order";
import VendorHome from "./components/Vendor/VendorHome/VendorHome";
import UserAccount from "./components/Customer/UserAccount/UserAccount";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/account" component={UserAccount} exact />
        <Route path="/products" component={ProductList} exact />
        <Route path="/order" component={Order} exact />
        <Route path="/vendor" component={VendorHome} exact />
      </Switch>
    </Router>
  );
}

export default App;
