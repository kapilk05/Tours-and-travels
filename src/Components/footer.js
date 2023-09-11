import "./footer.css"

const Footer = () => {
   return(
    <div className="footer">
        <div className="top">
            <div>
                <h2>  Trippy </h2> 
                <p> Choose your favourite destination </p>
            </div>
        <div>
            <a href="/">
            <i className="fa-brands fa-instagram"/>
            </a>
            <a href="/">
            <i className="fa-brands fa-twitter"/>
            </a>
            <a href="/">
            <i className="fa-brands fa-whatsapp"/>
            </a>
            <a href="/">
            <i className="fa-brands fa-linkedin"/>
            </a>

        </div>
        </div>
        <div className="bottom">
            <div>
            <h4> Project </h4>
            <a href = "/"> Change Log</a>
            <a href = "/"> Status </a>
            <a href = "/"> Liscence </a>
            <a href = "/"> All Versions </a>
            </div>
            <div>
            <h4> Community  </h4>
            <a href = "/"> Github</a>
            <a href = "/"> Issues </a>
            <a href = "/"> Projects </a>
            <a href = "/"> Twitter  </a>
            </div>
            <div>
            <h4> Help </h4>
            <a href = "/"> Support </a>
            <a href = "/"> Trouble Shooting </a>
            <a href = "/"> Contact Us </a>
            </div>
            <div>
            <h4> Others </h4>
            <a href = "/"> Terms of Service </a>
            <a href = "/"> Privacy Policy </a>
            </div>
    </div>
    </div>
   )

}

export default Footer;