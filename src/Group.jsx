import React, { useEffect } from "react";
import { useState, useRef } from "react";
import image from "./assets/construction.jpg";
import hero2 from "./assets/building.jpg";
import hero3 from "./assets/01.jpg";
import hero4 from "./assets/03.jpg";
import hero5 from "./assets/04.jpg";
import hero6 from "./assets/05.jpg";
import hero7 from "./assets/06.jpg";
import strato from "./assets/logo.png";
import groupLogo from "./assets/groupLogo.png";
import hero8 from "./assets/07.jpg";
import hero9 from "./assets/08.jpg";
import hero10 from "./assets/09.jpg";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import tweet from "./assets/tweet.png";
import link from "./assets/link.png";
import pin from "./assets/pin.png";
import youtube from "./assets/youtube.png";
import logo from "./assets/logo2.png";
import solar from "./assets/solar.jpg";
import image2 from "./assets/fetchpik.png";
import pillars from "./assets/pillars.png";
import worker2 from "./assets/worker2.jpeg";
import { RxDoubleArrowDown } from "react-icons/rx";
import energy from "./assets/energy.png";
import limited from "./assets/limited.png";
import tree from "./assets/tree.png";
import { RiArrowDropUpLine, RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Group = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 8) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const imageSlide = [
    { url: image },
    { url: hero2 },
    { url: hero8 },
    { url: hero4 },
    { url: hero9 },
    { url: hero5 },
    { url: hero6 },
    { url: hero7 },
    { url: hero10 },
  ];

  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);

  const newsRef = useRef();
  const companyRef = useRef();
  const projectsRef = useRef();
  const businessRef = useRef();
  const contactRef = useRef();

  const scrollToNews = () => {
    // setActiveTab("Education");
    if (newsRef.current) {
      newsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProducts = () => {
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
  const scrollToBusiness = () => {
    // setActiveTab("About me");
    if (businessRef.current) {
      businessRef.current.scrollIntoView({ behavior: "smooth" });
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
      <div className="relative  min-h-[95vh] md:h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSlide[currentState].url})` }}
        />
        <div className="absolute inset-0 bg-[black] opacity-70" />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex flex-col overflow-hidden w-full py-2 ">
            <div className="flex  justify-between py-2 overflow-hidden h-[60px] w-[90%] mx-auto">
              <img
                src={groupLogo}
                onContextMenu={(e) => e.preventDefault()}
                className="w-[140px] h-[60px]"
              />
              {/* <h4 className="text-[16px] font-[700]   tracking-[1px]">
                STABLEARC<span className="text-[#3559C7]">GROUP</span>
              </h4> */}

              <div className="flex flex-col  ">
                <div className="hidden  md:flex gap-x-10">
                  <p
                    onClick={() => setDrop(!drop)}
                    className="flex items-center gap-x-2 cursor-pointer hover:text-[#3559C7] font-[600]"
                  >
                    Our Subsidiaries{" "}
                    {drop ? (
                      <RiArrowDropUpLine size={22} />
                    ) : (
                      <RiArrowDropDownLine size={22} />
                    )}
                  </p>
                  <p
                    onClick={scrollToBusiness}
                    className="cursor-pointer hover:text-[#3559C7] font-[600]"
                  >
                    Businesses
                  </p>
                  {/* <p className="cursor-pointer hover:text-[#3559C7] font-[600]">
                    Projects
                  </p> */}
                  <p
                    onClick={scrollToNews}
                    className="cursor-pointer hover:text-[#3559C7] font-[600]"
                  >
                    News
                  </p>
                  <p
                    onClick={scrollToContact}
                    className="cursor-pointer hover:text-[#3559C7] font-[600]"
                  >
                    Contact Us
                  </p>
                </div>
                <div
                  className={`${
                    drop ? "flex" : "hidden"
                  } absolute top-[4%]  bg-white rounded-[8px] flex-col p-3`}
                >
                  <Link to={"stratolift"}>
                    <p className="text-[#404040] border-[#afafaf] pb-2 border-b-2 hover:text-[#3559C7] cursor-pointer font-[500]">
                      Stratolift
                    </p>
                  </Link>
                  <Link to={"stablearc-engineering"}>
                    <p className="text-[#404040] mt-2 hover:text-[#3559C7] cursor-pointer font-[500]">
                      Stablearc Engineering
                    </p>
                  </Link>
                </div>
              </div>
              <div
                onClick={() => setMenu(!menu)}
                className="flex md:hidden p-1 px-3 justify-center rounded-[10px] items-center bg-white"
              >
                {menu ? (
                  <MdOutlineClose color="#3559C7" size={15} />
                ) : (
                  <RiMenu3Fill color="#3559C7" size={15} />
                )}
              </div>
            </div>
            <div
              className={`overflow-hidden flex flex-col space-y-3 ${
                menu ? "h-[345px] p-3" : "h-[0px] p-0"
              }  bg-white  w-[100%] mt-1`}
            >
              <Link to={"stratolift"}>
                <p className="text-[#3559C7] border-[#afafaf] phover:text-[#3559C7] cursor-pointer font-[500]">
                  Stratolift
                </p>
              </Link>
              <Link to={"stablearc-engineering"}>
                <p className="text-[#3559C7] hover:text-[#3559C7] cursor-pointer font-[500]">
                  Stablearc Engineering
                </p>
              </Link>

              <p className="cursor-pointer text-[#3559C7] font-[500] overflow-hidden">
                Businesses
              </p>
              <p className="cursor-pointer text-[#3559C7] font-[500] overflow-hidden">
                Projects
              </p>
              <p className="cursor-pointer text-[#3559C7] font-[500] overflow-hidden">
                Our Team
              </p>
              <p className="cursor-pointer text-[#3559C7] font-[500] overflow-hidden">
                Contact Us
              </p>
            </div>
          </div>
          {/* <div className="flex mt-8  mx-auto ">
            <h1 className="text-[26px] smx:text-[48px] mx-auto text-center md:text-[95px] tracking-[5px]">
              STABLEARC<span className="text-[#3559C7]">GROUP</span>
            </h1>
          </div> */}
          <div className="flex w-full justify-center">
            <div className="flex items-center gap-x-4">
              <img src={energy} onContextMenu={(e) => e.preventDefault()} />
              <img
                src={strato}
                className="w-[250px] h-[35px] "
                onContextMenu={(e) => e.preventDefault()}
              />

              <img src={limited} onContextMenu={(e) => e.preventDefault()} />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------- */}

      <div className="grid items-center w-[90%] md:w-[70%] mt-[5%] mx-auto grid-cols-1 md:grid-cols-2 gap-x-10">
        <h4 className="text-[#3559C7] text-center mb-10 md:mb-0 text-[32px] font-[600] ">
          Providing Basic Needs
        </h4>
        <div className="flex flex-col space-y-2">
          <p className="text-[#404040] text-center md:text-left">
            We are a diversified and fully integrated conglomerate. The Group’s
            interests span a range of sectors in Nigeria and across Africa.
          </p>
          <p className="text-[#404040] text-center md:text-left">
            The core business focus of the Group, which started operations in
            1978, is to provide local, value-added products and services that
            meet the ‘basic needs’ of the populace.
          </p>
        </div>
      </div>

      {/* ----------------------------------------------------- */}

      <div ref={businessRef} className="flex items-center mt-[5%] flex-col">
        <h4 className="text-[#3559C7] mb-4 font-[600] text-[32px]">
          Our Businesses
        </h4>
        <p className="text-[#404040] text-center">
          As a diversified conglomerate, our interest in multiple industries
          indicates our <br /> determination to cater to our vision of providing
          basic needs.
        </p>
        <img src={tree} onContextMenu={(e) => e.preventDefault()} />
      </div>

      {/* -------------------------------------------------------------- */}

      <div className="relative h-[800px] md:h-[600px] mt-[5%]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image2})` }}
        />
        <div className="absolute inset-0 bg-[black] opacity-80" />
        <div className="absolute inset-0  justify-center flex items-center p-6">
          <div className="items-center w-[90%]  mx-auto grid-cols-1 grid md:grid-cols-2">
            <div className="flex flex-col mb-5 md:mb-0">
              <p className="text-white text-[12px]">Sustainability</p>
              <h1>Building prosperity & self-sufficiency</h1>
              <p>
                At StableArc, our approach to sustainability goes beyond
                compliance with regulatory expectations. We are driven by a
                desire to contribute to, and positively impact the development
                of our host communities and society at large
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={pillars}
                width={450}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------- */}

      <div ref={newsRef} className="flex flex-col  mt-[5%] w-[90%] mx-auto ">
        <h1 className="text-[#3559C7]">News</h1>
        <div className="flex flex-col md:flex-row  justify-between">
          <div className="flex  border-red-900 flex-col space-y-6 w-full md:w-[60%]">
            <div className="flex min-h-[170px] rounded-[8px] relative flex-col p-5 ">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${worker2})` }}
              />
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="absolute inset-0 p-5 flex flex-col">
                <h4 className="font-[600]">PRESS RELEASE</h4>
                <p>
                  StableArch Group $700million BIP investments will promote
                  infrastructure development
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20  w-full">
              <div className="flex mb-5 md:mb-0 min-h-[170px] rounded-[8px] relative flex-col p-5 ">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${solar})` }}
                />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="absolute inset-0 p-5 flex flex-col">
                  <h4>PRESS RELEASE</h4>
                  <p>
                    StableArch Group $700million BIP investments will promote
                    infrastructure development{" "}
                  </p>
                </div>
              </div>
              <div className="flex min-h-[170px] rounded-[8px] relative flex-col p-5 ">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${solar})` }}
                />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="absolute inset-0 p-5 flex flex-col">
                  <h4>PRESS RELEASE</h4>
                  <p>
                    StableArch Group $700million BIP investments will promote
                    infrastructure development{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-5 md:mt-0 md:w-[30%] min-h-[250px] rounded-[8px] relative flex-col p-5 ">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${solar})` }}
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 p-5 flex flex-col">
              <h4>PRESS RELEASE</h4>
              <p>
                StableArch Group $700million BIP investments will promote
                infrastructure development StableArch Group $700million BIP
                investments will promote infrastructure development
              </p>
            </div>
          </div>
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
            <h4 className="text-[16px] font-[700]   tracking-[1px]">
              STABLEARC<span className="text-[#3559C7]">GROUP</span>
            </h4>
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

export default Group;
