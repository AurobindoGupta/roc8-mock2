import ProductList from "./ProductList";
import Cart from "./Cart";
import {Route, BrowserRouter as Router,Link, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
   <Router>
     <nav style={{backgroundColor:"blue"}}>
    <Switch>
    <Route path='/cart' component={Cart}></Route>
     <div className="navbar">
      <img className="logo" src='flipkart.png' height="25" alt=""></img>
      <input className="search"placeholder="search"></input>
        <div className="nav-links">
          <ul>
            <li><button>Login</button></li>
            <li><button>More</button></li>
            <li><button><Link to="/cart">cart</Link></button></li>
          </ul>
        </div>
      </div>
        </Switch>
     </nav>
          <div>
            <ProductList/>
          </div>
    </Router> 
    </div>
  );
}

export default App;
