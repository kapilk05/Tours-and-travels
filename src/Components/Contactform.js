import "./Contactform.css"

function Cform() {
    return(
        <div className="form-container">
            <h1> Send us Your Queries! </h1>
            <form>
                <input type="text" placeholder = "Name" required/>
                <input type="email" placeholder = "Email" required/>
                <input type="text" placeholder = "Subject" />
                <input type="number" placeholder = "Mobile Number" required minLength={10} maxLength={10} />
                <textarea type="text" placeholder = "Query" rows = "4" minLength={80} required />
                <ActionLink /> 
            </form>
        </div>
    )
}

function ActionLink() {
    const handleClick = (e) => {
      e.preventDefault();
      alert("Your Query was submitted")
      window.location.reload(false);
    }
  
    return (
        <div className="form-button">
      <button onClick={handleClick}>
        Submit Your Query 
      </button>
      </div>
    );
  }

export default Cform;

