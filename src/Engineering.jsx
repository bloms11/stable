import React, { useRef } from "react";
import { useState } from "react";
import "./App.css";
import image from "./assets/engine.jpg";
import logo from "./assets/logo3.png";
import hero from "./assets/hero.png";
import out from "./assets/out.png";
import pipe from "./assets/pipe.png";
import pins from "./assets/pins.jpeg";
import worker2 from "./assets/worker2.jpeg";
import man from "./assets/man.jpeg";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import tweet from "./assets/tweet.png";
import link from "./assets/link.png";
import pin from "./assets/pin.png";
import youtube from "./assets/youtube.png";
import { RxDoubleArrowDown } from "react-icons/rx";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { GoPlug } from "react-icons/go";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Engineering = () => {
  const [menu, setMenu] = useState(false);

  const servicesRef = useRef();
  const companyRef = useRef();
  const projectsRef = useRef();
  const certificationRef = useRef();
  const contactRef = useRef();

  const scrollToServices = () => {
    // setActiveTab("Education");
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToCompany = () => {
    // setActiveTab("Courses");
    if (companyRef.current) {
      companyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProjects = () => {
    // setActiveTab("Experience");
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToCertification = () => {
    // setActiveTab("About me");
    if (certificationRef.current) {
      certificationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    // setActiveTab("About me");
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative min-h-[95vh] md:h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-[black] opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex flex-col w-full b">
            <div className="flex justify-between items-center py-2 w-[90%] mx-auto">
              <img
                src={logo}
                width={100}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="hidden md:flex gap-x-10">
                <p
                  onClick={scrollToServices}
                  className="cursor-pointer hover:text-[#3559C7] font-[600]"
                >
                  Services
                </p>
                <p
                  onClick={scrollToCompany}
                  className="cursor-pointer hover:text-[#3559C7] font-[600]"
                >
                  Our Company
                </p>
                <p
                  onClick={scrollToProjects}
                  className="cursor-pointer hover:text-[#3559C7] font-[600]"
                >
                  Projects
                </p>
                <p
                  onClick={scrollToCertification}
                  className="cursor-pointer hover:text-[#3559C7] font-[600]"
                >
                  Certification
                </p>
                <p
                  onClick={scrollToContact}
                  className="cursor-pointer hover:text-[#3559C7] font-[600]"
                >
                  Contact Us
                </p>
              </div>
              <div
                onClick={() => setMenu(!menu)}
                className="flex md:hidden h-[30px] px-2  justify-center rounded-[10px] items-center bg-white"
              >
                {menu ? (
                  <MdOutlineClose color="#3559C7" size={15} />
                ) : (
                  <RiMenu3Fill color="#3559C7" size={15} />
                )}
              </div>
            </div>
            <div
              className={`overflow-hidden flex flex-col space-y-4 ${
                menu ? "h-[285px] p-3" : "h-[0px] p-0"
              }  bg-white  w-[100%] mt-1`}
            >
              <p
                onClick={scrollToServices}
                className="cursor-pointer text-[#3559C7] overflow-hidden font-[500]"
              >
                Services
              </p>
              <p
                onClick={scrollToCompany}
                className="cursor-pointer text-[#3559C7] font-[500] overflow-hidden"
              >
                Our Company
              </p>
              <p
                onClick={scrollToProjects}
                className="cursor-pointer text-[#3559C7] font-[500] overflow-hidden"
              >
                Projects
              </p>
              <p
                onClick={scrollToCertification}
                className="cursor-pointer text-[#3559C7] font-[500] overflow-hidden"
              >
                Certification
              </p>
              <p
                onClick={scrollToContact}
                className="cursor-pointer text-[#3559C7] font-[500] overflow-hidden"
              >
                Contact Us
              </p>
              <Link to={"/"}>
                <p className="text-[#3559C7]  cursor-pointer font-[500]">
                  Stablearc Group
                </p>
              </Link>
            </div>
          </div>
          <div className="flex mx-auto flex-col px-5">
            <h1 className="text-[26px] smx:text-[48px] mx-auto text-center md:text-[95px] tracking-[5px]">
              STABLEARC<span className="text-[#3559C7]">ENGINEERING</span>
            </h1>
            <h4 className="text-center font-[500]">
              At StableArc Engineering, we are dedicated to excellence in MEP
              contracting, and we <br /> look forward to the opportunity to
              partner with you on your next project{" "}
            </h4>
          </div>
          <div className="flex w-full justify-center">
            {/* <RxDoubleArrowDown size={60} /> */}
          </div>
        </div>
      </div>

      {/* ----------------------------------- */}

      <div
        ref={companyRef}
        className="grid items-center w-[96%] md:w-[70%] mt-[5%] mx-auto grid-cols-1 md:grid-cols-2 gap-x-10"
      >
        <h4 className="text-[#3559C7] text-center text-[32px] font-[600] ">
          Company Overview
        </h4>
        <div className="flex flex-col space-y-2">
          <p className="text-[#404040] text-center md:text-left">
            StableArc Engineering is a leading MEP (Mechanical, Electrical, and
            Plumbing) contracting company dedicated to providing comprehensive
            solutions for commercial, industrial, and residential projects. With
            a focus on quality, innovation, and reliability, we specialize in
            delivering tailored MEP services that meet the unique needs of each
            client{" "}
          </p>
        </div>
      </div>

      {/* --------------------------------- */}

      <div className="grid items-center space-y-6 md:space-y-0 grid-cols-1 md:grid-cols-2 gap-x-20 w-[90%] md:w-[70%] mx-auto mt-[5%]">
        <div className="flex shadow flex-col space-y-6 border-[1px] rounded-[10px] p-5">
          <h1 className="text-[#3559C7] text-[35px]">
            Our Values <span className="font-[400]">(QIISS)</span>
          </h1>
          <div className="flex flex-col">
            <h4 className="text-[#404040]">Quality</h4>
            <p className="text-[#404040]">
              We are committed to delivering excellence in every aspect of our
              work, from design and installation to maintenance and support.
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#404040]">Integrity</h4>
            <p className="text-[#404040]">
              We conduct business with honesty, transparency, and
              accountability, fostering trust and respect with our clients,
              partners, and employees.{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#404040]">Innovation</h4>
            <p className="text-[#404040]">
              We embrace innovation and continuous improvement, leveraging
              technology and best practices to deliver cutting-edge solutions
              that drive success.{" "}
            </p>
          </div>
          {/* <p className="ml-auto flex gap-x-2 text-[#3559C7] items-center">
            learn more <FaArrowRightLong />
          </p> */}
        </div>
        <div className="flex p-5 flex-col space-y-6 bg-[#3559C7] rounded-[10px]">
          <h1 className="text-[35px]">Mission</h1>
          <p>
            Our mission at StableArc Engineering is to exceed client
            expectations by delivering exceptional MEP contracting services with
            a commitment to quality, safety, and sustainability. We strive to be
            a trusted partner in every project, delivering innovative solutions
            that enhance the built environment and exceed industry standards.
          </p>
        </div>
      </div>

      {/* -------------------------------------- */}

      <div ref={servicesRef} className="flex mt-[5%] flex-col">
        <h1 className="text-center mb-8 mx-auto text-[#3559C7]">
          Our Services
        </h1>
        <div className="relative h-[1200px] lg:h-[600px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${out})` }}
          />
          <div className="absolute inset-0 bg-[black] opacity-70" />
          <div className="absolute inset-0  justify-center flex items-center p-6">
            <div className="items-center w-[90%]  mx-auto gap-x-10 grid-cols-1 smd:grid-cols-2  grid md:grid-cols-3">
              <div className="flex items-center mb-6 md:mb-0 p-8 space-y-6 flex-col bg-black opacity-50">
                <HiOutlineWrenchScrewdriver color="white" size={44} />
                <h4 className="text-white">Mechanical</h4>
                <p className="text-center">
                  Our mechanical engineering team provides comprehensive HVAC,
                  (Heating, Ventilation, and Air Conditioning), Elevator and
                  Escalators. solutions, including design, installation, repair,
                  and maintenance services for optimal indoor comfort and air
                  quality.
                </p>
              </div>
              <div className="flex items-center mb-6 md:mb-0 p-5 space-y-8 flex-col bg-[#EC3237]">
                <HiOutlineLightBulb color="white" size={50} />

                <h4 className="text-white">Electrical</h4>
                <p className="text-center">
                  Our mechanical engineering team provides comprehensive HVAC,
                  (Heating, Ventilation, and Air Conditioning), Elevator and
                  Escalators. solutions, including design, installation, repair,
                  and maintenance services for optimal indoor comfort and air
                  quality.
                </p>
              </div>
              <div className="flex items-center mb-6 md:mb-0 p-5 space-y-6 flex-col bg-[#3559C7]">
                <img
                  src={pipe}
                  className="w-[40px]"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <h4 className="text-white">Plumbing</h4>
                <p className="text-center">
                  Our mechanical engineering team provides comprehensive HVAC,
                  (Heating, Ventilation, and Air Conditioning), Elevator and
                  Escalators. solutions, including design, installation, repair,
                  and maintenance services for optimal indoor comfort and air
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------- */}

      <div className="flex mt-[5%] space-y-6 flex-col">
        <h4 className="text-[#3559C7] mx-auto text-[32px] font-[600] ">
          Key Differentiators
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 overflow-hidden w-[90%] md:w-[90%] mxl:w-[70%] mx-auto">
          <div className="flex gap-x-8 items-center rounded-[8px] mb-8 p-6 border-2">
            <h1 className="text-[#3559C7] w-[150px] text-[30px]">1</h1>
            <div className="flex space-y-2 flex-col">
              <h4 className="text-[#3559C7]">EXPERTISE</h4>
              <p className="text-[#404040]">
                Our team consists of highly skilled engineers, technicians, and
                tradespeople with extensive experience in MEP contracting,
                enabling us to tackle complex projects with confidence and
                precision.
              </p>
            </div>
          </div>
          <div className="flex gap-x-8 items-center rounded-[8px] mb-8 p-6 border-2">
            <h1 className="text-[#3559C7] w-[150px] text-[30px]">2</h1>
            <div className="flex space-y-2 flex-col">
              <h4 className="text-[#3559C7]">CUSTOM SOLUTIONS</h4>
              <p className="text-[#404040]">
                We take a customized approach to every project, collaborating
                closely with clients to understand their specific requirements
                and deliver tailored solutions that meet their goals and budget.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-x-8 items-center rounded-[8px] mb-8 p-6 border-2">
            <h1 className="text-[#3559C7] w-[150px] text-[30px]">3</h1>
            <div className="flex space-y-2 flex-col">
              <h4 className="text-[rgb(53,89,199)]">CLIENT FOCUS</h4>
              <p className="text-[#404040]">
                We prioritize open communication, responsiveness, and client
                satisfaction, striving to build long-term relationships based on
                trust, integrity, and mutual respect.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-x-8 items-center rounded-[8px] mb-8 p-6 border-2">
            <h1 className="text-[#3559C7] w-[150px] text-[30px]">4</h1>
            <div className="flex space-y-2 flex-col">
              <h4 className="text-[#3559C7]">INOVATION</h4>
              <p className="text-[#404040]">
                We stay at the forefront of industry trends and technological
                advancements, integrating innovative solutions and sustainable
                practices to deliver superior results that enhance efficiency,
                performance, and sustainability.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={projectsRef}
        className="relative h-[500px] lg:h-[300px] mt-[5%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pins})` }}
        />
        <div className="absolute inset-0 bg-[black] opacity-80" />
        <div className="absolute inset-0  justify-center flex items-center p-6">
          <div className="items-center w-[90%]  mx-auto space-y-8 flex flex-col">
            <h4 className="text-[#3559C7] font-[600] text-[30px]">
              Projects Portfolio
            </h4>
            <p className="text-center">
              StableArc Engineering has successfully completed a diverse range
              of projects across various industries, <br /> including commercial
              buildings, healthcare facilities, educational institutions,
              residential complexes, and <br /> industrial plants. Our portfolio
              showcases our expertise in delivering MEP solutions that are
              efficient, <br /> reliable, and cost-effective, exceeding client
              expectations and contributing to the success of each project
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}

      <div
        ref={certificationRef}
        className="grid mt-[5%] items-center grid-cols-1 smd:grid-cols-2 w-[90%] md:w-[60%] mx-auto gap-x-36"
      >
        <div className="flex">
          <h4 className="text-[#3559C7] mb-6 font-[600] text-[30px]">
            Certification & Accreditation
          </h4>
        </div>
        <div className="flex space-y-4 flex-col">
          <h4 className="text-[#404040] font-[600]">
            Licensed MEP Contractor (COREN){" "}
          </h4>
          <h4 className="text-[#404040] font-[600]">
            LEED Accredited Professionals
          </h4>
          <h4 className="text-[#404040] font-[600]">
            OSHA Certified Safety Training
          </h4>
          <h4 className="text-[#404040] font-[600]">
            NFPA (National Fire Protection Association) Compliance
          </h4>
        </div>
      </div>

      {/* ------------------------------- */}

      <div
        ref={contactRef}
        className="w-full flex justify-center mt-[5%] items-center p-5 md:p-10 bg-[#E2E5E4]"
      >
        <div className="flex flex-col md:flex-row w-full md:w-[80%] border-black justify-between">
          <div className="flex flex-col space-y-4 mb-10 md:mb-0">
            <div className="flex items-center gap-x-4">
              <h4 className="font-[600] text-black">Email us:</h4>
              <div className="flex flex-col">
                <p className="text-[#404040]">sales@stratolift.com</p>
                <p className="text-[#404040]">customercare@stratolift.com</p>
                <p className="text-[#404040]">info@stratolift.com</p>
              </div>
            </div>
            <img
              src={logo}
              width={200}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className="flex space-y-2 flex-col mb-10 md:mb-0">
            <h4 className="font-[500] text-[black]">NEWSLETTER:</h4>
            <div className="flex gap-x-6">
              <input
                className="border-2 rounded-[4px] outline-none bg-white p-2"
                placeholder="Your email here"
              />
              <button className="bg-[#3559C7] rounded-[8px] text-white font-[600] px-4">
                Subscribe
              </button>
            </div>
            <h4 className="font-[600] text-[black]">SOCIAL:</h4>
            <div className="flex gap-x-4">
              <img
                src={insta}
                className="w-[40px] h-[40px]"
                onContextMenu={(e) => e.preventDefault()}
              />
              <img
                src={face}
                className="w-[40px] h-[40px]"
                onContextMenu={(e) => e.preventDefault()}
              />
              <img
                src={tweet}
                className="w-[40px] h-[40px]"
                onContextMenu={(e) => e.preventDefault()}
              />
              <img
                src={link}
                className="w-[40px] h-[40px]"
                onContextMenu={(e) => e.preventDefault()}
              />
              <img
                src={pin}
                className="w-[40px] h-[40px]"
                onContextMenu={(e) => e.preventDefault()}
              />
              <img
                src={youtube}
                className="w-[40px] h-[40px]"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#3559C7] p-4">
        <p className="font-[500]">STRATOLIFT © 2024. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Engineering;
