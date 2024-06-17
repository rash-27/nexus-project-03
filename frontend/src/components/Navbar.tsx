import { Link } from "react-router-dom"


function Navbar() {

    return (
      <>
        <div className="flex justify-between bg-slate-300 drop-shadow-xl py-1">
            <Link to={'/'} className="text-2xl sm:text-4xl font-heading py-2 pl-4">
               <span className="border-t-4 rounded border-green-600">N</span><span>EXUS</span>
            </Link>
            <div className="flex flex-col justify-center">
            <div className="flex">
                <div className="px-2 py-1 text-lg mx-2 text-white font-normal bg-green-600 rounded">
                <Link to={'/about'} >About us</Link>
                </div>
                <div className="px-2 mx-2 text-lg py-1 text-white font-normal bg-green-600 rounded">
                <Link to={'/contact'} >Contact us</Link>  
                </div>           
            </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Navbar
  