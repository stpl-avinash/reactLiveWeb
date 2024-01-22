import React, { useState } from "react";
import Button from '@material-ui/core/Button';

const Contact = () => {


    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // alert(JSON.stringify(state, null, 2));
        alert('Name is :' + state.name + ' Email is :' + state.email + ' Subject is :' + state.subject + ' Message is :' + state.message)
        console.log(state);
        setState({ name: "", email: "", subject: "", message: ""});
      };


    return (
        <>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <h2>Contact</h2>
                        <p>Contact Us</p>
                    </header>

                    <div className="row gy-4">

                        <div className="col-lg-6">

                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-geo-alt"></i>
                                        <h3>Address</h3>
                                        <p>A108 Hadapsar Street,<br />Pune, India, NY 535022</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-telephone"></i>
                                        <h3>Call Us</h3>
                                        <p>+91 0099 9999 99<br />+91 0088 8888 88</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>info@example.com<br />avinashrathod@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-clock"></i>
                                        <h3>Open Hours</h3>
                                        <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <form onSubmit={handleSubmit}>
                                <div className="row gy-4">

                                    <div className="col-md-6 ">
                                        <input type="text" className="form-control" name="name" value={state.name} onChange={handleInputChange} placeholder="Your Name" required/>
                                    </div>

                                    <div className="col-md-6 ">
                                        <input type="email" className="form-control" name="email" value={state.email} onChange={handleInputChange} placeholder="Your Email" required/>
                                    </div>

                                    <div className="col-md-12 ">
                                        <input type="text" className="form-control" name="subject" value={state.subject} onChange={handleInputChange} placeholder="Your Subject" required/>
                                    </div>

                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" value={state.message} onChange={handleInputChange} rows="6" placeholder="Message" required></textarea>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <Button variant="contained" type="submit" className="form-control" color="primary"> Send Message </Button>
                                    </div>

                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Contact;