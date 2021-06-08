import './App.css';
import ProductForm from './components/ProductForm'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import {Router} from '@reach/router'


function App() {
  return (
    <div className="App">
      {/* <ProductForm/> */}
      <Router>
        <Products path="/"/>
        <ProductDetails path="/:id" />
      </Router>
    </div>
  );
}

export default App;
