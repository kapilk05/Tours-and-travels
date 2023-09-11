import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/footer";
import { Form } from "react-router-dom";
import Cform from "../Components/Contactform";


function Contact () {
    return(
        <>        
        <Navbar/>
        <Hero
        cname="contacthero"
        heroimg= "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
        btnClass ="hide"
        />
        <Cform />
        
        <Footer />
        </>
    )

}


export default Contact;