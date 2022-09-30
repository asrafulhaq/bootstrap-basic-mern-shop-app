import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import CreateProduct from "./pages/Product/CreateProduct";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import './App.css';
import { useEffect } from "react";
import axios from "axios";
import { getAllProduct } from "./redux/product/action";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    axios.get('http://localhost:5050/api/v1/product')
    .then(res => {
      dispatch(getAllProduct(res.data));
    })
    .catch(err => {
      console.log(err.message);
    });

  });

  return (
    <>

      <Routes>
        <Route path="/" element={ <Shop /> } />
        <Route path="/admin/product" element={ <Product /> } />
        <Route path="/admin/product/create" element={ <CreateProduct /> } />
      </Routes>

      

    </>
  );
}

export default App;
