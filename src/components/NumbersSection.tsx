import { BiCrown } from "react-icons/bi"
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import { RiLeafLine } from "react-icons/ri"

const NumbersSection = () => {
  return (
    <section id="numbers">
      <div className="container">
        <div className="row">
          <div className="text-[32px] text-[#032b41] text-center mb-[32px] font-bold">Start growing with Summarist now</div>
          <div className="grid grid-cols-3 gap-10">
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-[60px] gap-2">
                <BiCrown className="text-[#0365f2] w-[48px] h-[48px]" />
              </div>
              <div className="text-[40px] text-[#032b41] font-semibold mb-4">3 Million</div>
              <div className="text-[#394547] font-light">Downloads on all platforms</div>
            </div>
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-[60px] gap-2 numbers__star--icon">
                <BsStarFill className="text-[#0365f2] w-[48px] h-[48px]"/>
                <BsStarHalf className="text-[#0365f2] w-[48px] h-[48px]"/> 
              </div>
              <div className="text-[40px] text-[#032b41] font-semibold mb-4">4.5 Stars</div>
              <div className="text-[#394547] font-light">
                Average ratings on iOS and Google Play
              </div>
            </div>
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-[60px] gap-2">
                <RiLeafLine className="text-[#0365f2] w-[48px] h-[48px]"/>
              </div>
              <div className="text-[40px] text-[#032b41] font-semibold mb-4">97%</div>
              <div className="text-[#394547] font-light">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NumbersSection