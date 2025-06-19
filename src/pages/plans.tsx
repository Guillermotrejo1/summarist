import Image from "next/image";
import PricingTop from "../assets/pricing-top.png";
import { FaFileAlt } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const plans = () => {
  return (
    <div className="w-full">
      <div className="text-center w-full pt-12 mb-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#032b41] -z-10 rounded-b-[16rem]"></div>
         <div className="relative max-w-[1000px] mx-auto my-0 text-[#fff] px-6">
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
                <h3 className="text-lg text-[#032b41] font-semibold mb-2">
                  Premium Plus Yearly
                </h3>
                <p className="text-2xl text-[#032b41] font-semibold mb-2">
                  $99.99/year
                </p>
                <p className="text-sm text-[#6b757b]">
                  7-day Free trial included
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-1 border-t border-gray mx-2 m-7 max-w-[100px]"></div>
              <span className="text-black">OR</span>
              <div className="flex-1 border-t border-gray mx-2 m-7 max-w-[100px]"></div>
            </div>
            <div className="flex gap-6 p-6 text-[#f1f6f4] rounded-sm cursor-pointer border-[4px] border-solid border-[#bac8ce max-w-[680px] mx-auto">
              <div className="relative w-6 h-6 rounded-full border-[2px] border-solid border-[#000] flex items-center justify-center"></div>
              <div className="">
                <h3 className="text-lg text-[#032b41] font-semibold mb-2">
                  Premium Monthly
                </h3>
                <p className="text-2xl text-[#032b41] font-semibold mb-2">
                  $9.99/month
                </p>
                <p className="text-sm text-[#6b757b]">No trial included</p>
              </div>
            </div>
            <div className="flex flex-col items-center mx-auto my-10">
              <button className="btn max-w-[300px] ">7 Day free trial</button>
              <div className="text-[#6b757b] text-xs items-center">
                Cancel your trial at any time before it ends, and you wont be
                charged.
              </div>
            </div>
            <div className="faq__wrapper">
              <Accordion className="accordion__border">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    How does the free 7-day trial work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Begin your complimentary 7-day trial with a Summarist annual
                    membership. You are under no obligation to continue your
                    subscription, and you will only be billed when the trial
                    period expires. With Premium access, you can learn at your
                    own pace and as frequently as you desire, and you may
                    terminate your subscription prior to the conclusion of the
                    7-day free trial.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="accordion__border">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    Can I switch subscriptions from monthly to yearly, or yearly
                    to monthly?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    While an annual plan is active, it is not feasible to switch
                    to a monthly plan. However, once the current month ends,
                    transitioning from a monthly plan to an annual plan is an
                    option.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="accordion__border">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    What&apos;s included in the Premium plan?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Premium membership provides you with the ultimate Summarist
                    experience, including unrestricted entry to many
                    best-selling books high-quality audio, the ability to
                    download titles for offline reading, and the option to send
                    your reads to your Kindle.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="accordion__border">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    Can I cancel during my trial or subscription?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    You will not be charged if you cancel your trial before its
                    conclusion. While you will not have complete access to the
                    entire Summarist library, you can still expand your
                    knowledge with one curated book per day.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <section id="footer">
          <div className="py-10 w-full bg-[#f1f6f4]">
            <div className="max-w-[1070px] w-full mx-auto px-6">
              <div className="relative flex justify-between text-sm mt-8 mx-auto mb-16">
                <div className="z-[1] text-left">
                  <div className="font-semibold mb-4 text-lg text-[#032b41]">
                    Actions
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      Summarist Magazine
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      Cancel Subscription
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      Help
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      Contact us
                    </a>
                  </div>
                </div>
                <div className="z-[1] text-left">
                  <div className="font-semibold mb-4 text-lg text-[#032b41]">
                    Useful Links
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      Pricing
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      Summarist Business
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      Gift Cards
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      Authors & Publishers
                    </a>
                  </div>
                </div>
                <div className="z-[1] text-left">
                  <div className="font-semibold mb-4 text-lg text-[#032b41]">
                    Company
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      About
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      Careers
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      Partners
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="footer__links" href="">
                      Code of cunduct
                    </a>
                  </div>
                </div>
                <div className="z-[1] text-left">
                  <div className="font-semibold mb-4 text-lg text-[#032b41]">
                    Other
                  </div>
                  <div className="mb-3 leading-none">
                    <a
                      className="text-[#394547]! text-sm cursor-not-allowed"
                      href=""
                    >
                      Sitemap
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a
                      className="text-[#394547]! text-sm cursor-not-allowed"
                      href=""
                    >
                      Legal Notice
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a
                      className="text-[#394547]! text-sm cursor-not-allowed"
                      href=""
                    >
                      Terms of Service
                    </a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a
                      className="text-[#394547]! text-sm cursor-not-allowed"
                      href=""
                    >
                      Privacy Policies
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="text-[#032b41] font-medium">
                  Copyright @ 2023 Summarist.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default plans;
