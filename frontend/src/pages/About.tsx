import AboutHeroSection from "../components/AboutHeroSection"
import Culture from "../components/Culture"
import ShortInfo from "../components/ShortInfo"
import Testimonal from "../components/Testimonal"

function About() {

    return (
      <>
        <div>
            <AboutHeroSection title="About Us"
            description="Embark on a journey with Nexus Info, where innovation meets expertise, and discover how we transform ideas into impactful digital solutions for your business."
            />
            <ShortInfo 
            title="Journey of Nexus Info"
            heading="We operate digitally, foregoing offline offices and unnecessary expenses"
            description="Nexus Info, founded by a young entrepreneur, boasts a dynamic team of enthusiastic individuals, adept at navigating the currents of the latest trends. With a commitment to excellence, we employ optimized techniques to enhance your business through flawlessly crafted websites and innovative ideations. Our mission is to deliver customized websites tailored to your business needs, ensuring a strong online presence within your industry"
            image="/about.jpg"
            />
            <Testimonal />
            <Culture />
        </div>
      </>
    )
  }
  
  export default About
  