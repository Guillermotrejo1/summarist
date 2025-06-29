import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";

const FeaturesSection = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <div className="text-[32px] text-[#032b41] text-center font-bold mb-8">
            Understand books in few minutes
          </div>
          <div className="grid md:grid-cols-3 gap-10 mb-24">
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 text-[#032b41]">
                <AiFillFileText className="w-9 h-9 lg:w-16 lg:h-16"/>
              </div>
              <div className="text-xl md:text-2xl text-[#032b41] mb-4 font-semibold">
                Read or listen
              </div>
              <div className="text-sm md:text-lg text-[#394547] font-light">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 text-[#032b41]">
                <AiFillBulb className="w-9 h-9 lg:w-16 lg:h-16" />
              </div>
              <div className="text-xl md:text-2xl text-[#032b41] mb-4 font-semibold">
                Find your next read
              </div>
              <div className="text-sm md:text-lg text-[#394547] font-light">
                Explore book lists and personalized recommendations.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 text-[#032b41]">
                <AiFillAudio className="w-9 h-9 lg:w-16 lg:h-16" />
              </div>
              <div className="text-xl md:text-2xl text-[#032b41] mb-4 font-semibold">
                Briefcasts
              </div>
              <div className="text-sm md:text-lg text-[#394547] font-light">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
          <div className="md:flex gap-20 mb-24">
            <div className="w-full flex flex-col justify-center">
              <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4">
                Enhance your knowledge
              </div>
              <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4">
                Achieve greater success
              </div>
              <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4">
                Improve your health
              </div>
              <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4">
                Develop better parenting skills
              </div>
              <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4">
                Increase happiness
              </div>
              <div className="text-2xl md:text-[32px] font-medium text-[#6b757b] mb-4">
                Be the best version of yourself!
              </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-6 bg-[#f1f6f4] py-10 px-6">
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-bold mt-2">
                  93%
                </div>
                <div className="text-[16px] md:text-xl font-medium text-[#394547]">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-bold mt-2">
                  96%
                </div>
                <div className="text-[16px] md:text-xl font-medium text-[#394547]">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-bold mt-2">
                  90%
                </div>
                <div className="text-[16px] md:text-xl font-medium text-[#394547]">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-20 mb-24">
            <div className="w-full flex flex-col justify-center gap-6 bg-[#f1f6f4] py-10 px-6 mb-4 md:mb-0 ">
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-semibold mt-2">91%</div>
                <div className="text-[16px] md:text-xl font-light text-[#394547]">
                  of Summarist members <b>report feeling more productive</b>
                  {""} after incorporating the service into their daily routine.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-semibold mt-2">94%</div>
                <div className="text-[16px] md:text-xl font-light text-[#394547]">
                  of Summarist members have <b>noticed an improvement</b> in
                  their overall comprehension and retention of information.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-semibold mt-2">88%</div>
                <div className="text-[16px] md:text-xl font-light text-[#394547]">
                  of Summarist members <b>feel more informed</b> about current
                  events and industry trends since using the platform.
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center md:items-end">
              <div className="text-2xl md:text-[32px] font-[500px] text-[#6b757b] mb-4">Expand your learning</div>
              <div className="text-2xl md:text-[32px] font-[500px] text-[#6b757b] mb-4">Accomplish your goals</div>
              <div className="text-2xl md:text-[32px] font-[500px] text-[#6b757b] mb-4">
                Strengthen your vitality
              </div>
              <div className="text-2xl md:text-[32px] font-[500px] text-[#6b757b] mb-4">
                Become a better caregiver
              </div>
              <div className="text-2xl md:text-[32px] font-[500px] text-[#6b757b] mb-4">Improve your mood</div>
              <div className="text-2xl md:text-[32px] font-[500px] text-[#6b757b] mb-4">Maximize your abilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
