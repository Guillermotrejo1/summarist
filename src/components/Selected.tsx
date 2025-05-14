import Image from "next/image";
import Lean from "../assets/the-lean-startup.png";
import { FaCirclePlay } from "react-icons/fa6";

const Selected = () => {
  return (
    <div>
      <h1 className="text-[22px] font-bold text-[#032b41] mb-4">
        Selected just for you
      </h1>
      <a
        href=""
        className="flex bg-[#fbefd6] p-6 mb-6 rounded-[6px] gap-6 w-[calc(66.66%)] h-50"
      >
        <div>
          <div className="flex w-[calc(66.66%)]">
            <h2 className="leading-5">
              How Constant Innovation Creates Radically Successful Businesses
            </h2>
            <div className="w-[1px] bg-[#bac8ce] mx-4 h-38"></div>
            <div>
              <div className="flex">
                <Image src={Lean} width={150} height={150} alt="" />
                <div className="flex flex-col ml-4">
                  <h1 className="font-bold whitespace-nowrap">The Lean Startup</h1>
                  <h2>Eric Ries</h2>
                  <div className="flex mt-6">
                    <FaCirclePlay className="text-4xl"/>
                    <h3 className="flex ml-3 font-bold text-[14px] text-[#032b41] whitespace-nowrap items-center">3 mins 23 secs</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Selected;

// width: 100%;
//     height: 100%;
//     background-color: #000;
//     color: #fff;
//     display: flex
// ;
//     justify-content: center;
//     border-radius: 50%;
//     align-items: center;
//     padding: 4px 4px 4px 6px;