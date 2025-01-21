{activeTab === "businesses" && (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Form Section */}
    <div
      className="bg-white p-6 shadow rounded-lg grid gap-4"
      style={{ maxHeight: "100vh" }} // Makes the form scrollable
    >
      <h2 className="text-2xl font-semibold mb-4">Post a Job</h2>
      <input
        type="text"
        placeholder="Company Name"
        className="p-2 border rounded"
      />
      <select className="p-2 border rounded">
        <option value="">Select Sector</option>
        {sectors.map((sector, index) => (
          <option key={index} value={sector}>
            {sector}
          </option>
        ))}
      </select>
      <select className="p-2 border rounded">
        <option value="Contract">Contract</option>
        <option value="Part-time">Part-time</option>
        <option value="Full-time">Full-time</option>
      </select>
      <textarea
        placeholder="Job Description"
        className="p-2 border rounded h-24"
      ></textarea>
      <textarea
        placeholder="Qualifications"
        className="p-2 border rounded h-24"
      ></textarea>
      <input
        type="text"
        placeholder="Contact Details"
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        className="p-2 border rounded"
      />
      <input type="date" className="p-2 border rounded" />
      <button className="bg-orange-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>

    {/* Lottie Animation */}
    <div
      className="hidden lg:block sticky top-8 h-[400px] justify-center items-center"
      // style={{
      //   backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1730547765/rb_4719_zaopt2.png')`,
      //   backgroundSize: "fit",
      //   backgroundColor: "#f9f9f9",
      //   borderRadius: "15px",
      // }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        className="absolute -right-6 -top-6 w-8 h-8 lg:w-16 lg:h-16"
      >
        <path
          d="M88 88V43.9944V0H44.0056H0V43.9944H44.0056V88H88Z"
          fill="#D6DDCD"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="290"
        height="305"
        viewBox="0 0 290 305"
        fill="none"
        className="absolute -right-0 top-0 w-8 h-8 lg:w-72 lg:h-72"
      >
        <path
          d="M289.5 289V144.5V0H144.979H0.5V144.5H144.979V289H289.5Z"
          fill="#D76041"
        ></path>
        <line
          x1="187.363"
          y1="2.5"
          x2="187.363"
          y2="302.5"
          stroke="#D6DDCD"
          stroke-width="5"
          stroke-linecap="round"
        ></line>
        <line
          x1="240.6"
          y1="2.5"
          x2="240.6"
          y2="302.5"
          stroke="#D6DDCD"
          stroke-width="5"
          stroke-linecap="round"
        ></line>
        <line
          x1="189.645"
          y1="60.9077"
          x2="237.881"
          y2="60.9077"
          stroke="#D6DDCD"
          stroke-width="5"
          stroke-linecap="round"
        ></line>
        <line
          x1="189.645"
          y1="108.263"
          x2="237.881"
          y2="108.263"
          stroke="#D6DDCD"
          stroke-width="5"
          stroke-linecap="round"
        ></line>
        <line
          x1="189.645"
          y1="155.619"
          x2="237.881"
          y2="155.619"
          stroke="#D6DDCD"
          stroke-width="5"
          stroke-linecap="round"
        ></line>
        <line
          x1="189.645"
          y1="202.973"
          x2="237.881"
          y2="202.973"
          stroke="#D6DDCD"
          stroke-width="5"
          stroke-linecap="round"
        ></line>
        <line
          x1="189.645"
          y1="250.329"
          x2="237.881"
          y2="250.329"
          stroke="#D6DDCD"
          stroke-width="5"
          stroke-linecap="round"
        ></line>
      </svg>
      <Player
        autoplay
        loop
        src={animation}
        style={{ height: "450px", width: "500px" }}
      />
    </div>
  </div>
)}