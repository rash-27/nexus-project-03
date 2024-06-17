interface CultureCardProps{
    title : string,
    description : string
    imageLogo : React.ReactNode
}
function CultureCard({title, description, imageLogo}:CultureCardProps) {

    return (
      <>
        <div data-aos="fade-up" className="mx-2 my-4 border border-slate-500 p-4 rounded-lg">
            <div className="font-heading flex text-2xl pb-2">
                <div className="flex flex-col justify-center pr-2">
                    {imageLogo}
                </div>
                <div>
                    {title}
                </div>
            </div>
            <div className="text-slate-700">
                {description}
            </div>
        </div>
      </>
    )
  }
  
  export default CultureCard
  