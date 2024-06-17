import ContactDetail from "./ContactDetail";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi"
import { CiLocationArrow1 } from "react-icons/ci";
function ContactInfo() {
    return (
      <>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 px-5 sm:px-12 py-5 bg-gray-100 border-b border-gray-300 drop-shadow-xl">
            <div  className="px-5 pb-10 sm:py-10 pr-4">
                <ContactDetail title="Phone" infoIcon={<FiPhone />} value="+917989898989" />
                <ContactDetail title="Email" infoIcon={<TfiEmail />} value="contact@nexusinfo.in" />
                <ContactDetail title="Location" infoIcon={<CiLocationArrow1 />} value="Coimbatore, Tamil Nadu" />
                <div className="pt-4 text-bold text-xl text-slate-600">Experience the benefits of our fully  digital operation; we operate without a brick-and-mortar office.</div>
            </div>
            <div data-aos="fade-left" className="flex flex-col justify-center">
                <img src="/contactimg.jpg" alt="about image" className="rounded-lg h-full " />
            </div>
        </div>
      </>
    )
  }
  
  export default ContactInfo
  