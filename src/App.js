import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Product from './Product';
import Login from "./Login";
import Register from './Register'
import Logout from './Logout'
import Catalog from './Catalog'
import Contacts from './Contacts'
import Details from './Details'
import Create from './Create'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path='/create'>
            <Create/>
          </Route>

<Route path='/login'>
  <Login/>
</Route>

<Route path='/register'>
  <Register/>
</Route>

<Route path='/logout'>
  <Logout/>
</Route>

<Route path='/catalog'>
  <Catalog/>
</Route>

<Route path='/contacts'>
  <Contacts/>
</Route>

<Route path='/details'>
  <Details/>
</Route>

<Route path='/checkout'>
<Header/>
<Checkout/>

          </Route>
          <Route path='/'>
          <Header/>
      <Home/>
          </Route>
          <Route path='/product'>
            <Product/>
          </Route>

         
        </Switch>
      </Router>
      
      
    </div>

  );
}

export default App;
