import React from "react";
import Button from '@material-ui/core/Button';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";


const signUpSchema = Yup.object({
    username: Yup.string().min(6).required("Please enter your username"),
    password: Yup.string().min(6).required("Please enter your password"),
});

const initialValues = { username: "", password: "" };

const Login = () => {

    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            getUsersData(values);
            action.resetForm();
        },
    });

    const getUsersData = async (obj) => {
        const requestOptions = {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName: obj.username, password: obj.password })
        };

        await fetch(`https://demoapimsebiot.erpguru.in/MSEB_iOT/api/User/UserLogin`, requestOptions)
            .then(response => response.json())
            .then(res => {
                if (res.statusCode == 200) {
                    toast.success(res.statusMessage);
                    sessionStorage.setItem('loggedIn', 'true');
                    localStorage.setItem('loggedInData', JSON.stringify(res.responseData));
                    navigate('/dashboard');
                } else {
                    toast.error(res.statusMessage);
                }
            }).catch(error => toast.error(error));
    }


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
                                        <input type="text" className="form-control" name="username" id="username" value={values.username} onChange={handleChange} onBlur={handleBlur} placeholder="Enter UserName" />
                                        {errors.username && touched.username ? (<p className="form-error">{errors.username}</p>) : null}
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