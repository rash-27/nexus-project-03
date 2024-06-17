import CultureCard from "./CultureCard"
import { TfiThought } from "react-icons/tfi";
import { IoExtensionPuzzleOutline } from "react-icons/io5"
import { FaLink } from "react-icons/fa";

function Culture() {

    return (
      <>
        <div className="py-4 bg-gray-200">
            <div data-aos="fade-down" className="text-center font-normal text-bold text-green-600 pt-12 text-lg pb-2">OUR CULTURE</div>
            <div className="text-center text-2xl sm:text-3xl font-heading pb-4" >Our Fundemental Business</div>
            <div className="flex flex-col sm:flex-row justify-around px-6">
                <CultureCard description="Our vision is to empower businesses to flourish in the digital realm by providing them with uniquely tailored websites." 
                title="Vision"
                imageLogo={<TfiThought className="text-green-600" />}
                />
                <CultureCard description="To ensure that every business can establish a strong online presence by offering them personalized website" 
                title="Mission"
                imageLogo={<IoExtensionPuzzleOutline className="text-green-600" />}
                />
                <CultureCard description="Our motto is to expand our services with an affordable budget, ensuring accessibility to our high-quality web development" 
                title="Motto"
                imageLogo={<FaLink className="text-green-600" />}
                />
            </div>
        </div>
      </>
    )
  }
  
  export default Culture
  