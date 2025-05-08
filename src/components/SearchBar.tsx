import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="bg-[#fff] border-b-[1px] border-[#e1e7ea] ml-[200px] h-20 z-[1] w-[calc(100vw-200px)]">
  <div className="w-80 absolute right-35 top-5">
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search for books" 
        className="h-10 w-full pl-4 outline-none text-sm bg-[#f1f6f4] text-[#042330] rounded-lg border-2 border-solid border-[#e1e7ea]" 
      />
      <IoIosSearch className="absolute right-2 cursor-pointer text-3xl top-1/2 -translate-y-1/2 text-[#042330] border-l-2 border-[#e1e7ea] pl-2 h-full" />
    </div>
  </div>
</div>
  );
};

export default SearchBar;
