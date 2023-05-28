import React from "react";
import {Formik,Form} from "formik";
import * as Yup from "yup";

const Signup = ()=>{
    const validate = Yup.object({
        firstName: Yup.string().max(15,"Must be 15 characters or less").required("Required"),
        lastName : Yup.string().max(20,"Must be 20 characters or less").required("Required"),
        email : Yup.string().email("Email is invalid").required("Required"),
        password : Yup.string().min(6,"Password must be at least 6 characters").required("Required"),
        confirmPassword : Yup.string().oneOf([Yup.ref('password'),null],"Password must match").required("Required")
    });

    return (
        <Formik
            initialValues={{
                firstName : "",
                lastName : "",
                email : "",
                password : "",
                confirmPassword : ""
            }}
            validationSchema={validate}
            onSubmit={values=>{
                console.log(values);
            }}
        >
            {formik=>(
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" id="firstName" placeholder="Enter your first name" onChange={formik.handleChange} value={formik.values.firstName}/>
                            {formik.errors.firstName && formik.touched.firstName ? (<div className="text-danger">{formik.errors.firstName}</div>) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Enter your last name" onChange={formik.handleChange} value={formik.values.lastName}/>
                            {formik.errors.lastName && formik.touched.lastName ? (<div className="text-danger">{formik.errors.lastName}</div>) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email}/>
                            {formik.errors.email && formik.touched.email ? (<div className="text-danger">{formik.errors.email}</div>) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password" onChange={formik.handleChange} value={formik.values.password}/>
                            {formik.errors.password && formik.touched.password ? (<div className="text-danger">{formik.errors.password}</div>) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" onChange={formik.handleChange} value={formik.values.confirmPassword}/>
                            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (<div className="text-danger">{formik.errors.confirmPassword}</div>) : null}
                        </div>
                        <button className="btn btn-dark mt-3" type="submit">Register</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Signup;