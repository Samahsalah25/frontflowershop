// import React from "react";
// import Navbar from "./Navbar";
// import { useState, useEffect } from "react";

// const About = () => {
//   const [animateForm, setAnimateForm] = useState(false);

//   useEffect(() => {
//     setAnimateForm(true);
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <section className="bg-pink-100 py-16">
//         <div
//           className={`container mx-auto text-center my-2 ${
//             animateForm ? "animate-form" : ""
//           }`}
//         >
//           <h2 className="text-4xl font-bold text-pink-800 mb-4">About Us</h2>
//           <p className="text-lg text-gray-700">
//             At our flower shop, teamwork is at the heart of everything we do.
//             Our dedicated team works together to ensure that each bouquet is
//             crafted with care and precision. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Vestibulum euismod, ligula id
//             consectetur bibendum, justo erat dignissim libero, ac tincidunt ex
//             sem in ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Vestibulum euismod, ligula id consectetur bibendum, justo erat
//             dignissim libero, ac tincidunt ex sem in ex.
//           </p>
//         </div>

//         <section className="bg-pink-200 py-16">
//           <div className="container mx-auto text-center">
//             <h2 className="text-3xl font-bold text-pink-800 mb-4">
//               Our Teamwork
//             </h2>
//             <div className="flex justify-center">
//               <div className="flex flex-col items-center mr-8">
//                 <img
//                   src="https://images.pexels.com/photos/5409772/pexels-photo-5409772.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Team Member 1"
//                   className="w-48 h-48 rounded-full mb-4"
//                 />
//                 <p className="text-gray-700">John Doe</p>
//               </div>
//               <div className="flex flex-col items-center mr-8">
//                 <img
//                   src="https://images.pexels.com/photos/6764332/pexels-photo-6764332.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Team Member 2"
//                   className="w-48 h-48 rounded-full mb-4"
//                 />
//                 <p className="text-gray-700">Jane Doe</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <img
//                   src="https://images.pexels.com/photos/5414000/pexels-photo-5414000.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Team Member 3"
//                   className="w-48 h-48 rounded-full mb-4"
//                 />
//                 <p className="text-gray-700">Alex Smith</p>
//               </div>
//             </div>
//             <p className="text-lg text-gray-700 mt-8">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Vestibulum euismod, ligula id consectetur bibendum, justo erat
//               dignissim libero, ac tincidunt ex sem in ex. Lorem ipsum dolor sit
//               amet, consectetur adipiscing elit. Vestibulum euismod, ligula id
//               consectetur bibendum, justo erat dignissim libero, ac tincidunt ex
//               sem in ex.
//             </p>
//           </div>
//         </section>
//       </section>
//       <footer className="bg-pink-800 text-white py-8 text-center">
//         <div className="container mx-auto">
//           <p>&copy; 2024 Nature House. All rights reserved.</p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default About;
import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
const About = () => {
  const [animateForm, setAnimateForm] = useState(false);

  useEffect(() => {
    setAnimateForm(true);
  }, []);
  return (
    <>
      <Navbar />
      <section className="bg-pink-100 py-16">
        <div
          className={`container mx-auto text-center ${
            animateForm ? "animate-form" : ""
          }`}
        >
          <h2 className="text-4xl font-bold text-pink-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            At our flower shop, teamwork is at the heart of everything we do.
            Our dedicated team works together to ensure that each bouquet is
            crafted with care and precision. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum euismod, ligula id
            consectetur bibendum, justo erat dignissim libero, ac tincidunt ex
            sem in ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum euismod, ligula id consectetur bibendum, justo erat
            dignissim libero, ac tincidunt ex sem in ex.
          </p>
        </div>
      </section>

      <section className="bg-pink-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-800 mb-4">
            Our Teamwork
          </h2>
          <div className="flex justify-center">
            <div
              className={`flex flex-col items-center mr-8 ${
                animateForm ? "animate-form" : ""
              }`}
            >
              <img
                src="https://images.pexels.com/photos/5409772/pexels-photo-5409772.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Member 1"
                className="w-48 h-48 rounded-full mb-4"
              />
              <p className="text-gray-700">John Doe</p>
            </div>
            <div
              className={`flex flex-col items-center mr-8 ${
                animateForm ? "animate-form" : ""
              }`}
            >
              <img
                src="https://images.pexels.com/photos/6764332/pexels-photo-6764332.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Member 2"
                className="w-48 h-48 rounded-full mb-4"
              />
              <p className="text-gray-700">Jane Doe</p>
            </div>
            <div
              className={`flex flex-col items-center mr-8 ${
                animateForm ? "animate-form" : ""
              }`}
            >
              <img
                src="https://images.pexels.com/photos/5414000/pexels-photo-5414000.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Member 3"
                className="w-48 h-48 rounded-full mb-4"
              />
              <p className="text-gray-700">Alex Smith</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            euismod, ligula id consectetur bibendum, justo erat dignissim
            libero, ac tincidunt ex sem in ex. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum euismod, ligula id
            consectetur bibendum, justo erat dignissim libero, ac tincidunt ex
            sem in ex.
          </p>
        </div>
      </section>

      <footer className="bg-pink-800 text-white py-8 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Nature House. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default About;
