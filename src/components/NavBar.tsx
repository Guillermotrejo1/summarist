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

// #footer {
//     background-color: rgb(241 246 244);
//   }
  
//   .footer__top--wrapper {
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     font-size: 14px;
//     margin: 32px auto 64px;
//   }
  
//   .footer__block {
//     z-index: 1;
//   }
  
//   .footer__link--title {
//     font-weight: 600;
//     margin-bottom: 16px;
//     font-size: 18px;
//     color: #032b41;
//   }
  
//   .footer__social--link-wrapper {
//     display: flex;
//     align-items: center;
//     gap: 16px;
//     margin-bottom: 16px;
//   }
  
//   .footer__social--link {
//     display: flex;
//   }
  
//   .footer__link--wrapper {
//     margin-bottom: 12px;
//     line-height: 1;
//   }
  
//   .footer__link {
//     color: #394547;
//     font-size: 14px;
//     cursor: not-allowed;
//   }
  
//   .footer__link--wrapper:last-child {
//     margin-bottom: 0;
//   }
  
//   .footer__social--text {
//     margin-bottom: 4px;
//   }
  
//   .footer__social--text b {
//     font-weight: 500;
//   }
  
//   .footer__review--wrapper {
//     display: flex;
//     gap: 8px;
//     margin-bottom: 8px;
//   }
  
//   .footer__social--img-wrapper {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//   }
  
//   .footer__social--img {
//     display: flex;
//   }
  
//   .footer__copyright--wrapper {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   .footer__copyright {
//     color: #032b41;
//     font-weight: 500;
//   }