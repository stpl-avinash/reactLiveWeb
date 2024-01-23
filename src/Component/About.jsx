import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import Button from '@material-ui/core/Button';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const About = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            // action.resetForm();
        },
    });
    console.log(errors);

    return (
        <>
            <div className="container">
                    <div className="modal-container">
                        <div className="modal-left">
                            <h1 className="modal-title">Welcome!</h1>
                            <p className="modal-desc"> To the thapa technical website for programmers. </p>
                            <form onSubmit={handleSubmit}>
                                <div className="input-block mt-2">
                                    <label htmlFor="name" className="input-label"> Name </label>
                                    <input type="name" autoComplete="off" name="name" id="name" placeholder="Name" className="form-control"
                                        value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.name && touched.name ? ( <p className="form-error">{errors.name}</p> ) : null}
                                </div>
                                <div className="input-block mt-2">
                                    <label htmlFor="email" className="input-label"> Email </label>
                                    <input type="email" autoComplete="off" name="email" id="email" placeholder="Email" className="form-control"
                                        value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                    {errors.email && touched.email ? ( <p className="form-error">{errors.email}</p> ) : null}
                                </div>
                                <div className="input-block mt-2">
                                    <label htmlFor="password" className="input-label"> Password </label>
                                    <input type="password" autoComplete="off" name="password" id="password" placeholder="Password" className="form-control"
                                        value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.password && touched.password ? ( <p className="form-error">{errors.password}</p> ) : null}
                                </div>
                                <div className="input-block mt-2">
                                    <label htmlFor="confirm_password" className="input-label"> Confirm Password </label>
                                    <input type="password" autoComplete="off" name="confirm_password" id="confirm_password" className="form-control"
                                     placeholder="Confirm Password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.confirm_password && touched.confirm_password ? ( <p className="form-error">{errors.confirm_password}</p> ) : null}
                                </div>
                                <div className="modal-buttons mt-2">
                                        <Button variant="contained" type="submit" className="form-control" color="primary"> Registration </Button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default About;
