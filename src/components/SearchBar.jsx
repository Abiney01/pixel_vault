import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(text);
    dispatch(setQuery(text))
    setText("")
  };
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex p-10 gap-5 bg-gray-950"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="border-2 lg:px-4 lg:py-2 px-2 py-1 lg:text-xl text-lg rounded outline-none w-full"
          type="text"
          placeholder="Search anything.."
        />
        <button className="border-2 lg:px-4 lg:py-2 px-2 py-1 lg:text-xl text-lg rounded outline-none cursor-pointer active:scale-95 hover:bg-gray-700">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
