import TestimonalCard from "./TestimonalCard"

function Testimonal() {

    return (
      <>
        <div className="py-4 bg-[url('/home.jpeg')] bg-no-repeat bg-center bg-cover">
            <div data-aos="fade-down" className="text-center font-normal text-bold text-green-600 pt-12 text-lg pb-2">TESTIMONIAL</div>
            <div className="text-center text-2xl sm:text-3xl font-heading text-white pb-4" >What They Say</div>
            <div className="flex flex-col sm:flex-row justify-around px-6">
                <TestimonalCard description="What stood out for me at Nexus Info was their friendly 
                approach. They visited my office for website requirements, 
                even capturing business photographs themselves. Their 
                unique work sets them apart in the market." 
                author="Kishore"
                profession="Billa Bong Travels (Shree Paru Tours)"
                />
                <TestimonalCard description="What stood out for me at Nexus Info was their friendly 
                approach. They visited my office for website requirements, 
                even capturing business photographs themselves. Their 
                unique work sets them apart in the market." 
                author="Kishore"
                profession="Billa Bong Travels (Shree Paru Tours)"
                />
            </div>
        </div>
      </>
    )
  }
  
  export default Testimonal
  