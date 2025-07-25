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
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

const Sidebar = () => {
  const router = useRouter();
  const isPlayerRoute = router.pathname.startsWith("/player");
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={toggleSidebar} className="md:hidden p-4">
        <FiMenu className="absolute right-6 top-6 text-3xl" />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        ref={sidebarRef}
        className={`bg-[#f7faf9] fixed h-screen top-0 left-0 z-50 transition duration-300 ease-in-out ${
          isOpen ? "w-[80%]" : "w-64"
        } min-w-64 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
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
        <div
          className={`flex flex-col justify-between ${
            isPlayerRoute ? `h-[calc(95vh-60px)]` : "h-[calc(100vh-60px)]"
          } pb-5 overflow-y-auto`}
        >
          <div className="flex-auto mt-10">
            <div className="flex flex-col h-14 text-[#032b41] m-4 cursor-pointer">
              <Link href="/forYou" className="flex mb-10">
                <PiHouseLine className="mr-2 text-2xl" /> For You
              </Link>
              <Link href="/library" className="flex mb-10">
                <RxBookmark className="mr-2 text-2xl" /> My Library
              </Link>
              <div className="flex mb-10 cursor-not-allowed">
                <RiBallPenLine className="mr-2 text-2xl" /> Highlights
              </div>
              <div className="flex mb-10 cursor-not-allowed">
                <IoIosSearch className="mr-2 text-2xl" /> Search
              </div>
            </div>
          </div>
          <div>
            <Link href="/settings" className="flex ml-4 mb-8">
              <SlSettings className="mr-2 text-2xl" /> Settings
            </Link>
            <div className="flex ml-4 mb-8 cursor-not-allowed">
              <IoMdHelpCircleOutline className="mr-2 text-2xl" /> Help & Support
            </div>
            <div className="flex ml-4 mb-8 cursor-pointer">
              <MdLogout className="mr-2 text-2xl" /> Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
