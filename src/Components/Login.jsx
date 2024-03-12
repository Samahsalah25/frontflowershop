// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const LoginForm = () => {
  //here remove token to gaurd
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  localStorage.removeItem("userName");

  //here animatioin
  const [animateForm, setAnimateForm] = useState(false);
  useEffect(() => {
    setAnimateForm(true);
  }, []);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backendflowershop.onrender.com/login",
        formData
      );

      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userName", response.data.user.userName);
      localStorage.setItem("id", response.data.user._id);
      toast.success("Login successful!");
      navigate("/home");
    } catch (error) {
      console.error("Error Login user:", error);
      toast.error("Login failed. Please try again.");
    }
  };
  return (
    <div className={`py-24 px-10 ${animateForm ? "animate-form" : ""}`}>
      <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className={`form-control w-full mt-4`}>
          <label className="label">
            <span className={"label-text text-base-content "}>Email</span>
          </label>
          <input
            type={"email"}
            placeholder={""}
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="input  input-bordered w-full"
          />
        </div>

        {/* Password Input */}
        <div className={`form-control w-full mt-4`}>
          <label className="label">
            <span className={"label-text text-base-content "}>Password</span>
          </label>
          <input
            type={"password"}
            name="Password"
            placeholder=""
            value={formData.Password}
            onChange={handleChange}
            className="input  input-bordered w-full"
          />
        </div>
        {/* Login Button */}
        <button
          style={{
            background: "pink",
            color: "black",
            border: "none",
          }}
          type="submit"
          className={`btn mt-2 w-full btn-primary`}
        >
          LOGIN
        </button>

        {/* Register Link */}
        <div className="text-center mt-4">
          Do not have an account yet?{" "}
          <Link to="/register">
            <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
              Join Now
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
  const [animateForm, setAnimateForm] = useState(false);

  useEffect(() => {
    // Set animateForm to true when the component mounts
    setAnimateForm(true);
  }, []);
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <div className="hero min-h-full rounded-l-xl bg-base-200">
              <div className="hero-content py-12">
                <div
                  className={`max-w-md ${animateForm ? "animate-form" : ""}`}
                >
                  <h1 className="text-3xl text-center font-bold ">
                    <img
                      src="https://img.freepik.com/free-vector/rose-business-logo-template-flower-design-beauty-brands-vector_53876-156286.jpg?t=st=1709797118~exp=1709800718~hmac=868f6b9dc3aee96720c9a1d9fa7d1da0172376003e58bdfce1bf6dc68c262a44&w=740"
                      className="w-14 inline-block mr-2 mask mask-circle"
                      alt="Nature house=logo"
                    />
                    Nature House
                  </h1>
                  <div className="text-center mt-12">
                    <img
                      src="https://img.freepik.com/free-photo/laughing-worker-speaking-phone-shop_23-2147761012.jpg?t=st=1709803117~exp=1709806717~hmac=de61c23fb71c6fa1d3b24c156fef29306fdf7927a20cfafdffd4749d2931403e&w=740"
                      alt="Nature house website"
                      className="w-100 inline-block h-100"
                    ></img>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
