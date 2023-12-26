import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
    const [query,setQuery] = useState("")
    const handleInputChange = (event) =>{
        setQuery(event.target.value)
    }
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find your <span className="text-blue">new job</span> today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of jobs in the computer, engineering and technology sectors
        are waiting for you.
      </p>
      <form>
        <div>
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset  focus-within:ring-2 focus-within:ring-inset  focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              placeholder="What position are you looking for?"
              type="text"
              name="title"
              id="title"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900
                placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6
                "
                onChange={handleInputChange}
                value={query}
            />
            <FaSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Banner;
