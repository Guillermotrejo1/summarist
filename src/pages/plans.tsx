import Image from "next/image";
import PricingTop from "../assets/pricing-top.png";
import { FaFileAlt } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

const plans = () => {
  return (
    <div className="ml-0 w-full bg-gray-600">
      <div className="w-full">
        plan
        <div className="relative text-center w-full pt-12 mb-6">
          plan header wrapper
          <div className="max-w-[1000px] mx-auto my-0 text-[#fff] px-6">
            plan-header
            <h1 className="text-5xl font-bold mb-10">
              Get unlimited access to many amazing books to read
            </h1>
            <h3 className="text-xl mb-8">
              Turn ordinary moments into amazing learning opportunities
            </h3>
            <figure className="flex items-center justify-center">
              <Image
                className="rounded-t-[180px]"
                src={PricingTop}
                alt=""
                width={360}
                height={360}
              />
            </figure>
          </div>
          <div className="max-w-[1070px] w-full mx-auto px-6">
            <div className="py-10 w-full">
              <div className="grid grid-cols-3 justify-center text-center gap-6 max-w-[800px] mx-auto mb-[56px]">
                <div className="flex flex-col items-center justify-center">
                  <FaFileAlt className="text-6xl mb-4" />
                  <p>
                    <span className="text-[#394547]">Key ideas in few min</span>{" "}
                    with many books to read
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <RiPlantFill className="text-6xl mb-4" />
                  <p>
                    <span className="text-[#394547]">3 Million</span> people
                    growing with Summarist everyday
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaHandshake className="text-6xl mb-4" />
                  <p>
                    <span className="text-[#394547]">
                      Precise recommendations
                    </span>{" "}
                    collections curated by experts
                  </p>
                </div>
              </div>
              <div className="text-[32px] text-[#032b41] text-center mb-8 font-bold">
                Choose the plan that fits you
              </div>
              <div className="flex gap-6 p-6 text-[#f1f6f4] rounded-sm cursor-pointer border-[4px] border-solid border-[#bac8ce max-w-[680px] mx-auto">
                <div className="relative w-6 h-6 rounded-full border-[2px] border-solid border-[#000] flex items-center justify-center"></div>
                <div>
                  <h3 className="text-lg text-[#032b41] font-semibold mb-2">Premium Plus Yearly</h3>
                  <p className="text-2xl text-[#032b41] font-semibold mb-2">$99.99/year</p>
                  <p className="text-sm text-[#6b757b]">7-day Free trial included</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex-1 border-t border-gray mx-2 m-7 max-w-[100px]"></div>
                <span className="text-black">OR</span>
                <div className="flex-1 border-t border-gray mx-2 m-7 max-w-[100px]"></div>
              </div>
              <div className="flex gap-6 p-6 text-[#f1f6f4] rounded-sm cursor-pointer border-[4px] border-solid border-[#bac8ce max-w-[680px] mx-auto">
                <div className="relative w-6 h-6 rounded-full border-[2px] border-solid border-[#000] flex items-center justify-center"></div>
                <div>
                  <h3 className="text-lg text-[#032b41] font-semibold mb-2">Premium Monthly</h3>
                  <p className="text-2xl text-[#032b41] font-semibold mb-2">$9.99/month</p>
                  <p className="text-sm text-[#6b757b]">No trial included</p>
                </div>
              </div>
              <div>7 day trial</div>
              <div>accordion</div>
            </div>
            <section id="footer">
              Footer
              <div>
                container
                <div>
                  row
                  <div>
                    footer_top--wrapper
                    <div>
                      footer_block
                      <div>Actions</div>
                    </div>
                    <div>
                      footer_block
                      <div>Useful Links</div>
                    </div>
                    <div>
                      footer_block
                      <div>Company</div>
                    </div>
                    <div>
                      footer_block
                      <div>Other</div>
                    </div>
                  </div>
                  <div>
                    copyright wrapper
                    <div>Copyright @ 2023 Summarist.</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default plans;
