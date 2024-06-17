import ShortInfo from "../components/ShortInfo"
import ChooseHome from "../components/ChooseHome"
import HomeHero from "../components/HomeHero"
import Testimonal from "../components/Testimonal"

function Home() {

    return (
      <>
        <HomeHero />
        <ShortInfo title="ABOUT US" 
        heading="We specialize in creating websites that fit your budget perfectly."
        description="At Nexus Info, we offer tailored website solutions designed for your business. Coupled with business growth ideas and strategies, our goal is to foster the expansion of your business. We believe in making every business thrive in both digital and offline realms. “Join the future trend of business with the help of Nexus Info, and let’s grow together."
        button="About"
        image="/abouthome.jpg"
         />
         <Testimonal />
        <ChooseHome />
      </>
    )
  }
  
  export default Home
  