import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Login from "../assets/login.png";
import { useState } from "react";

const Settings = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isPremium, setIsPremium] = useState(false);

  return (
    <>
      <SearchBar />
      <Sidebar />
      <div className="w-full py-10 mx-20">
        <div className="max-w-[1070px] w-full mx-auto px-6">
          <div className="mb-[32px]">
            <h1 className="text-[32px] font-bold mb-1 text-[#032b41]">
              Settings
            </h1>
            <div className="border-b-[1px] border-[#e1e7ea] pb-4"></div>
          </div>
          {isLoggedIn ? (
            isPremium ? (
              <>
                <div className="mb-[32px]">
                  <h3 className="text-lg text-[#032b41] font-bold">
                    Your Subscription plan
                  </h3>
                  <p>premium</p>
                  <div className="border-b-[1px] border-[#e1e7ea] pb-4"></div>
                </div>
                <div className="mb-[32px]">
                  <h3 className="text-lg text-[#032b41] font-bold">Email</h3>
                  <p>gtrejo@gmail.com</p>
                  <div className="border-b-[1px] border-[#e1e7ea] pb-4"></div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg text-[#032b41] font-bold mb-2">
                  Your Subscription plan
                </h3>
                <div className="mb-2">Basic</div>
                <div className="btn max-w-[200px] mb-6">
                  Upgrade to Premium
                </div>
                <div className="border-b-[1px] border-[#e1e7ea] mb-4"></div>
                
                <div className="mb-[32px]">
                  <h3 className="text-lg text-[#032b41] font-bold">Email</h3>
                  <p>gtrejo@gmail.com</p>
                  <div className="border-b-[1px] border-[#e1e7ea] pb-4"></div>
                </div>
              </>
            )
          ) : (
            <>
              <div className="flex justify-center align-center">
                <Image src={Login} alt="" width={500} height={500} />
              </div>
              <p className="text-center text-[#032b41] text-2xl font-bold mb-4">
                Login to your account to see your details
              </p>
              <button className="btn max-w-[200px] mx-auto">Login</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Settings;
