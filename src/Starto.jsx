import React, { useRef } from "react";
import { useState } from "react";
import "./App.css";
import image from "./assets/building.jpeg";
import logo from "./assets/logo.png";
import gold from "./assets/gold.jpeg";
import platinum from "./assets/platinum.jpeg";
import worker from "./assets/worker.jpeg";
import diamond from "./assets/diamond.jpeg";
import worker2 from "./assets/worker2.jpeg";
import man from "./assets/man.jpeg";
import insta from "./assets/insta.png";
import face from "./assets/face.png";
import tweet from "./assets/tweet.png";
import link from "./assets/link.png";
import pin from "./assets/pin.png";
import youtube from "./assets/youtube.png";
import { RxDoubleArrowDown } from "react-icons/rx";
import { FaCompassDrafting } from "react-icons/fa6";
import { GoPlug } from "react-icons/go";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const Starto = () => {
  const [menu, setMenu] = useState(false);

  const servicesRef = useRef();
  const productsRef = useRef();
  const projectsRef = useRef();
  const teamRef = useRef();
  const contactRef = useRef();

  const scrollToServices = () => {
    // setActiveTab("Education");
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProducts = () => {
    // setActiveTab("Courses");
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProjects = () => {
    // setActiveTab("Experience");
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToTeam = () => {
    // setActiveTab("About me");
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
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
      <div className="relative min-h-[85vh] md:h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-[black] opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex flex-col w-full b">
            <div className="flex justify-between py-2 w-[90%] mx-auto">
              <img src={logo} width={200} />
              <div className="hidden md:flex gap-x-10">
                <p
                  onClick={scrollToServices}
                  className="cursor-pointer hover:text-[#EC3237] font-[600]"
                >
                  Services
                </p>
                <p
                  onClick={scrollToProducts}
                  className="cursor-pointer hover:text-[#EC3237] font-[600]"
                >
                  Products
                </p>
                <p
                  onClick={scrollToProjects}
                  className="cursor-pointer hover:text-[#EC3237] font-[600]"
                >
                  Projects
                </p>
                <p
                  onClick={scrollToTeam}
                  className="cursor-pointer hover:text-[#EC3237] font-[600]"
                >
                  Our Team
                </p>
                <p
                  onClick={scrollToContact}
                  className="cursor-pointer hover:text-[#EC3237] font-[600]"
                >
                  Contact
                </p>
              </div>
              <div
                onClick={() => setMenu(!menu)}
                className="flex md:hidden p-1 px-3 justify-center rounded-[10px] items-center bg-white"
              >
                {menu ? (
                  <MdOutlineClose color="#EC3237" size={15} />
                ) : (
                  <RiMenu3Fill color="#EC3237" size={15} />
                )}
              </div>
            </div>
            <div
              className={`overflow-hidden flex flex-col space-y-4 ${
                menu ? "h-[245px] p-3" : "h-[0px] p-0"
              }  bg-white  w-[100%] mt-1`}
            >
              <p className="cursor-pointer text-[#EC3237] overflow-hidden font-[500]">
                Services
              </p>
              <p className="cursor-pointer text-[#EC3237] font-[500] overflow-hidden">
                Products
              </p>
              <p className="cursor-pointer text-[#EC3237] font-[500] overflow-hidden">
                Projects
              </p>
              <p className="cursor-pointer text-[#EC3237] font-[500] overflow-hidden">
                Our Team
              </p>
              <p className="cursor-pointer text-[#EC3237] font-[500] overflow-hidden">
                Contact
              </p>
            </div>
          </div>
          <div className="flex mx-auto flex-col">
            <img src={logo} />
            <h4 className="text-center font-[500]">
              RISE HIGH WITH STRATOLIFT
            </h4>
          </div>
          <div className="flex w-full justify-center">
            <RxDoubleArrowDown size={50} />
          </div>
        </div>
      </div>

      {/* ----------------------------------- */}

      <div
        ref={servicesRef}
        className="flex flex-col mt-[5%]  w-full py-10 bg-[#F6F8F7]"
      >
        <h1 className="text-[#EC3237] mt-10 mx-auto text-center">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[60%] mt-16 overflow-hidden gap-x-20 mx-auto">
          <div className="flex flex-col space-y-3 justify-center items-center h-[300px] shadow-lg mb-20 rounded-[8px] bg-[white]">
            <div className="flex p-2 bg-[#FF797D]">
              <FaCompassDrafting className="" color="#292E3D" size={28} />
            </div>
            <div className="flex bg-[grey] h-[2px] w-[50px]"></div>
            <h4 className="text-center text-[#EC3237]">Manufacturing</h4>
          </div>
          <div className="flex flex-col space-y-3 justify-center items-center h-[300px] shadow-lg mb-20 rounded-[8px] bg-[#EC3237]">
            <div className="flex p-2 bg-[#FF797D]">
              <GoPlug className="" color="white" size={28} />
            </div>
            <div className="flex bg-[white] h-[2px] w-[50px]"></div>
            <h4 className="text-center text-[white]">Installation</h4>
          </div>
          <div className="flex flex-col space-y-3 justify-center items-center h-[300px] shadow-lg mb-20 rounded-[8px] bg-[#EC3237]">
            <div className="flex p-2 bg-[#FF797D]">
              <BiSolidBriefcaseAlt2 className="" color="white" size={28} />
            </div>
            <div className="flex bg-[white] h-[2px] w-[50px]"></div>
            <h4 className="text-center text-[white]">Maintenance</h4>
          </div>
          <div className="flex flex-col space-y-3 justify-center items-center h-[300px] shadow-lg mb-20 rounded-[8px] bg-[white]">
            <div className="flex p-2 bg-[#FF797D]">
              <FaHandshakeAngle className="" color="#292E3D" size={28} />
            </div>
            <div className="flex bg-[grey] h-[2px] w-[50px]"></div>
            <h4 className="text-center text-[#EC3237]">
              Elevator Consultation
            </h4>
          </div>
        </div>
      </div>

      {/* ------------------------------------------- */}

      <div
        ref={projectsRef}
        className="flex-col flex md:flex-row justify-between items-center w-[90%] md:w-[70%] mx-auto mt-[5%]"
      >
        <h1 className="mb-10 md:mb-0 text-center text-[#EC3237]">Projects</h1>
        <div className="grid w-full md:w-[60%] grid-cols-1 smx:grid-cols-2 gap-x-10">
          <div className="relative h-[300px] rounded-[8px] mb-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${gold})` }}
            />

            <div className="absolute inset-0 bg-[black] opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h4 className="text-[white]">Altura Gold</h4>
              <div className="flex bg-[white] h-[2px] w-[50px]"></div>
            </div>
          </div>
          <div className="relative h-[300px] rounded-[8px] mb-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${platinum})` }}
            />

            <div className="absolute inset-0 bg-[black] opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h4 className="text-[white]">Altura Platinum</h4>
              <div className="flex bg-[white] h-[2px] w-[50px]"></div>
            </div>
          </div>
          <div className="relative h-[300px] rounded-[8px] mb-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${diamond})` }}
            />

            <div className="absolute inset-0 bg-[black] opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h4 className="text-[white]">Altura Diamond</h4>
              <div className="flex bg-[white] h-[2px] w-[50px]"></div>
            </div>
          </div>
          <div className="relative h-[300px] rounded-[8px] mb-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${worker})` }}
            />

            <div className="absolute inset-0 bg-[black] opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h4 className="text-[white]">Altura Executive</h4>
              <div className="flex bg-[white] h-[2px] w-[50px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------- */}

      <div className="mt-[5%] relative w-full h-[200px] ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${worker2})` }}
        />

        <div className="absolute inset-0 bg-[black] opacity-50"></div>
        <div className="absolute inset-0 flex justify-between items-center px-4 smd:px-20">
          <div className="flex space-y-4 flex-col">
            <h4 className="text-[white] font-[600]">
              Book technical consultation
            </h4>
            <p>Send us an email: info@stratolift.com</p>
          </div>
          <button className="border-white p-3 px-5 text-[13px] font-[600] border-2 rounded-[4px]">
            Get Quotation
          </button>
        </div>
      </div>

      {/* ----------------------- */}

      <div
        ref={productsRef}
        className="flex w-[90%] md:w-[80%] mt-[5%] mx-auto flex-col"
      >
        <h1 className="text-[#EC3237] mx-auto">Our Products</h1>
        <div className="grid w-full md:w-[60%] mx-auto mt-[4%] grid-cols-1 smx:grid-cols-2 gap-x-10">
          <div className="relative h-[300px] rounded-[8px] mb-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${gold})` }}
            />

            <div className="absolute inset-0 bg-[black] opacity-50"></div>
            <div className="absolute inset-0 ml-10 flex flex-col justify-center">
              <h4 className="text-[white] px-2 border-l-4">Strato Gold</h4>
            </div>
          </div>
          <div className="relative h-[300px] rounded-[8px] mb-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${platinum})` }}
            />

            <div className="absolute inset-0 bg-[black] opacity-50"></div>
            <div className="absolute inset-0 ml-10 flex flex-col justify-center">
              <h4 className="text-[white] px-2 border-l-4">Strato Platinum</h4>
            </div>
          </div>
          <div className="relative h-[300px] rounded-[8px] mb-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${diamond})` }}
            />

            <div className="absolute inset-0 bg-[black] opacity-50"></div>
            <div className="absolute inset-0 ml-10 flex flex-col justify-center">
              <h4 className="text-[white] px-2 border-l-4">Strato Diamond</h4>
            </div>
          </div>
          <div className="relative h-[300px] rounded-[8px] mb-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${worker})` }}
            />

            <div className="absolute inset-0 bg-[black] opacity-50"></div>
            <div className="absolute inset-0 ml-10 flex flex-col justify-center">
              <h4 className="text-[white] px-2 border-l-4">Strato Executive</h4>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------- */}
      <div className="flex flex-col md:flex-row items-center w-[90%] md:w-[65%] mt-[5%] mx-auto">
        <div className="relative h-[550px] w-full md:w-[80%] rounded-[8px] mb-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${man})` }}
          />

          <div className="absolute inset-0 bg-[black] opacity-50"></div>
        </div>
        <div className="flex flex-col space-y-6 md:ml-[-90px] rounded-[10px] mt-[-180px] md:mt-[0] h-max z-10 w-[90%] md:w-[400px] bg-[#EC3237] p-4">
          <h4 className="font-[600]">About us</h4>
          <p>
            StraroLift is a global leader in the manufacturing, installation,
            and maintenance of luxury home lifts that introduce cutting-edge
            technology to guarantee safe, reliable, fast, and convenient lift
            and elevator experiences that meet the requirements of evolving
            urban architecture. With over two decades of combined experience
          </p>
          <p className="ml-auto flex gap-x-2 text-[#E6FF28] items-center">
            learn more <FaArrowRightLong />
          </p>
        </div>
      </div>

      {/* ------------------------------------------------ */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 w-[90%] md:w-[60%] mt-[5%]  mx-auto items-center">
        <div className="flex flex-col mb-14 md:mb-0 border-2 h-max p-4 space-y-5 rounded-[8px] shadow-xl">
          <h4 className="font-[600] text-[#EC3237]">Our Value</h4>
          <p className="text-[#2d2d2d]">
            People . Safety. Innovation. Integrity. Customer centered services.
            Our dedication to creating a customer-centric brand through our core
            values of safety, innovative products, integrity, and people-centric
            culture has led to our current success in producing rich lift and
            elevator solutions in response to customer needs that meet evolving
            urban architecture. Our values describe how StratoLift, as a brand,
            and our employees behave and are the principles upon which we base
            our business relationships.
          </p>
          <p className="ml-auto flex gap-x-2 text-[#EC3237] items-center">
            learn more <FaArrowRightLong />
          </p>
        </div>
        <div className="flex space-y-14 flex-col">
          <div className="flex rounded-[10px] p-8 flex-col bg-[#EC3237]">
            <h4 className="font-[600]">Vission</h4>
            <p>
              At StratoLift, our vision is to dominate the global lift and
              elevator market, providing our consumers with cutting-edge
              technology that enhances safety and elevates quality of life.
            </p>
          </div>
          <div className="flex flex-col rounded-[10px] p-8 bg-[#EC3237]">
            <h4 className="font-[600]">Mission</h4>
            <p>
              Through our luxury and premium home lifts and elevators, designed
              to fulfil residential needs, enhance the quality of life, and meet
              evolving urban architecture.
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------------------- */}

      <div
        ref={teamRef}
        className="grid grid-cols-1 md:grid-cols-2 mt-[5%] mx-auto w-[90%] md:w-[70%]"
      >
        <div className="flex  flex-col bg-[#EC3237] z-10 shadow-xl rounded-[10px]">
          <div className="flex flex-col mt-6 p-8">
            <h4>OUR</h4>
            <h1>TEAM</h1>
          </div>
          <div className="flex bg-white border-2 py-4 justify-center items-center mt-28">
            <img src={logo} width={300} />
          </div>
        </div>
        <div className="flex md:ml-[-20px] flex-col space-y-6 border-2 p-4 md:px-16  rounded-[10px]">
          <h4 className="mx-auto font-[600] text-[#EC3237]">Management</h4>
          <div className="flex space-y-2 flex-col">
            <h4 className="text-[#303030] font-[600]">
              Engr. Henrich Bankole Akomolafe
            </h4>
            <p className="text-[grey]">Founder/ Chief Executive Officer</p>
          </div>
          <div className="flex space-y-2 flex-col">
            <h4 className="text-[#303030] font-[600]">
              Samuel Ebiminiwei Abise
            </h4>
            <p className="text-[grey]">
              Business Development officer & Head of Marketing and Communication
            </p>
          </div>
          <div className="flex space-y-2 flex-col">
            <h4 className="text-[#303030] font-[600]">Tunde Adejumo</h4>
            <p className="text-[grey]">Company Secretary and Head of Legal</p>
          </div>
          <h4 className="text-[#303030] font-[600]">Chief Financial Officer</h4>
          <h4 className="text-[#303030] font-[600]">Head of Sales</h4>
          <h4 className="text-[#303030] font-[600]">Human Resource Officier</h4>
          <h4 className="text-[#303030] font-[600]">Board of Directors</h4>
        </div>
      </div>

      {/* ----------------------------------------------------- */}

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
            <img src={logo} width={500} />
          </div>
          <div className="flex space-y-2 flex-col mb-10 md:mb-0">
            <h4 className="font-[500] text-[black]">NEWSLETTER:</h4>
            <div className="flex gap-x-6">
              <input
                className="border-2 rounded-[4px] outline-none bg-white p-2"
                placeholder="Your email here"
              />
              <button className="bg-[#EC3237] rounded-[8px] text-white font-[600] px-4">
                Subscribe
              </button>
            </div>
            <h4 className="font-[600] text-[black]">SOCIAL:</h4>
            <div className="flex gap-x-4">
              <img src={insta} className="w-[40px] h-[40px]" />
              <img src={face} className="w-[40px] h-[40px]" />
              <img src={tweet} className="w-[40px] h-[40px]" />
              <img src={link} className="w-[40px] h-[40px]" />
              <img src={pin} className="w-[40px] h-[40px]" />
              <img src={youtube} className="w-[40px] h-[40px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#EC3237] p-4">
        <p className="font-[500]">STRATOLIFT © 2024. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Starto;
