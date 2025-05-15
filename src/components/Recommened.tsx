import Image from "next/image";
import win from "../assets/how-to-win-friends-and-influence-people.png";
import hurt from "../assets/cant-hurt-me.png";
import atomic from "../assets/atomic_habits.png";
import mastery from "../assets/mastery.png";
import talk from "../assets/how-to-talk-to-anyone.png";
import { CiClock2 } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";


const Recommened = () => {
  
  return (
    <div className="">
      <h1 className="text-[22px] font-bold text-[#032b41] mb-4">
      Recommended For You
      </h1>
      <h4 className="font-light text-[#394547] mb-4">
        We Think you&apos;ll like this
      </h4>
      <div className="flex">
        <div className="w-1/5 p-1">
          <Image src={win} width={170} height={100} alt="" />
          <h2 className="font-bold text-[#032b41] mb-2 line-clamp-2 w-[150px]">
            How to Win Friends and Influence People in the Digital Age
          </h2>
          <h3 className="text-sm text-[#6b757b] font-light mb-2">
            Dale Carnegie
          </h3>
          <h4 className="text-sm text-[#394547] mb-2">
            Time-tested advice for the digital age
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
          <Image src={hurt} width={170} height={100} alt="" />
          <h2 className="font-bold text-[#032b41] mb-2">Can&apos;t Hurt Me</h2>
          <h3 className="text-sm text-[#6b757b] font-light mb-2">
            David Goggins
          </h3>
          <h4 className="text-sm text-[#394547] mb-2">
            Master Your Mind And Defy the Odds
          </h4>
          <div className="flex">
            <div className="flex">
              <CiClock2 className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">04:52</h4>
            </div>
            <div className="flex ml-2">
              <IoMdStarOutline className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">4.2</h4>
            </div>
          </div>
        </div>
        <div className="w-1/5 p-1">
          <Image src={mastery} width={170} height={100} alt="" />
          <h2 className="font-bold text-[#032b41] mb-2">Mastery</h2>
          <h3 className="text-sm text-[#6b757b] font-light mb-2">
            Robert Greene
          </h3>
          <h4 className="text-sm text-[#394547] mb-2">
            Myths about genius and what it really means to be great
          </h4>
          <div className="flex">
            <div className="flex">
              <CiClock2 className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">04:40</h4>
            </div>
            <div className="flex ml-2">
              <IoMdStarOutline className="text-lg font-light text-[#6b757b]" />
              <h4 className="text-sm ml-1 font-light text-[#6b757b]">4.3</h4>
            </div>
          </div>
        </div>
        <div className="w-1/5 p-1">
          <Image src={atomic} width={170} height={100} alt="" />
          <h2 className="font-bold text-[#032b41] mb-2">Atomic Habits</h2>
          <h3 className="text-sm text-[#6b757b] font-light mb-2">
            James Clear
          </h3>
          <h4 className="text-sm text-[#394547] mb-2">
            An Easy & Proven Way to Build Good Habits & Break Bad Ones
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
          <Image src={talk} width={170} height={100} alt="" />
          <h2 className="font-bold text-[#032b41] mb-2">Atomic Habits</h2>
          <h3 className="text-sm text-[#6b757b] font-light mb-2">
            James Clear
          </h3>
          <h4 className="text-sm text-[#394547] mb-2">
            An Easy & Proven Way to Build Good Habits & Break Bad Ones
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
      </div>
    </div>
  );
};

export default Recommened;

