import Navbar from "./components/Navbar"
import 'tailwindcss/tailwind.css';
import '@fontsource/roboto'; // Import the Google Font
import HeroSection from "./components/Hero";
import Filters from "./components/Filters";
import Details from "./components/Details";
import Properties from "./components/Properties";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  return (
    <section className='font-roboto w-full'>
        <Navbar />
        {/* // @ts-nocheck 
        // @ts-ignore  */}
        <marquee className="bg-gray-200 h-[50px] text-xl  flex items-center">Limited Time Offer! Get [30]% Off on Your Dream Home Purchase!  Don't Miss Out on This Exclusive Real Estate Discount! Contact Us Now</marquee>
        <HeroSection />
        <Details />
        <Filters setLocation={setLocation} setName={setName}/>
        <Properties location={location} name={name} />
        <Footer />
    </section>
  )
}

export default App
