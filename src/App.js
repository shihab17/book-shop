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
import "bootstrap/js/src/collapse.js";
import Admin from './Components/Admin/Admin';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ImageAvatars() {
  const classes = useStyles();
}

export const LoggedInContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <LoggedInContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <h2>Online Book Store</h2>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <Link className="nav-link active" to="/">Home</Link>
                <Link className="nav-link active" to="/orders">Orders</Link>
                <Link className="nav-link active" to="/admin">Admin</Link>
                {
                  loggedInUser.email ? <Link className="nav-link active" to="/cart"> <ShoppingCartIcon></ShoppingCartIcon> Checkout</Link> :
                    ''
                }
                <Link className="nav-link active" to="/deals">Deals</Link>
                {
                  !loggedInUser.email ? <Link className="nav-link active bg-info text-white rounded" to="/login">Login</Link> :
                    <Avatar alt="" src={loggedInUser.photoURL} />
                }

              </div>
            </div>
          </div>
          
        </nav>
       
       
        <div>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/deals">

            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute>

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </LoggedInContext.Provider>
  );
}

export default App;
