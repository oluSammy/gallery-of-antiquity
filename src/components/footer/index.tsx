import Link from "next/link";
import { FaPhone, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLocationSharp, IoMailOutline } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-[#232323] py:8 lg:py-14">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="grid grid-cols-12 sans py-16 border-b border-spacing-y-0.5 border-[#575757]">
          <div className="lg:col-span-6 col-span-full grid grid-cols-12 gap-x-5">
            <div className="lg:col-span-7 col-span-full mb-4 lg:mb-0">
              <p className="text-[#DEDCDC] font-normal text-3xl lg:text-4xl mb-6 ">
                Get latest news and visitors Updates
              </p>
              <form className="w-full border rounded-full h-14 flex justify-between p-1 ">
                <input
                  type="search"
                  placeholder="example@gmail.com"
                  className="bg-transparent border-none px-2 rounded-full w-fit text-[#989898] outline-none sans "
                />
                <button className="h-full px-4 rounded-full font-semibold bg-[#FA0303] text-white text-base">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="lg:col-span-5 col-span-full mb-8 mt-4 lg:mt-0 lg:mb-0">
              <p className="font-bold text-xl text-white mb-4">
                Dap Experience Centre
              </p>
              <ul>
                <li className="flex items-start mb-3">
                  <IoLocationSharp color="#FF4250" size="20" />
                  <span className="ml-4 font-normal text-[#B4B3B3] text-sm">
                    34, Allen Avenue, Adam road Lagos state
                  </span>
                </li>
                <li className="flex items-start mb-3">
                  <IoMailOutline color="#FF4250" size="20" />
                  <span className="ml-4 font-normal text-[#B4B3B3] text-sm">
                    support@gmail.com
                  </span>
                </li>
                <li className="flex items-start mb-3">
                  <FaPhone color="#FF4250" size="20" />
                  <span className="ml-4 font-normal text-[#B4B3B3] text-sm">
                    +234 8100096530
                  </span>
                </li>
              </ul>
              <div className="flex items-center">
                <Link href="/" className="mr-3">
                  <div className="bg-white w-5 h-5 rounded-full flex items-center justify-center">
                    <TiSocialFacebook />
                  </div>
                </Link>
                <Link href="/" className="mr-3">
                  <div className="bg-white w-5 h-5 rounded-full flex items-center justify-center">
                    <FaTwitter size="10" />
                  </div>
                </Link>
                <Link href="/" className="mr-3">
                  <div className="bg-white w-5 h-5 rounded-full flex items-center justify-center">
                    <FaInstagram size="10" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 col-span-full lg:col-span-6 text-[#B4B3B3]">
            <div className="col-span-3">
              <h6 className="text-white font-bold text-2xl mb-4">Visit</h6>
              <ul className=" text-sm font-normal">
                <p className=" mb-3">Plan your Visit</p>
                <p className=" mb-3">Book Tickets</p>
                <p className=" mb-3">Group Visit</p>
              </ul>
            </div>
            <div className="col-span-3">
              <h6 className="text-white font-bold text-xl mb-2 lg:text-2xl lg:mb-4">
                Learn
              </h6>
              <ul className="text-sm font-normal">
                <p className=" mb-3">History of state</p>
                <p className="mb-3">Library</p>
              </ul>
            </div>
            <div className="col-span-3">
              <h6 className="text-white font-bold text-xl mb-2 lg:text-2xl lg:mb-4">
                Product
              </h6>
              <ul className=" text-sm font-normal">
                <p className=" mb-3">Pictures</p>
                <p className="mb-3">Nigeria Souvenir</p>
                <p className="mb-3">Books</p>
              </ul>
            </div>
            <div className="col-span-3">
              <h6 className="text-white font-bold text-xl mb-2 lg:text-2xl lg:mb-4">
                Others
              </h6>
              <ul className="text-sm font-normal">
                <p className=" mb-3">About</p>
                <p className="mb-3">Donate</p>
                <p className="mb-3">Admin</p>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col text-xs md:text-sm lg:text-base items-center justify-between text-[#E7EAF6] sans font-light mt-8">
          <div className="flex items-center">
            <p className="mr-3">&copy; {new Date().getFullYear()} </p>
            <span className="mr-3">Dap Experience Centre.</span>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex items-center">
            <p className="mr-3">Privacy</p>
            <p>Terms Of use</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
