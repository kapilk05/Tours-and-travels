import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/footer";
import Trip from "../Components/Trip";


function Offering () {
    return(
        <>        
        <Navbar/>
        <Hero
        cname="offeringhero"
        heroimg= "https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
        title = "Offerings"
        btnClass ="hide"
        />
        <Trip />
        <Footer />
        </>
    )

}


export default Offering;