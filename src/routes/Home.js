import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/footer";

function Home () {
    return(
        <>
        <Navbar/>
        <Hero
        cname="hero"
        heroimg="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Your Journey Your Story"
        text=" Choose Your Favourite Destination"
        btnText = "Travel Plan"
        url = "/offerings"
        btnClass ="show"
        />
        <Destination />
        <Trip/>
        <Footer />
        </>
    )

}

export default Home;