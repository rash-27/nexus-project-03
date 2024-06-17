import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
function AboutHome() {
    const navigate = useNavigate();
    return (
      <>
        <div className="flex flex-col sm:flex-row justify-center px-3 sm:px-12 py-10 bg-gray-100 border-b border-gray-300 drop-shadow-xl">
            <div data-aos="fade-right" className="px-5 pb-10 sm:py-10 pr-4">
                <div className="font-normal text-normal text-green-600">ABOUT US</div>
                <div className="font-heading text-2xl sm:text-4xl py-3 sm:py-6">We specialize in creating websites that fit your budget perfectly. </div>
                <div className="font-normal text-normal">
                At Nexus Info, we offer tailored website solutions designed for your business. Coupled with business growth ideas and strategies, our goal is to foster the expansion of your business. We believe in making every business thrive in both digital and offline realms. “Join the future trend of business with the help of Nexus Info, and let’s grow together.
                </div>
                <div className="pt-4 flex">
                    <div className="flex text-white px-3 py-2 font-normal text-md rounded-lg bg-green-600 justify-center" onClick={()=>navigate('/about')}>
                        <div className="">About Us</div>
                        <div className="flex flex-col justify-center">
                        <CiLocationArrow1 className="rotate-45 text-bold ml-2" />
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col justify-center">
                <img src="/abouthome.jpg" alt="about image" className="rounded-lg h-3/4" />
            </div>
        </div>
      </>
    )
  }
  
  export default AboutHome
  