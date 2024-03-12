import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddProduct = () => {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [Image, setImage] = useState(null);
  const [animateForm, setAnimateForm] = useState(false);
  const [createdBy, setCreatedBy] = useState(""); // Add state for createdBy

  useEffect(() => {
    setAnimateForm(true);
    const user = localStorage.getItem("userName");
    if (user) {
      setCreatedBy(user); // Set createdBy if user exists in localStorage
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!createdBy) {
        toast.error("Please login before adding a product");
        return;
      }

      const userName = localStorage.getItem("userName");

      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("Image", Image);
      formData.append("createdBy", userName);

      const response = await axios.post(
        "http://localhost:5000/admin/createproduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Product added successfully!");
      console.log("Product added:", response.data);
      navigate("/Products"),
        // Clear input fields after submission
        setProductName("");
      setPrice("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/concept-spring-shopping-season-sale_185193-108633.jpg?t=st=1709885836~exp=1709889436~hmac=2dab1763d046e2d3e00a191fef46765da0090c0c227b247cb04c2ffd12a3b22f&w=740')`,
        }}
      >
        <div
          className={`w-full max-w-md p-8 bg-white bg-opacity-60 rounded-lg shadow-lg ${
            animateForm ? "animate-form" : ""
          }`}
        >
          <h2 className="text-2xl font-bold text-pink-800 mb-4 text-center">
            Add New Flower Product
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                className="mt-1 block h-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                className="mt-1 block h-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="Image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <input
                type="file"
                id="Image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 w-full btn mt-2 border-none  btn-primary"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
