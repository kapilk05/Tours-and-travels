import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/footer";
import AboutUs from "../Components/Abtus";

function About () {
    return(
        <>
        <Navbar/>
        <Hero
        cname="abouthero"
        c2name = "abouthero-text"
        heroimg= "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
        title = "About Us"
        btnClass ="hide"
        />
        <AboutUs />
        <Footer />
        </>
    )

}


export default About;