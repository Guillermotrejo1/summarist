import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React from "react";
import Win from "../../assets/how-to-win-friends-and-influence-people.png";
import { IoIosStarOutline } from "react-icons/io";
import { SlMicrophone } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
import {} from "react-icons/ai";
import { BsBook, BsBookmark } from "react-icons/bs";

const id = () => {
  return (
    <div>
      <SearchBar />
      <Sidebar />
      <div className="w-[calc(100%-200px)] ml-40 h-screen py-10">
        <div className="max-w-[1070px] w-full mx-auto px-6">
          <div className="flex">
            <div className=" w-full">
              <h1 className="text-[32px] font-bold text-[#032b41]">
                How to win friends and influence people in the digital Age
              </h1>
              <p className="font-bold text-[#032b41] mb-4">Dale Carnegie</p>
              <h2 className="text-xl text-[#032b41] font-light mb-4">
                Time-tested advice for the digital age
              </h2>
              <div className="border-t border-b border-[#e1e7ea] mb-4">
                <div className="max-w-[400px] flex flex-wrap gap-y-3 py-4">
                  <div className="w-1/2 flex text-sm items-center font-medium">
                    <IoIosStarOutline className="text-lg" />{" "}
                    <span className="ml-2 text-sm">4.4 (608 ratings)</span>{" "}
                  </div>
                  <div className="w-1/2 flex text-sm items-center font-medium">
                    <GoClock className="text-lg" />{" "}
                    <span className="ml-2 text-sm">03:24</span>
                  </div>
                  <div className="w-1/2 flex text-sm items-center font-medium">
                    <SlMicrophone className="text-lg" />{" "}
                    <span className="ml-2 text-sm">Audio & Text</span>
                  </div>
                  <div className="w-1/2 flex text-sm items-center font-medium">
                    <HiOutlineLightBulb className="text-lg" />{" "}
                    <span className="ml-2 text-sm">8 Key Ideas</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                <button className="flex items-center justify-center w-36 h-12 !bg-[#032b41] text-[#fff] text-[16px] rounded-sm cursor-pointer gap-2 transition duration-200 ease-in-out">
                  <BsBook />
                  <span>Read</span>
                </button>
                <button className="flex items-center justify-center w-36 h-12 !bg-[#032b41] text-[#fff] text-[16px] rounded-sm cursor-pointer gap-2 transition duration-200 ease-in-out">
                  <SlMicrophone />
                  <span>Listen</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mb-10">
                <BsBookmark className="text-lg text-[#0365f2]" />
                <p className="text-lg text-[#0365f2] font-bold">
                  Add title to My Library
                </p>
              </div>
              <div className="text-lg text-[#032b41] mb-4 font-semibold">
                What&apos;s it about?
              </div>
              <div className="flex gap-2 mb-4">
                <div className="bg-[#f1f6f4] px-4 h-12 flex items-center cursor-not-allowed text-[#032b41] font-medium rounded-sm transition duration-200 ease-in-out">
                  Communication Skills
                </div>
                <div className="bg-[#f1f6f4] px-4 h-12 flex items-center cursor-not-allowed text-[#032b41] font-medium rounded-sm transition duration-200 ease-in-out">
                  Technology & the Future
                </div>
              </div>
              <div className="mb-4">
                How to Win Friends and Influence People is a self-help book
                written by Dale Carnegie and first published in 1936. The book
                provides practical advice and techniques for improving ones
                communication and social skills, with the goal of building
                better relationships and becoming more influential in both
                personal and professional settings. The book covers topics such
                as the importance of smiling, listening actively, giving honest
                and sincere appreciation, avoiding criticism, and becoming
                genuinely interested in others. It also emphasizes the power of
                empathy and understanding other people perspectives. How to Win
                Friends and Influence People has been widely read and praised
                for its timeless and practical advice, and is considered a
                classic in the field of self-improvement.
              </div>
              <div className="text-lg text-[#032b41] mb-4 font-semibold">
                About the Author
              </div>
              <div className="mb-8">
                Dale Carnegie (1888-1955) was an American author, lecturer, and
                developer of self-improvement courses. He is best known for his
                book How to Win Friends and Influence People, which has sold
                over 30 million copies worldwide and is considered a classic in
                the self-help genre. Carnegies teachings focused on improving
                interpersonal skills, communication, and leadership, and his
                courses and books were aimed at helping individuals become more
                confident, successful, and influential in both their personal
                and professional lives. He also founded the Dale Carnegie
                Training program, which is still in operation today and has
                helped millions of people around the world improve their
                communication and leadership skills.
              </div>
            </div>
            <div className="h-screen w-lg ml-4">
              <Image
                src={Win}
                width={100}
                height={100}
                alt=""
                className="w-[300px] h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default id;
