import React from "react";
import Button from '@material-ui/core/Button';
import { useFormik } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
});

const initialValues = { email: "", password: "" };

const Login = () => {

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

            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>

                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <div className="shadow-sm p-3 bg-body rounded">
                                <form onSubmit={handleSubmit}>
                                    <h3 className="fw-normal mb-3 pb-3">Log in</h3>
                                    <div className="form-outline mb-4">
                                        <input type="email" className="form-control" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Email" />
                                        {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : null}
                                    </div>
                                    <div className="form-outline mb-3">
                                        <input type="password" className="form-control" name="password" id="password" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter password" />
                                        {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>) : null}
                                    </div>
                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <Button variant="contained" type="submit" className="btn btn-primary btn-lg" color="primary"
                                            > Login </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login;