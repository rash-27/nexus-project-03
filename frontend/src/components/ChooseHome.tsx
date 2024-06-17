import { GiWallet } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import CardHome from "./CardHome";
function ChooseHome() {

    return (
      <>
        <div className="pt-16 px-3 bg-gray-200 border-b border-gray-300 drop-shadow-lg">
            <div data-aos="fade-down" className="text-center font-heading text-3xl sm:text-4xl pb-4">Why choose us?</div>
            <div className="text-center">Discover the Nexus Info Advantage — a commitment to innovation, personalized solutions, and a proven track record in <br />driving digital success</div>
            <div className="flex flex-col sm:flex-row py-10">
                <CardHome image={<GiWallet className="text-3xl text-green-600"  />} title="Budget Friendly" description="Acquire a company website tailored to your budget, 
                ensuring cost-effectiveness without compromising quality." />   
                <CardHome image={<FaCalendarAlt className="text-3xl text-green-600"  />} title="24/7 Support" description="Access free business strategies and ideas around the clock, 
                empowering you with continuous support for your business growth" />
                <CardHome image={<FaHandshake className="text-3xl text-green-600"  />} title="Trustworthy Partnership" description="We prioritize your convenience by conducting in-person 
                discussions at your business location, building a relationship founded on trust." />
            </div>
        </div>
      </>
    )
  }
  
  export default ChooseHome
  