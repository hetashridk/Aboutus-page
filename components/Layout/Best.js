import Image from "next/image";
import time from "../../public/images/time.png";
import security from "../../public/images/security.png";
import work from "../../public/images/work.png";


function Best() {
    return (
        <>
        <div className="mt-10">
            <div>
                <p className="text-center text-4xl font-semibold">Why we are the best</p>
                <p className="text-center text-[#666666] mt-7 text-xl">We provide our innovative way for digital</p>
                <p className="text-center text-[#666666] text-xl"> payment which is secure and easy to use.</p>
            </div>
            <div className="flex items-center justify-center mt-7">
                <button className="bg-blue-600 py-5 px-7 text-white space-x-10">Get Started</button>
                <button className="border border-black border-solid py-5 px-7 ml-10">Know More</button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center m-10 mt-10">
                <div className="border border-solid border-black mt-10 md:ml-5 md:p-2">
                    <div className="p-5 md:pl-1 md:pt-1">
                    <Image src={time} className="" />
                    </div>
                    <div className="pl-5 pb-5 md:pl-0">

                    <p className="text-4xl">On time</p>
                    </div>
                    <div className="p-2 md:p-0 md:pb-12">
                        
                    <p className="text-[#2C2C2C]">Fintract global value your time. We provide all our services to you on time without any delay or hindrance. Our  clients and their time are very valuable to us. Our products are created from cutting edge technologies which are able to provide on time services.</p>
                    </div>
                </div>
                <div className="border border-solid border-black mt-10 md:ml-5 md:p-2">
                    <div className="p-5 md:pl-1 md:pt-1">
                    <Image src={security} className="" />
                    </div>
                    <div className="pl-5 pb-5 md:pl-0">

                    <p className="text-4xl">Security</p>
                    </div>
                    <div className="p-2 md:p-0 md:pb-12">
                        
                    <p className="text-[#2C2C2C]">Fintract Global takes your security very seriously. We do not disclose any private
information of our clients to anyone which includes account details. We store your private data very securely.</p>
                    </div>
                </div>
                <div className="border border-solid border-black mt-10 md:ml-5 md:p-2">
                    <div className="p-5 md:pl-1 md:pt-1">
                    <Image src={work} className="" />
                    </div>
                    <div className="pl-5 pb-5 md:pl-0">

                    <p className="text-4xl">Fast work turnaround</p>
                    </div>
                    <div className="p-2 md:p-0">
                        
                    <p className="text-[#2C2C2C]">Our products (open banking, SME Lending, fraudify... etc) are created from cutting edge technologies because of which we are able to process and provide all the services very rapidly.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Best;