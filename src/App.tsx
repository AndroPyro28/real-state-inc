import Navbar from "./components/Navbar"
import 'tailwindcss/tailwind.css';
import '@fontsource/roboto'; // Import the Google Font
import HeroSection from "./components/Hero";
import Filters from "./components/Filters";
import Details from "./components/Details";

function App() {
    
  return (
    <main className='font-roboto'>
        <Navbar />
        {/* // @ts-nocheck 
        // @ts-ignore  */}
        <marquee className="bg-gray-200 h-[50px] text-xl  flex items-center">Limited Time Offer! Get [30]% Off on Your Dream Home Purchase!  Don't Miss Out on This Exclusive Real Estate Discount! Contact Us Now</marquee>
        <HeroSection />
        <Details />
        <Filters />
    </main>
  )
}

export default App
