import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f41a9d28-a1af-4501-a4ad-39eb8aff43ac");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis culpa laboriosam aliquam. Eveniet pariatur, sed tenetur consectetur nobis nulla, quidem minima vitae voluptate quis nihil incidunt? In possimus natus inventore aperiam vel amet veritatis minima dolorem esse? Dolorum nisi quaerat excepturi nesciunt voluptate voluptates! Rem, praesentium. Dolorem iure labore quia?</p>
        <ul>
            <li> <img src={mail_icon} alt="" />Faizanbasha.try@gmail.com</li>
            <li> <img src={phone_icon} alt="" />8522882209</li>
            <li> <img src={location_icon} alt="" />MIT Manipal <br />
            Udipi ,Karnataka 576104</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name="phone"  placeholder='Enter your phone number ' required />
            <label>Write your message here</label>
            <textarea name="message" rows ="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
