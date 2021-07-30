import React,{useState} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        subject:""
    })

    const onChange = (e) => {
        setFormData({...formData,
            [e.target.name]:e.target.value})
    }

    const sendEmail= (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ffmjrrh', 'template_iq3dd4j', e.target, 'user_jwnUJq8tzsZXHYVqeCnyT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div className="cv-section" id="contactform">
            <h3>Get in Touch</h3>
            <div id="contact-section">
                <div className="contact-details">
                    <div id="contact-info">
                        <h3>Contact Info</h3>
                        <ul>
                            <li><i className="fas fa-map-marker-alt fa-lg"></i> Rue Okba ibnou Nafaa 5080, Teboulba, Monastir</li>
                            <li><i className="fas fa-envelope fa-lg"></i> benabdelfettah.abdelhamid@gmail.com</li>
                            <li><i className="fas fa-phone fa-lg"></i> +21626922402</li>
                        </ul>
                    </div>
                    <iframe id="googlemap" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=35.63842981805207, 10.973676669602625&key=AIzaSyAgVKHOvTy74eZKWrVXm4ddL3nWvMquBYM"></iframe>
                </div>

                <div className="contact">
                    <h3>Contact Form</h3>
                    <form name="contact" onSubmit={e=>sendEmail(e)}>
                        <input type="text" name="name" onChange={(e) => onChange(e)} value={formData.name} placeholder="Your Name" required/>
                        <input type="email" name="email" onChange={(e) => onChange(e)} value={formData.email} placeholder="Your Email" required/>
                        <textarea name="subject" onChange={(e) => onChange(e)} value={formData.subject} placeholder="Subject"></textarea>
                        <input type="submit" name="submit" className="button" value="SEND EMAIL" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact