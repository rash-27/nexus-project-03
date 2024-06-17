interface CardHomeProps{
    image : React.ReactNode,
    title : string,
    description : string
}

function CardHome({image , title , description}:CardHomeProps) {

    return (
      <>
        <div data-aos="fade-up" className="flex flex-col items-center justify-center px-3">
            <div>
                {image}
            </div>
            <div className="font-heading py-3 text-center text-lg">
                {title}
            </div>
            <div className="text-center pt-4 pb-6">
                {description}
            </div>
        </div>
      </>
    )
  }
  
  export default CardHome
  