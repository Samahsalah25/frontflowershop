// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import About from "./Components/About";
import AddProduct from "./Components/Addproduct";
import EditProduct from "./Components/EditProduct";
import Home from "./Components/Homepage";
import Login from "./Components/Login";
import ProductList from "./Components/ProductList";
import Registor from "./Components/Registor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
function PrivateRoute({ element, ...rest }) {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/Login" />}
    />
  );
}
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Registor />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Products" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
