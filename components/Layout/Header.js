import Image from "next/image";
import header from "../../public/images/header.png";
import FG_LOGO_white_4 from "../../public/images/FG_LOGO_white_4.png";
import hamburger_menu from "../../public/images/hamburger_menu.png";
import close_menu from "../../public/images/close_menu.png";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      
      <nav className="fixed flex z-10">
        <div>
          {/* <Link to="/"> */}
          <Image src={FG_LOGO_white_4} width={55} />
          {/* </Link> */}
        </div>
        <div className="absolute left-36">
          <button className="text-white space-x-4 text-1xl">
            More
            <svg
              className="absolute right-4"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
          </button>
          {/* <button className="text-white space-x-4">Products</button> */}
        </div>
      </nav>

      <div className="w-full overflow-x-clip">
      <div className="flex flex-col bg-cover h-[800px]">
      <Image src={header} className="" />

      <div className="absolute flex flex-wrap items-center justify-center m-16 lg:p-12 lg:mt-[13.75rem] md:p-18">
        <p className="text-white text-[0.8rem] text-center sm:font-semibold sm:text-2xl">
          Our aim is to help accelerate client growth, strengthen their market
          base and amplify the volume of transactions through our
          quality-focused products.
        </p>
        <div className="flex items-center justify-center">

        <button className="mt-2 text-[10px] sm:text-2xl font-semibold px-1 py-1 text-white sm:m-5 border-none rounded-xl bg-blue-700 sm:px-10 sm:py-3">
          Contact us
        </button>
        </div>
      </div>
      </div>

      </div>
    </>
  );
}

export default Header;
