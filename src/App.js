import ProductList from "./ProductList";
import Cart from "./Cart";
import {Route, BrowserRouter as Router,Link, Switch} from "react-router-dom";
import Dashboard from './Dashboard'


function App() {
  return (
    <div className="App">
   <Router>
  
     <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route  path="/cart" component={Cart} ></Route>
    </Switch>
    </Router> 
          
    
    </div>
  );
}

export default App;
