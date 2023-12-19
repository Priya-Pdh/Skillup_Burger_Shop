import { useState } from 'react';
import burgerImage from "../../assets/bg.jpg";
import "../../styles/contact.scss";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSend = () => {
    setShowPopup(true);

    // Close the popup after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <div className='contact'>
      <form >
        <h2>CONTACT US</h2>
        <input type="text" placeholder='Guest01' />
        <input type="text" placeholder='guest01@xyz.com' />
        <textarea placeholder='Feedback from Guest01' />
        <button onClick={handleSend}>Send</button>

        {showPopup && (
          <div className='popup'>
            <p>
              Thank you for contacting us! We will get back to you shortly.
            </p>
          </div>
        )}

        <div className='formBorder'>
          <div>
            <img src={burgerImage} alt="burgerImage" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
