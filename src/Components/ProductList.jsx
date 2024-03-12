// ProductList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [animateForm, setAnimateForm] = useState(false);

  useEffect(() => {
    setAnimateForm(true);
    const user = localStorage.getItem("userName");
    if (user) {
      setUserName(user);
    }
  }, []);

  const [products, setProducts] = useState([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    axios
      .get("https://backendflowershop.onrender.com/admin/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleDelete = (productId, productName, productImage) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${productName}?`
    );

    if (confirmDelete) {
      // If user confirms deletion, send request to delete product
      axios
        .delete(
          `https://backendflowershop.onrender.com/admin/deleteProducts/${productId}`
        )
        .then((response) => {
          console.log("Product deleted:", response.data);
          // Update products state after deletion
          setProducts(products.filter((product) => product._id !== productId));
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className={`p-4 bg-pink-200 `}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-pink-800">Flower Products</h2>
          <Link to={"/addproduct"}>
            {" "}
            <button
              className={
                "bg-pink-500 text-white px-4 py-2 hover:bg-pink-600  btn mt-2 border-none  btn-primary  rounded-md "
              }
            >
              <FontAwesomeIcon icon={faPlus} /> Add Product
            </button>{" "}
          </Link>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  cursor-pointer ">
          {products.map((product) => (
            <li
              key={product.id}
              className={`bg-white shadow-lg rounded-lg ${
                animateForm ? "animate-form" : ""
              }`}
            >
              <div className="p-4">
                <img
                  className="w-full h-40 object-cover object-center mb-4 rounded-md  hover:scale-105 transition-transform duration-300 "
                  src={`https://backendflowershop.onrender.com/${product.Image}`}
                  // src="https://img.freepik.com/free-photo/making-bouquets_23-2148013625.jpg?t=st=1709849844~exp=1709853444~hmac=99bed0c639c257618e82db1c8cf4afe77515f4193873eef18865bbb376544626&w=826"
                  alt={product.productName}
                />
                <h2 className="text-lg font-bold mb-2 text-pink-800">
                  {product.productName}
                </h2>
                <p className="text-lg font-bold mb-2">
                  Created By:{" "}
                  {product.createdBy ? (
                    <span
                      className={
                        product.createdBy === userName
                          ? "text-green-800"
                          : "text-pink-800"
                      }
                    >
                      {product.createdBy}
                    </span>
                  ) : (
                    <span className="text-pink-800">Unknown</span>
                  )}
                </p>
                {/* <p className="text-gray-600 mb-4">{product.price}</p> */}
                <p className="text-gray-600 mb-4 flex justify-between items-center">
                  <span>{product.description}</span>
                  <span className="text-pink-800 font-bold">
                    {product.price}
                  </span>
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    {product.createdBy === userName && (
                      <div className="flex justify-between items-center">
                        <div>
                          <Link to={`/edit/${product._id}`}>
                            <FontAwesomeIcon
                              icon={faEdit}
                              className="text-blue-500 cursor-pointer hover:text-blue-600"
                            />
                          </Link>
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="ml-4 text-red-500 cursor-pointer hover:text-red-600"
                            onClick={() =>
                              handleDelete(
                                product._id,
                                product.productName,
                                product.Image
                              )
                            }
                          />
                        </div>
                      </div>
                    )}
                    {/* <Link to={`/edit/${product._id}`}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="text-blue-500 cursor-pointer hover:text-blue-600"
                      />
                    </Link>
                
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="ml-4 text-red-500 cursor-pointer hover:text-red-600"
                      onClick={() =>
                        handleDelete(
                          product._id,
                          product.productName,
                          product.Image
                        )
                      }
                    />{" "} */}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
