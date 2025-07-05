import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

const SearchBar = () => {
  const [value, setValue] = useState<string>(""); // Input value
  const [suggestions, setSuggestions] = useState<Book[]>([]); // Suggestions from API

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setValue(searchTerm);
    if (searchTerm.trim() === "") {
      setSuggestions([]); // Clear suggestions if input is empty
      return;
    }
    try {
      const response = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${searchTerm}`
      );
      setSuggestions(response.data); // Assuming response.data is an array of suggestions
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  return (
    <div className="bg-[#fff] border-b-[1px] border-[#e1e7ea] w-full md:ml-[200px] h-20 z-[1]">
      <div className="w-80 absolute right-20 md:right-45 top-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for books"
            onChange={onChange}
            value={value}
            className="h-10 w-full pl-4 outline-none text-sm bg-[#f1f6f4] text-[#042330] rounded-lg border-2 border-solid border-[#e1e7ea]"
          />
          <IoIosSearch className="absolute right-2 cursor-pointer text-3xl top-1/2 -translate-y-1/2 text-[#042330] border-l-2 border-[#e1e7ea] pl-2 h-full" />
        </div>
        <div className="absolute bg-white custom-shadow mt-10 right-2 w-[450px] max-h-150 overflow-y-auto z-10">
          {suggestions.length > 0 && suggestions.map((item) => (
            <Link key={item.id} href={`/book/${item.id}`}>
              <div className="flex p-4 hover:bg-gray-200 cursor-pointer">
                {item.imageLink && (
                  <Image
                    width={50}
                    height={20}
                    src={item.imageLink}
                    alt={item.title}
                    className="w-16 h-24 object-cover"
                  />
                )}
                <div className="flex flex-col ml-4">
                  <div className="font-bold">{item.title}</div>
                  <div className="text-sm font-light text-[#6b757b]">{item.author}</div>
                  <h3 className="flex">
                    <CiClock2 className="text-lg font-light text-[#6b757b]" />
                    <h4 className="text-sm ml-1 font-light text-[#6b757b]">4:24</h4>
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
