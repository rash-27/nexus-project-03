interface ContactDetailProps{
    infoIcon : React.ReactNode
    title : string
    value : string
}
function ContactDetail({infoIcon, title, value}:ContactDetailProps) {

    return (
      <>
        <div data-aos="fade-right" className="border-b border-slate-300 py-2 shadow-md rounded-lg">
            <div className="font-heading flex text-lg sm:text-xl">
            <div className="flex flex-col justify-center pr-2">{infoIcon}</div>
            {title}</div>
            <div className="text-bold text-lg sm:text-xl text-slate-600">{value}</div>
        </div>
      </>
    )
  }
  
  export default ContactDetail
  