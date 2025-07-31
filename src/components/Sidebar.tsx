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
import { auth } from "@/firebase/firebase";
import LoginModal from "./LoginModal";

const Sidebar = () => {
  const router = useRouter();
  const isPlayerRoute = router.pathname.startsWith("/player");
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(router.pathname);

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router.pathname]);

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

  const logout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const openLoginModal = () => {
    setIsModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsModalOpen(false);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle the login state
  };

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
              <Link
                href="/forYou"
                className="flex mb-10 relative"
                onClick={() => setActiveTab("/forYou")}
              >
                <span
                  className={`absolute top-0 h-full border-l-4 ${
                    activeTab === "/forYou"
                      ? "border-green-500"
                      : "border-transparent"
                  }`}
                  style={{ left: "-16px", height: "50px" }}
                ></span>
                <PiHouseLine className="mr-2 text-2xl" /> For You
              </Link>
              <Link
                href="/Library"
                className="flex mb-10 relative"
                onClick={() => setActiveTab("/Library")}
              >
                <span
                  className={`absolute top-0 h-full border-l-4 ${
                    activeTab === "/Library"
                      ? "border-green-500"
                      : "border-transparent"
                  }`}
                  style={{ left: "-16px", height: "50px" }}
                ></span>
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
            <Link
              href="/settings"
              className="flex ml-4 mb-8 relative"
              onClick={() => setActiveTab("/settings")}
            >
              <span
                className={`absolute top-0 h-full border-l-4 ${
                  activeTab === "/settings"
                    ? "border-green-500"
                    : "border-transparent"
                }`}
                style={{ left: "-16px", height: "50px" }}
              ></span>
              <SlSettings className="mr-2 text-2xl" /> Settings
            </Link>
            <div className="flex ml-4 mb-8 cursor-not-allowed">
              <IoMdHelpCircleOutline className="mr-2 text-2xl" /> Help & Support
            </div>
            <div
              className="flex ml-4 mb-8 cursor-pointer"
              onClick={isLoggedIn ? logout : toggleLogin}
            >
              {isLoggedIn ? (
                <div className="flex">
                  <MdLogout className="mr-2 text-2xl" />
                  <span>Logout</span>
                </div>
              ) : (
                <div className="flex" onClick={openLoginModal}>
                  <MdLogout className="mr-2 text-2xl" />
                  <span>Login</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-[100] flex justify-center items-center">
          <LoginModal onClose={closeLoginModal} />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
