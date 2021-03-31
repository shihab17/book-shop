import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Components/Admin/Admin';
import Cart from './Components/Cart/Cart';
function App() {
  return (
    <div className="">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/deals">Deals</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/orders">

            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/deals">

            </Route>
            <Route path="/login">

            </Route>
            <Route path="/cart/:bookId">
              <Cart></Cart>
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
