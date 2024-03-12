import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
const EditProduct = () => {
  const [animateForm, setAnimateForm] = useState(false);

  useEffect(() => {
    setAnimateForm(true);
  }, []);
  const { id } = useParams();
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    description: "",
    Image: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch product details from backend API
    axios
      .get(`http://localhost:5000/admin/getproductbyid/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit now ");
    try {
      // Send PUT or PATCH request to update product details
      const formData = new FormData();
      formData.append("productName", product.productName);
      formData.append("price", product.price);
      formData.append("description", product.description);
      formData.append("Image", product.Image);
      await axios.patch(
        `http://localhost:5000/admin/updataproduct/${id}`,
        formData
      );

      console.log("Product eddited:");
      // Redirect or display success message
      toast.success("Edit product successful!");
      navigate("/products");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Edit product failed!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, Image: e.target.files[0] });
  };

  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5414011/pexels-photo-5414011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div
          className={`w-full max-w-md p-8 bg-white bg-opacity-60 rounded-lg shadow-lg ${
            animateForm ? "animate-form" : ""
          }`}
        >
          <h2 className="text-2xl font-bold text-pink-800 mb-4 text-center">
            Edit Product
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
                name="productName"
                value={product.productName}
                onChange={handleChange}
                className="mt-1 block h-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
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
                name="price"
                value={product.price}
                onChange={handleChange}
                className="mt-1 block h-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
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
                name="description"
                value={product.description}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                rows="3"
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <input
                type="file"
                id="Image"
                name="Image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 w-full  btn mt-2 border-none  btn-primary"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
