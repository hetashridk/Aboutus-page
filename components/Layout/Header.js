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
      <Image src={header} className="absolute top-0 left-0" />
      <nav className="flex absolute top-6 left-12 right-0 bottom-0 z-10">
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
      <div className="relative top-32 p-32">
        <p className="text-white text-2xl text-center font-semibold">
          Our aim is to help accelerate client growth, strengthen their market
          base and amplify the volume of transactions through our
          quality-focused products.
        </p>
        <button className="relative left-[30rem] text-2xl font-semibold text-white m-5 border-none rounded-xl bg-blue-700 px-10 py-3">
          Contact us
        </button>
      </div>
    </>
  );
}

export default Header;
