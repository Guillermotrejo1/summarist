import Image from "next/image";
import landing from "@/assets/landing.png";
import LoginModal from "./LoginModal";
import { useState } from "react";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () =>  {
    setIsModalOpen(false);
  }

  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="w-full flex flex-col gap-6">
              <div className="text-[#032b41] text-2xl text-center md:text-left md:text-[40px] font-bold mb-6">
                Gain more knowledge <br className="hidden md:inline" />
                in less time
              </div>
              <div className="text-[#394547] text-xl font-[300px] md:mb-6 leading-6 text-center md:text-left">
                Great summaries for busy people,
                <br className="hidden md:inline"/>
                individuals who barely have time to read,
                <br className="hidden md:inline"/>
                and even people who don’t like to read.
              </div>
              <button className="btn max-w-[300px] flex items-center mx-auto md:mx-0" onClick={handleOpenModal}>
                Login
              </button>
              {isModalOpen && <LoginModal onClose={handleCloseModal}/>}
            </div>
            <figure className="hidden w-full h-full max-w-[400px] md:block">
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
