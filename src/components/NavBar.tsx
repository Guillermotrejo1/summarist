import Image from "next/image";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="h-[80px] flex justify-center">
      <div className="flex justify-between items-center max-w-[1070px] w-full h-full mx-auto">
        <div className="flex justify-center items-center">
          <Image
            src={logo}
            width={200}
            height={80}
            className="max-w-[200px] h-auto object-contain"
            alt="Logo"
          />
        </div>

        <ul className="flex gap-6">
          <li className="cursor-pointer text-[#032b41] hover:text-[#2bd97c] transition-colors">
            Login
          </li>

          <li className="cursor-not-allowed text-[#032b41]">About</li>

          <li className="cursor-not-allowed text-[#032b41]">Contact</li>

          <li className="cursor-not-allowed text-[#032b41]">Help</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
