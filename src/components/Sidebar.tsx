import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { PiHouseLine } from "react-icons/pi";
import { RxBookmark } from "react-icons/rx";
import { RiBallPenLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div
      className={`bg-[#f7faf9] w-50 min-w-50 fixed top-0 left-0 z-50 transition duration-300 ease-in-out`}
    >
      <div>
        <Image
          src={Logo}
          className="flex justify-center items-center pt-4 max-w-[160px] m-auto"
          width={160}
          height={60}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between h-[calc(100vh-60px)] pb-5 overflow-y-auto">
        <div className="flex-auto mt-10">
          <div className="flex flex-col h-14 text-[#032b41] m-4 cursor-pointer">
            <Link href="/forYou" className="flex mb-10">
              <PiHouseLine className="mr-2 text-2xl" />
              For You
            </Link>
            <Link href="/library" className="flex mb-10">
              <RxBookmark className="mr-2 text-2xl" />
              My Library
            </Link>
            <div className="flex mb-10">
              <RiBallPenLine className="mr-2 text-2xl" />
              Highlights
            </div>
            <div className="flex mb-10">
              <IoIosSearch className="mr-2 text-2xl" />
              Search
            </div>
          </div>
        </div>
        <div>
          <Link href="/settings" className="flex ml-4 mb-8">
            <SlSettings className="mr-2 text-2xl" />
            Settings
          </Link>
          <div className="flex ml-4 mb-8">
            <IoMdHelpCircleOutline className="mr-2 text-2xl" />
            Help & Support
          </div>
          <div className="flex ml-4 mb-8">
            <MdLogout className="mr-2 text-2xl" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
