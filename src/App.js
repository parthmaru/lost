import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomerAccessPage from "./components/CustomerAccessPage/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/account" component={CustomerAccessPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
