import ContactForm from "../components/ContactForm"
import ContactHeroSection from "../components/ContactHeroSection"
import ContactInfo from "../components/ContactInfo"

function Contact() {

    return (
      <>
        <ContactHeroSection 
        title="Contact Us"
        description="Connect with Nexus and lets shape our success Together"
        />
        <ContactInfo />
        <ContactForm />
      </>
    )
  }
  
  export default Contact
  