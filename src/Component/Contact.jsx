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
                                        <p>A108 Adam Street,<br />New York, NY 535022</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-telephone"></i>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>info@example.com<br />contact@example.com</p>
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
                                        <input type="text" className="form-control" name="name" value={state.name} onChange={handleInputChange} placeholder="Your Name" />
                                    </div>

                                    <div className="col-md-6 ">
                                        <input type="email" className="form-control" name="email" value={state.email} onChange={handleInputChange} placeholder="Your Email" />
                                    </div>

                                    <div className="col-md-12 ">
                                        <input type="text" className="form-control" name="subject" value={state.subject} onChange={handleInputChange} placeholder="Your Subject" />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" value={state.message} onChange={handleInputChange} rows="6" placeholder="Message"></textarea>
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