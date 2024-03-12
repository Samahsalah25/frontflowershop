// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const RegistorForm = () => {
  //here remove token to gayrd
  localStorage.removeItem("token");

  // here animation
  const [animateForm, setAnimateForm] = useState(false);
  useEffect(() => {
    setAnimateForm(true);
  }, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
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
        "https://backendflowershop.onrender.com/signup",
        formData
      );

      console.log(response.data);
      toast.success("Registration successful!");

      navigate("/Login");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Registration failed. Please try again.");
    }
  };
  return (
    <div className={`py-24 px-10 ${animateForm ? "animate-form" : ""}`}>
      <h2 className="text-2xl font-semibold mb-2 text-center">Registor Now</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className={`form-control w-full mt-4`}>
          <label className="label">
            <span className={"label-text text-base-content "}>Username</span>
          </label>
          <input
            name="userName"
            placeholder=""
            value={formData.userName}
            onChange={handleChange}
            type={"text"}
            className="input  input-bordered w-full"
          />
        </div>
        {/* Email Input */}
        <div className={`form-control w-full mt-4`}>
          <label className="label">
            <span className={"label-text text-base-content "}>Email</span>
          </label>
          <input
            name="Email"
            placeholder=""
            value={formData.Email}
            onChange={handleChange}
            type={"email"}
            className="input  input-bordered w-full"
          />
        </div>

        {/* Password Input */}
        <div className={`form-control w-full mt-4`}>
          <label className="label">
            <span className={"label-text text-base-content "}>Password</span>
          </label>
          <input
            name="Password"
            placeholder=""
            value={formData.Password}
            onChange={handleChange}
            type={"password"}
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
          Sign up
        </button>

        {/* Login Link */}
        <div className="text-center mt-4">
          If you have an account{" "}
          <Link to="/Login">
            <span className=" inline-block  hover:text-primary hover:underline hover:cursor-pointer hover-effect transition duration-200">
              Login
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

const Registor = () => {
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
                  <h2 className="text-3xl text-center font-bold ">
                    <img
                      src="https://img.freepik.com/free-vector/rose-business-logo-template-flower-design-beauty-brands-vector_53876-156286.jpg?t=st=1709797118~exp=1709800718~hmac=868f6b9dc3aee96720c9a1d9fa7d1da0172376003e58bdfce1bf6dc68c262a44&w=740"
                      className="w-14 inline-block mr-2 mask mask-circle"
                      alt="Nature house=logo"
                    />
                    Join now to Nature House
                  </h2>
                  <div className="text-center mt-12">
                    <img
                      src="https://img.freepik.com/premium-photo/florist-working-laptop_53876-142206.jpg?w=740"
                      alt="Nature house website"
                      className="w-100 inline-block h-100 rounded-3"
                    ></img>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <RegistorForm />
        </div>
      </div>
    </div>
  );
};

export default Registor;
