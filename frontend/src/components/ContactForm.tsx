import axios from "axios";
import { useState } from "react"
import { IoRocketOutline } from "react-icons/io5";

function ContactForm() {
    const [receivedMessage, setReceivedMessage] = useState("");
    const BACKEND_URL=import.meta.env.VITE_BACKEND_URL  
    const [name , setName] = useState('');
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState(""); 
    const [message , setMessage] = useState("");
    async function handleOnclick(){
        // Validation logic for email and all
        if(!(name && email && subject && message)){
            setReceivedMessage("All fields are required");
            return;
        }
        setReceivedMessage('');
        axios.post(BACKEND_URL+'/receive_response',{
            name :name,
            email :email,
            subject :subject,
            message :message
        }).then(()=>{
            setReceivedMessage("Your Response is sent !");
            setName('');setEmail('');setSubject('');setMessage('')
        }).catch((e)=>{
            setReceivedMessage("Error While sending your response !");
        })
    }   
    return (
      <div className="py-12">
        <div data-aos="fade-down" className="text-center font-heading text-3xl pb-4">Drop Us a Message</div>
        <div data-aos="fade-up" className="flex justify-center">
            <div className="flex flex-col justify-center">
                <div>
                {receivedMessage && <div className={`text-center bg-blue-200 p-3 rounded-lg`}>
                {receivedMessage}
                </div>}
                </div>
                <div className="mt-2">
                    <div className="pb-3">
                        <div className="text-lg  font-heading">Your Name<span className="text-red-700">*</span></div>
                        <div className="py-2">
                            <input type="text" className="text-lg px-2 border rounded-lg focus:border-slate-600 focus:outline-none border-slate-500  w-64 sm:w-96 h-10" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} />
                        </div>
                    </div>
                    <div  className="pb-3">
                        <div className="text-lg font-heading">Your Email<span className="text-red-700">*</span></div>
                        <div className="py-2">
                            <input type="text" className="text-lg px-2 border rounded-lg focus:border-slate-600 focus:outline-none border-slate-500  w-64 sm:w-96 h-10" placeholder="Enter Email Address" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="pb-3">
                        <div className="text-lg font-heading">Subject<span className="text-red-700">*</span></div>
                        <div className="py-2">
                            <input type="text" className="text-lg px-2 border rounded-lg focus:border-slate-600 focus:outline-none border-slate-500  w-64 sm:w-96 h-10" placeholder="Enter Subject" onChange={(e)=>setSubject(e.target.value)} />
                        </div>
                    </div>
                    <div className="pb-3">
                        <div className="text-lg font-heading">Message<span className="text-red-700">*</span></div>
                        <div className="py-2">
                            <textarea className="text-lg px-2 border rounded-lg focus:border-slate-600 focus:outline-none border-slate-500  w-64 sm:w-96 h-32" placeholder="Enter Your message" onChange={(e)=>setMessage(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-lg text-white font-bold flex bg-green-500 rounded-lg py-2 px-4" onClick={()=>handleOnclick()}>
                            Submit 
                            <div className="flex flex-col justify-center pl-2"><IoRocketOutline className="text-white" /></div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default ContactForm
  