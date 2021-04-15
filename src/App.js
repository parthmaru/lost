import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomerAccessPage from "./components/CustomerAccessPage/index";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/account" component={CustomerAccessPage} exact />
        <Route path="/products" component={ProductList} exact />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
