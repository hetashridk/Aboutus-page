import Image from "next/image";
import vision from "../../public/images/vision.png"
import vision_wv from "../../public/images/vision_wv.png"

function Vision() {
    return ( 
    <>
        <div className="flex flex-col items-center justify-center md:flex-row">
            <div>
                <Image src={vision} className="sm:hidden"/>
                <Image src={vision_wv} className="hidden md:block" />
            </div>
            <div className="">
                <p className="text-3xl font-semibold text-center">Our Vision</p>
                <p className="text-[#2c2c2c] text-center p-5">Our vision is to enrich customer and stakeholder experience, embrace niche tools and technology and enable client profitability through innovation. We aspire to provide well-rounded financial solutions combining security, artificial intelligence and automation, unique conceptualisation and comprehensive business analysis. Our vision is to help accelerate client growth, strengthen their market base and amplify the volume of transactions through our quality-focused products (and associated services).</p>
            </div>
        </div>
    </>
    );
}

export default Vision;