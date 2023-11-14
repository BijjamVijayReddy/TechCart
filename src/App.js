import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './conatiners/Header';
import ProductListing from './conatiners/ProductListing';
import ProductDeatils from "./conatiners/ProductDeatils"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId"  component={ProductDeatils} />
        <Route>404 Not Found!</Route>
      </Switch>
    </Router>
  );
}

export default App;
