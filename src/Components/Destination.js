
import "./destination.css";
import Ddata from "./destination-data";

const Destination = () =>{
    return(
        <div className="desitnation">
            <h1> Popular Destinations </h1>
            <p> Give yourself the oppertunity to explore </p>
        <Ddata 
        cname = "first-des"
        heading = " Alibaug "
        text = "Alibaug is a coastal town in Maharashtra known for its beaches, villas, and scenic beauty. Popular as a weekend getaway from Mumbai and Pune, it offers water sports, forts, and temples. Alibaug is often called 'mini-Goa' and has stunning beaches like Alibaug Beach, Kihim Beach, and Nagaon Beach. Mandwa Beach is famous for movie shootings and provides a view of the Gateway of India."
        img1 = "https://www.holidify.com/images/bgImages/ALIBAG.jpg"
        img2 = " https://www.holidify.com/images/compressed/902.jpg?v=1.1"
        />

        <Ddata 
        cname = "first-des-reverse"
        heading = " Lonavala "
        text = "Lonavala, a beautiful retreat away from the chaos of the city, is one of the most popular tourist destinations in Maharashtra. Often called the ‘Jewel of Sahyadri’ and the ‘City of Caves’, this hill station boasts of a spectacular setting that includes lush green valleys, stunning waterfalls, serene lakes and remarkable caves. The myriad places to visit in Lonavala include historical sites, natural wonders, religious attractions, etc. never fail to impress visitors."
        img1 = "https://thumbs.dreamstime.com/b/beautiful-view-lohgad-fort-lonavala-india-blue-bluesky-landscape-greenery-nature-background-lakeview-cloudy-146361863.jpg"
        img2 = "https://wallpaperaccess.com/full/8318607.jpg"
        />
     </div>
    ); 
};


export default Destination