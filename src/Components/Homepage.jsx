import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  const [animateForm, setAnimateForm] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    setAnimateForm(true);
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await axios.get(
        "https://backendflowershop.onrender.com/admin/products"
      );
      setFeaturedProducts(response.data.slice(0, 8));
    } catch (error) {
      console.error("Error fetching featured products:", error);
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed of slide transition (in milliseconds)
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed of autoplay (in milliseconds)
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="bg-cover bg-center text-white py-20"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/close-up-beautiful-florist-woman_23-2149215317.jpg?t=st=1709930114~exp=1709933714~hmac=c3227840dd0314e91bda62e284e3925e880bd040cb1ad956ff3959a3a372d0ea&w=740')`,
            backgroundSize: "center",
          }}
        >
          <div
            className={`container mx-auto text-center ${
              animateForm ? "animate-form" : ""
            }`}
          >
            <h1 className="text-5xl font-bold mb-4">Welcome to Nature House</h1>
            <p className="text-xl mb-8">
              Explore our beautiful collection of flowers and plants.
            </p>
            <Link to="/products">
              <button className="bg-white text-pink-500 hover:bg-pink-600 py-2 px-6 rounded-lg text-lg font-semibold btn mt-2 border-none btn-primary">
                Shop Now
              </button>
            </Link>
          </div>
        </section>
        {/* Section with Text */}
        <section className="bg-pink-200 py-16">
          <div className={`container mx-auto text-center`}>
            <h2 className="text-4xl font-bold text-pink-800 mb-4 pt-7">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, ligula id consectetur bibendum, justo erat
              dignissim libero, ac tincidunt ex sem in ex. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vestibulum euismod, ligula id
              consectetur bibendum, justo erat dignissim libero, ac tincidunt ex
              sem in ex.
            </p>
          </div>
        </section>
        {/* Featured Flowers Section */}
        <section className="py-5 bg-pink-200">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-pink-800 ">
              Clients Flowers
            </h2>
            <Slider {...settings}>
              {/* Map over featuredProducts array and display each product */}
              {featuredProducts.map((product) => (
                <div key={product.id} className="slider-item">
                  <img
                    src={`https://backendflowershop.onrender.com/${product.Image}`}
                    alt={product.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 "
                  />
                  <div className="content">
                    <h3 className="text-xl font-semibold mb-2">
                      {product.productName}
                    </h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        {/* Featured Flowers Section */}
        <section className="py-20 bg-pink-200">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-pink-800 ">
              Featured Flowers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Flower Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer">
                <img
                  src="https://images.pexels.com/photos/5037265/pexels-photo-5037265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Flower"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Lisianthus Flower{" "}
                  </h3>
                  <p className="text-gray-600">
                    Lisianthus flowers (Eustoma grandiflorum) can bloom late
                    into the season if taken care of properly.it is important
                    always to keep them watered well after the first bloom.
                  </p>
                </div>
              </div>

              {/* Flower Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer">
                <img
                  src="https://images.pexels.com/photos/5409702/pexels-photo-5409702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Flower"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 "
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Alyssum Flower</h3>
                  <p className="text-gray-600">
                    Alyssum is classified as a perennial, this plant is grown as
                    an annual in cold climates.Its tiny clusters of blooms are
                    attractive at the edge of a bed or in pots with geraniums or
                    other annuals..
                  </p>
                </div>
              </div>
              {/* Flower Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer">
                <img
                  src="https://images.pexels.com/photos/3171623/pexels-photo-3171623.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Flower"
                  className="w-full h-64 object-cover  hover:scale-105 transition-transform duration-300 "
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Sun Flower</h3>
                  <p className="text-gray-600">
                    Sunflowers are generally very easy to grow and thrive in
                    areas with long hot summers which promote flowering..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-pink-800 text-white py-8">
          <div className="container mx-auto flex justify-center items-center">
            <p>&copy; 2024 Nature House. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
