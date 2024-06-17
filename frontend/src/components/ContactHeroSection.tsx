interface ContactHeroSectionProps{
    title : string
    description : string
}
function ContactHeroSection({title, description}: ContactHeroSectionProps) {

    return (
      <>
        <div className="bg-[url('/contacthero.jpg')] backdrop-filter backdrop-opacity-5 bg-no-repeat bg-cover bg-center text-center text-white px-3">
            <div data-aos="fade-down" className="pt-20 sm:pt-20 font-heading text-5xl ">
                {title}
            </div>
            <div data-aos="fade-up" className="pt-12 pb-20 font-normal">
                {description}
            </div>
        </div>
      </>
    )
  }
  
  export default ContactHeroSection
  