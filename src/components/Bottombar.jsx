import React, { useState, useEffect, useRef } from "react";

const SearchProductsInput = () => (
  <div className="flex gap-1 py-2 bg-slate-50 border border-solid border-slate-200">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e84c068f00cca87b231cc47b4fc4b2e92382130e42238069d9d5f9bc3263f20c?apiKey=7f64cdb42b7f479bb38f13352d21d330&"
      alt="Search icon"
      className="mt-1 shrink-0 self-start w-4 aspect-square"
    />
    <input
      type="text"
      className="bg-slate-50 flex-auto outline-none"
      placeholder="Search Products"
    />
  </div>
);

const AddRemarksButton = () => (
  <input type="text" className=" px-3 py-3 font-medium bg-slate-50 border border-solid border-slate-200 text-zinc-500" placeholder="Add Remarks">
  </input>
);

const ShowByDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setShowDropdown(false); 
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="justify-center p-2.5 font-semibold bg-white border border-solid border-slate-200 text-slate-900"
        onClick={handleDropdownToggle}
      >
        <span className="text-zinc-500">Show by :</span>{" "}
        {selectedSize ? selectedSize : "Sizes"}
      </button>
      {showDropdown && (
        <div className="absolute z-10 right-0 mt-2 py-2 w-40 bg-white border border-solid border-slate-200">
          <div
            className="px-3 py-1 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSizeSelect("Size 1")}
          >
            Size 1
          </div>
          <div
            className="px-3 py-1 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSizeSelect("Size 2")}
          >
            Size 2
          </div>
          <div
            className="px-3 py-1 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSizeSelect("Size 3")}
          >
            Size 3
          </div>
          <div
            className="px-3 py-1 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSizeSelect("Size 4")}
          >
            Size 4
          </div>
          <div
            className="px-3 py-1 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSizeSelect("Size 5")}
          >
            Size 5
          </div>
        </div>
      )}
    </div>
  );
};

const ScanProductInput = () => (
  <div className="flex gap-2 my-auto text-zinc-500">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/379b0557dc5d95d837c400a5bfd117ddb1900e6c11d9e2376c4d220d34f6b68f?apiKey=7f64cdb42b7f479bb38f13352d21d330&"
      alt="Scan icon"
      className="shrink-0 w-5 aspect-square"
    />
    <div className="flex-auto my-auto">Scan Product by...</div>
  </div>
);

const DesignNoDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleDropdownToggle = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setShowDropdown(false);
    };
  
    return (
      <div className="relative">
        <button
          className="flex gap-1.5 self-stretch px-1.5 py-2 my-auto bg-zinc-300 bg-opacity-50"
          onClick={handleDropdownToggle}
        >
          <span className="text-zinc-500">Show by :</span>{" "}
        {selectedOption ? selectedOption : "Options"}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a377ef77b74ebfc8798641741c56a2aefee73150f35aab359b8f526983ba9e4a?apiKey=7f64cdb42b7f479bb38f13352d21d330&"
            alt="Arrow down icon"
            className="shrink-0 w-3.5 aspect-square"
          />
        </button>
        {showDropdown && (
          <div className="absolute z-10 right-0 mt-2 py-2 w-40 bg-white border border-solid border-slate-200">
            <div
              className="px-3 py-1 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionSelect("Option 1")}
            >
              Option 1
            </div>
            <div
              className="px-3 py-1 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionSelect("Option 2")}
            >
              Option 2
            </div>
          </div>
        )}
      </div>
    );
  };

const Bottombar = () => (
  <div className="hidden sm:flex gap-3.5 text-xs l flex-col md:flex-row  max-md:flex-wrap m-2 w-[1050px]">
    <div className="flex flex-auto gap-5 px-2.5 py-2.5 bg-slate-50 max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-auto gap-2.5 text-slate-500">
        <SearchProductsInput />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90729928eec7a7665e928fdb8b58848f0c0d774562c3735fb07484a6fe915357?apiKey=7f64cdb42b7f479bb38f13352d21d330&"
          alt="Logo"
          className="shrink-0 aspect-[2.94] w-[89px]"
        />
      </div>
      <div className="flex flex-auto gap-2.5">
        <AddRemarksButton />
        <ShowByDropdown />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/99c9ce1248f8b517d096ca90f7089486fc64d3f6de058a506f62460f743ebbb7?apiKey=7f64cdb42b7f479bb38f13352d21d330&"
          alt="Filter icon"
          className="shrink-0 w-8 border border-solid aspect-[1.06] border-slate-200"
        />
      </div>
    </div>
    <div className="flex flex-auto  justify-between px-3.5 bg-slate-50">
      <ScanProductInput />
      <div className="flex gap-3 items-center text-black">
        <DesignNoDropdown />
        <div className="shrink-0 self-stretch w-px h-12 bg-gray-200 border border-gray-200 border-solid" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e34d93739453f36c4a900766bf87ecf463be72108c4513cc6cddbb96eedce24e?apiKey=7f64cdb42b7f479bb38f13352d21d330&"
          alt="Menu icon"
          className="shrink-0 self-stretch my-auto aspect-square w-[21px]"
        />
      </div>
    </div>
  </div>
);

export default Bottombar;
