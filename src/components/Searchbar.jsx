import React from "react";
import searchicon from "../assets/searchicon.svg";

const Searchbar = () => {
  return (
    <form className="flex gap-2 ml-2 bg-slate-50 items-center">
      <img src={searchicon} alt="Search icon" className="w-4 h-4 md:w-6 md:h-6"/>
      <input
        type="text"
        placeholder="Search POs, ASNs, & pages etc"
        className="flex-grow bg-slate-50 rounded border border-slate-200 px-2 py-1.5 text-sm md:text-base"
      />
    </form>
  );
};

export default Searchbar;
