import { ImQuotesRight } from "react-icons/im";

interface TestiminalCardProps{
    description : string,
    author : string,
    profession : string
}

function TestiminalCard({description, author, profession}:TestiminalCardProps) {

    return (
      <>
            <div data-aos="fade-up" className="m-4 border border-slate-600 p-4 bg-white rounded-lg">
                <div className="text-slate-700">{description}</div>
                <div  className="flex justify-between">
                    <div className="flex flex-col py-3">
                        <div className="font-bold text-black text-lg">{author}</div>
                        <div className="text-sm text-slate-600">{profession}</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <ImQuotesRight className="text-green-600 text-2xl" />
                    </div>
                </div>
            </div>
      </>
    )
  }
  
  export default TestiminalCard
  