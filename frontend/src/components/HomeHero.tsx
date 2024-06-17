
function HomeHero() {

    return (
      <>
        <div className="bg-[url('/homehero.jpg')] flex justify-center text-center bg-no-repeat bg-center bg-cover px-10 pb-12 sm:px-24">
            <div className="flex flex-col justify-center">
            <div data-aos="fade-right" className="text-white font-normal text-sm sm:text-xl sm:font-bold pt-10 sm:pt-20 sm:tracking-wider">
                IT Solutions and Website Development
            </div>
            <div data-aos="fade-zoom-in" className="text-white font-heading text-2xl sm:text-6xl py-8 sm:py-12">
                Grow Your Business With Nexus Info
            </div>
            <div data-aos="fade-left" className="text-white font-normal text-sm sm:text-xl sm:font-bold pb-8 sm:tracking-wider">
                Get free ideas for your business growth and learn why a website is important for your business
            </div>
            </div> 
        </div>
      </>
    )
  }
  
  export default HomeHero
  