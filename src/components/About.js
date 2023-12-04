import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about">
      <div className="container mx-auto text-white mt-0 lg:mt-28 sm:-mt-80">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[400px] lg:h-[400px] mt-16  "
          >
            <div className="bg-[#D3D3D3] text-[#2a2a2a] w-full lg:w-1/3 rounded-md shadow-sm">
              <div className="p-4">
                <h2 className="text-2xl font-bold text-accent">
                  Opening Days:
                </h2>
                <div>
                  <span className="font-bold ">Monday – Friday :</span>
                  <br />
                  <span className="pl-3 font-[600]">9 am to 10 pm</span>
                  <br />
                  <span className="font-bold">Saturday:</span>
                  <br />
                  <span className="pl-3 font-[600]">9 am to 8 pm</span>
                </div>
                <h4 className="text-2xl font-bold mt-4 text-accent">
                  Vacations:
                </h4>
                <p className="pl-3 font-[600]">
                  <span>All Sunday Days</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mt-6 lg:mt-0"
          >
            <h2 className="h2 text-accent">About us</h2>
            <h3 className="h3 mb-4 text-sm lg:text-lg xl:text-xl">
              WELCOME TO YOUR FITNESS OASIS!
            </h3>
            <p className="mb-6 text-sm lg:text-base xl:text-lg">
              Step into a realm where fitness meets serenity, far from the
              hustle and bustle of daily life. Nestled amidst the peaks of
              dedication and valleys of perseverance, our gym stands as a beacon
              of wellness. A dynamic river of motivation named Dedication flows
              through, supplying the energy needed for your transformative
              journey. Embark on this paradisematic fitness adventure where
              every workout is a step toward rejuvenation and vitality. Join us
              and let the echoes of clinking weights and motivational cheers
              create the soundtrack to your success .
            </p>
            <div className="flex flex-col gap-4 md:flex-row md:items-center lg:flex-row lg:items-start lg:gap-x-10 mb-12 mt-3">
              <div className="flex-shrink-0 gap-x-6 lg:gap-x-10">
                <div
                  className="text-[40px] font-tertiary text-gradient mb-2"
                  ref={ref1}
                >
                  {inView1 ? <CountUp start={0} end={25} duration={4} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div className="flex-shrink-0 gap-x-6 lg:gap-x-10">
                <div>
                  <div
                    className="text-[40px] font-tertiary text-gradient mb-2"
                    ref={ref2}
                  >
                    {inView2 ? (
                      <CountUp start={0} end={1347} duration={5} />
                    ) : null}
                    +
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    HAPPY
                    <br />
                    TRAINEES
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 gap-x-6 lg:gap-x-10">
                <div>
                  <div
                    className="text-[40px] font-tertiary text-gradient mb-2"
                    ref={ref3}
                  >
                    {inView3 ? (
                      <CountUp start={0} end={1153} duration={4} />
                    ) : null}
                    +
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    MEMBERS
                    <br />
                    TRANSFORMED
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row lg:items-start lg:justify-between">
              <div className="mb-4 md:mb-0">
                FOR MORE DETAILS
                <span className="text-accent text-xl font-bold">
                  {" "}
                  GYMGENESIS@email.com
                </span>
                <span className="text-2xl font-bold"> OR</span>
              </div>
              <div className="flex max-w-max gap-x-6 items-center lg:mb-20 lg:-mt-2 mx-auto lg:mx-0">
                <a
                  className="btn btn-md flex items-center justify-center"
                  href="https://wa.me/+96103123456"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
