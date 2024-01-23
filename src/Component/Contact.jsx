import React from "react";
import Button from '@material-ui/core/Button';
import { useFormik } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name").matches(
        '^[a-zA-Z][a-zA-Z ]*$', "Please enter valid name"),
    email: Yup.string().email().required("Please enter your email"),
    subject: Yup.string().min(6).required("Please enter your subject"),
    message: Yup.string().min(6).required("Please enter your message"),
});

const initialValues = { name: "", email: "", subject: "", message: ""};

const Contact = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        },
    });
    console.log(errors);


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
                                <div className="row gy-2">
                                    <div className="col-md-6 ">
                                        <input type="text" className="form-control" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Your Name" />
                                        {errors.name && touched.name ? ( <p className="form-error">{errors.name}</p> ) : null}
                                    </div>
                                    <div className="col-md-6 ">
                                        <input type="email" className="form-control" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Your Email" />
                                        {errors.email && touched.email ? ( <p className="form-error">{errors.email}</p> ) : null}
                                    </div>
                                    <div className="col-md-12 ">
                                        <input type="text" className="form-control" name="subject" id="subject" value={values.subject} onChange={handleChange} onBlur={handleBlur} placeholder="Your Subject" />
                                        {errors.subject && touched.subject ? ( <p className="form-error">{errors.subject}</p> ) : null}
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" id="message" value={values.message} onChange={handleChange} onBlur={handleBlur} rows="6" placeholder="Message" />
                                        {errors.message && touched.message ? ( <p className="form-error">{errors.message}</p> ) : null}
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