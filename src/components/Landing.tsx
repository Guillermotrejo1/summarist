import Image from "next/image";
import landing from "@/assets/landing.png";

const Landing = () => {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="w-full flex flex-col gap-6">
              <div className="text-[#032b41] text-[40px] font-bold mb-6">
                Gain more knowledge <br className="remove--tablet" />
                in less time
              </div>
              <div className="text-[#394547] text-xl font-[300px] mb-6 leading-6">
                Great summaries for busy people,
                <br className="remove--tablet" />
                individuals who barely have time to read,
                <br className="remove--tablet" />
                and even people who don’t like to read.
              </div>
              <button className="btn max-w-[300px] flex items-center">Login</button>
            </div>
            <figure className="w-full h-full max-w-[400px]">
              <Image
                src={landing}
                width={200}
                height={200}
                alt="landing"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
