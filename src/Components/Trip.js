import "./Trip.css"
import TripData from "./TripData";
import leh from "../Images/leh.jpg"
import manali from "../Images/manali.jpg"
import ooty from "../Images/ooty.jpg"

function Trip() {
    return (
        <div className="trip">
            <h1> Recent Trips </h1>
            <p> Discover Unique destinations and explore the unseen </p>
            <div className="tripcard">
                <TripData
                image = {leh}
                heading = "Trip To Leh" 
                text = 'Leh: The Majestic Gateway to Ladakh, where ancient history meets breathtaking landscapes, and the echoes of the Kingdom of Ladakh resonate through the stunning Leh Palace.'
                />
                <TripData
                image = {manali}
                heading = "Trip To Manali"
                text = "Manali: Where Nature's Playground Unfolds, nestled in the enchanting Kullu Valley, this vibrant town marks the gateway to ancient trade routes and beckons adventurers to embark on a journey through breathtaking landscapes and cultural marvels."
                />
                <TripData
                image = {ooty}
                heading = "Trip To ooty"
                text = 'Ooty: The Exquisite Queen of Hill Stations, nestled in the lush Nilgiri Hills, captivates with its charm as the former summer capital of Madras Presidency, offering a delightful retreat adorned with natural splendor and captivating landscapes.'
                />
            </div>
        </div>
    );
}

export default Trip;