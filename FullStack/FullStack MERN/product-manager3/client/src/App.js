import './App.css';
import ProductForm from './components/ProductForm'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import {Router} from '@reach/router'
import EditForm from './components/EditForm';
import MyContext from './MyContext'
import { useState } from 'react';

function App() {
  const [newProduct, setNewProduct] = useState()
  const [editProduct, setEditProduct] = useState()

  return (
    <div className="App">
      {/* <ProductForm/> */}
      <MyContext.Provider value={[newProduct, setNewProduct, editProduct, setEditProduct]}>
        <Router>
          <Products path="/"/>
          <ProductDetails path="/:id" />
          <EditForm path="/:id/edit" />
        </Router>
      </MyContext.Provider>

    </div>
  );
}

export default App;
