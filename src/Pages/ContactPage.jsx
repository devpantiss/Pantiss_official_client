import React from "react";

const ContactPage = () => {
  return (
    <section className="bg-gray-50 py-8 px-6">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Contact us</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last modified on Friday, 17 January 2025
          </p>
        </header>

        <div>
          {/* Headquarters */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Headquarters
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Pantiss Foundation</h3>
            <p className="text-gray-600">Plot No 1215/1500,</p>
            <p className="text-gray-600">Khandagiri Bari, Bank of India Lane,</p>
            <p className="text-gray-600">Bhubaneswar, Odisha, 751030</p>
            <p className="text-gray-600">
              <strong>Tel:</strong> +91 9123456789
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@pantissfoundation.org"
                className="text-blue-600 hover:underline"
              >
                info@pantissfoundation.org
              </a>
            </p>
          </div>

          {/* Training Centers */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Training Centers
          </h2>
          <div className="space-y-6">
            {/* Kalahandi */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Kalahandi</h3>
              <p className="text-gray-600">Main Road, Bhawanipatna, Kalahandi, Odisha</p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8245671234
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:kalahandi@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  kalahandi@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Angul */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Angul</h3>
              <p className="text-gray-600">Plot No. 45, Industrial Area, Angul, Odisha</p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8345672345
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:angul@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  angul@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Jajpur */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Jajpur</h3>
              <p className="text-gray-600">NH-5, Near Tata Steel Plant, Jajpur, Odisha</p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8445673456
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:jajpur@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  jajpur@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Thuamul Rampur */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Thuamul Rampur
              </h3>
              <p className="text-gray-600">
                Block Office Road, Thuamul Rampur, Kalahandi, Odisha
              </p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8545674567
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:thuamulrampur@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  thuamulrampur@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Kandhamal */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Kandhamal</h3>
              <p className="text-gray-600">Near Phulbani Main Market, Kandhamal, Odisha</p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8645675678
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:kandhamal@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  kandhamal@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Harsuguda */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Harsuguda</h3>
              <p className="text-gray-600">Rly Station Road, Jharsuguda, Odisha</p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8745676789
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:harsuguda@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  harsuguda@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Koderma */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Koderma</h3>
              <p className="text-gray-600">Station Road, Koderma, Jharkhand</p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8845677890
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:koderma@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  koderma@pantissfoundation.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;























// import React from "react";
// import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

// const ContactPage = () => {
//   return (
//     <div className="p-8 lg:p-16 bg-gray-50 text-gray-900">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-xl uppercase tracking-wide text-gray-500 mb-2">
//           Contact us
//         </h2>
//         <h1 className="text-4xl font-bold mb-4">Let’s work together</h1>
//         <p className="text-gray-600">We cannot wait to hear from you.</p>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Section */}
//         <div className="lg:w-1/2">
//           <div className="mb-8">
//             <h3 className="text-lg font-semibold mb-4">Our offices</h3>
//             <p className="text-gray-600 mb-6">
//               Prefer doing things in person? We don’t, but we have to list our
//               addresses here for legal reasons.
//             </p>
//             <div className="space-y-4">
//               <div>
//                 <h4 className="font-semibold">Bhubaneswar</h4>
//                 <p className="text-gray-600">
//                   Plot No. 1215/1500, Khandagiri bari, Bhubaneswar, Odisha,
//                   751030
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-200 my-6"></div>

//           <div className="mb-8">
//             <h3 className="text-lg font-semibold mb-4">Email us</h3>
//             <div className="space-y-2">
//               <p>
//                 <span className="font-semibold">Careers:</span>{" "}
//                 <a
//                   href="mailto:careers@adgenzy.com"
//                   className="text-red-500 underline"
//                 >
//                   info@pantiss.org{" "}
//                 </a>
//               </p>
//               <p>
//                 <span className="font-semibold">Phone:</span>{" "}
//                 <a
//                   href="mailto:adi@adgenzy.com"
//                   className="text-red-500 underline"
//                 >
//                   06743588734{" "}
//                 </a>
//               </p>
//             </div>
//           </div>

//           <div className="border-t border-gray-200 my-6"></div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Follow us</h3>
//             <div className="flex space-x-4 text-gray-500">
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-900"
//               >
//                 <FaGithub className="text-2xl" />
//               </a>
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-900"
//               >
//                 <FaFacebook className="text-2xl" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-900"
//               >
//                 <FaLinkedin className="text-2xl" />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-900"
//               >
//                 <FaTwitter className="text-2xl" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="lg:w-1/2">
//           <h3 className="text-lg font-semibold mb-4">Work inquiries</h3>
//           <form className="space-y-6">
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Company"
//                 className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500"
//               />
//             </div>
//             <textarea
//               placeholder="Message"
//               className="border border-gray-300 p-3 rounded-lg w-full h-32 focus:ring-2 focus:ring-red-500"
//             ></textarea>

//             {/* <fieldset>
//               <legend className="text-gray-600 mb-2">Budget</legend>
//               <div className="flex flex-wrap gap-4">
//                 <label className="flex items-center space-x-2">
//                   <input type="radio" name="budget" value="15-25" className="form-radio" />
//                   <span>Rs 15K - Rs 25K</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="radio" name="budget" value="25-50" className="form-radio" />
//                   <span>Rs 25K - Rs 50K</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="radio" name="budget" value="50-100" className="form-radio" />
//                   <span>Rs 50K - Rs 100K</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="radio" name="budget" value="100+" className="form-radio" />
//                   <span>More than Rs 100K</span>
//                 </label>
//               </div>
//             </fieldset> */}

//             <button
//               type="submit"
//               className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-red-500"
//             >
//               Let’s work together
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
