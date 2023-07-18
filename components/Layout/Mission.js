import Image from "next/image";
import mission_mv from "../../public/images/mission_mv.png";
import mission_wv from "../../public/images/mission_wv.png";

function Mission() {
    return (
    <>
        <div className="bg-black mt-10">
            <div className="flex flex-col items-center justify-center">
                <Image src={mission_mv} className="mt-7 sm:hidden" />
                <Image src={mission_wv} className="mt-7 hidden md:block" />
                <p className="text-white text-7xl hidden md:block">Mission</p>
                <p className="text-white p-4 text-center md:px-44 md:pb-11">At Fintract Global, we offer our fintech expertise to financial entities to revolutionise, innovate, and automate their businesses. Our expertise lies in devising fintech products and platforms, catering to organisations’ specific needs and enabling their effective implementation at an operational level. We align our efforts with the client’s digital and innovation strategy to enhance customers and shareholders’ performance. Our mission is the targeted and skillful use of technology to transform fintech challenges into viable commercial opportunities.
                </p>
            </div>
        </div>
    </>
    );
}

export default Mission;