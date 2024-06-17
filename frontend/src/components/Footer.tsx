import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
function Footer() {

    return (
      <>
        <div>
            <div className="flex justify-around px-3 pt-8 bg-slate-800">
                <div className="pr-3">
                    <div className="font-heading text-xl text-white pb-4">NEXUS</div>
                    <div className="text-slate-300 pb-5">We develop websites for your business, bringing your vision to life and propelling your business into the digital realm.</div>
                    <div className="flex  sm:justify-start justify-around pb-4">
                        <FaFacebook className="text-gray-400 mr-4 sm:max-0 text-2xl cursor-pointer" />
                        <FaInstagram className="text-gray-400 mr-4  text-2xl cursor-pointer" />
                        <FaLinkedin className="text-gray-400 mr-4  text-2xl cursor-pointer" />
                        <FaWhatsapp className="text-gray-400  text-2xl cursor-pointer" />
                    </div>
                </div>
                <div className="ml-6">
                    <div className="text-lg font-normal text-white">Quick Links</div>
                    <div className="text-slate-300">
                    <Link to={'/'} onClick={()=> window.scrollTo(0, 0)}>Home</Link>
                    </div>
                    <div className="text-slate-300">
                    <Link to={'/about'}>About</Link>
                    </div>
                    <div className="text-slate-300">
                    <Link to={'/contact'}>Contact</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-center sm:flex-row justify-between px-8 bg-slate-900 text-slate-400 py-3">
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center">
                    <FaRegCopyright className="pr-1" />
                    </div>
                    2021 Nexus</div>
                <div className="flex justify-center">
                    <div className="pr-3">Privacy policy</div>
                    <div className="pr-3">Cookie Policy</div>
                    <div className="pr-3">Terms of use</div>
                </div>
            </div>

        </div>
      </>
    )
  }
  
  export default Footer
  