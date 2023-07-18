import Aboutus from "@/components/Layout/Aboutus";
import Best from "@/components/Layout/Best";
import Contact from "@/components/Layout/Contact";
import Header from "@/components/Layout/Header";
import Mission from "@/components/Layout/Mission";
import Success from "@/components/Layout/Success";
import Vision from "@/components/Layout/Vision";



function Index() {
  return (
    <>
      <Header />
      <Aboutus />
      <Success />
      <Mission />
      <Best />
      <Vision />
      <Contact />
    </>
  
  );
}

export default Index;