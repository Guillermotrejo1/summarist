import Image from "next/image";
import Zero from "../assets/zero-to-one.png"
import Rich from "../assets/rich-dad-poor-dad.png"
import Rule from "../assets/the-10x-rule.png"
import Work from "../assets/deep-work.png"
import Five from "../assets/the-five-second-rule.png"

import { CiClock2 } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";

const Suggested = () => {
  return (
    <div className="py-16">
      <h1 className="text-[22px] font-bold text-[#032b41] mb-2">
        Suggested Books
      </h1>
      <h4 className="font-light text-[#394547] mb-4">
        Browse those books
      </h4>
      <div className="flex">
        <div className="w-1/5 p-1">
          <Image src={Zero} width={170} height={100} alt="" />
          <h2 className="font-bold text-[#032b41] mb-2 line-clamp-2 w-[150px]">
            Zero to One
          </h2>
          <h3 className="text-sm text-[#6b757b] font-light mb-2">
            Peter Theil with Blake Masters
          </h3>
          <h4 className="text-sm text-[#394547] mb-2">
            Notes on Startups, or How to build The Future
          </h4>
          <div className="flex">
            <div className="flex">
              <CiClock2 className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">03:24</h4>
            </div>
            <div className="flex ml-2">
              <IoMdStarOutline className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">4.3</h4>
            </div>
          </div>
        </div>
        <div className="w-1/5 p-1">
          <Image src={Rich} width={170} height={100} alt="" />
          <h2 className="font-bold text-[#032b41] mb-2">
            Rich Dad, Poor Dad
          </h2>
          <h3 className="text-sm text-[#6b757b] font-light mb-2">
            Robert T. Kyyosaki
          </h3>
          <h4 className="text-sm text-[#394547] mb-2">
            What the Rich Teach Their Kids about Money - That the Poor and the Middle Class Do Not!
          </h4>
          <div className="flex">
            <div className="flex">
              <CiClock2 className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">05:38</h4>
            </div>
            <div className="flex ml-2">
              <IoMdStarOutline className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">4.5</h4>
            </div>
          </div>
        </div>
        <div className="w-1/5 p-1">
          <Image src={Rule} width={170} height={100} alt="" />
          <h2 className="font-bold text-[#032b41] mb-2">
            The 10X Rule
          </h2>
          <h3 className="text-sm text-[#6b757b] font-light mb-2">
            Grant Cardone
          </h3>
          <h4 className="text-sm text-[#394547] mb-2">
            The Only Difference Between Success and Failure
          </h4>
          <div className="flex">
            <div className="flex">
              <CiClock2 className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">03:18</h4>
            </div>
            <div className="flex ml-2">
              <IoMdStarOutline className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">4</h4>
            </div>
          </div>
        </div>
        <div className="w-1/5 p-1">
          <Image src={Work} width={170} height={100} alt="" />
          <h2 className="font-bold text-[#032b41] mb-2">
            Deep Work
          </h2>
          <h3 className="text-sm text-[#6b757b] font-light mb-2">
            Cal Newport
          </h3>
          <h4 className="text-sm text-[#394547] mb-2">
            Rules for Focused Success in a Distracted World
          </h4>
          <div className="flex">
            <div className="flex">
              <CiClock2 className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">02:50</h4>
            </div>
            <div className="flex ml-2">
              <IoMdStarOutline className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">4.3</h4>
            </div>
          </div>
        </div>
        <div className="w-1/5 p-1">
          <Image src={Five} width={170} height={100} alt="" />
          <h2 className="font-bold text-[#032b41] mb-2">
            The 5 Second Rule
          </h2>
          <h3 className="text-sm text-[#6b757b] font-light mb-2">
            Mel Robbins
          </h3>
          <h4 className="text-sm text-[#394547] mb-2">
            Transform Your Life, Work and Confidence with Everyday Courage
          </h4>
          <div className="flex">
            <div className="flex">
              <CiClock2 className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">02:45</h4>
            </div>
            <div className="flex ml-2">
              <IoMdStarOutline className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">4.3</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggested;

