import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from "axios"

function Registration() {
    const initialValues = {
        username: "",
        password: "",
    }
    //checks if inputs are valid
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    })
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data)
        })
    }
    return ( 
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
                <label>Username: </label>
                <ErrorMessage name="username" component="span"/>
                <Field 
                    id="inputCreatePost" 
                    name="username"
                    placeholder="Ex: Username..."
                />
                <label>Password: </label>
                <ErrorMessage name="password" component="span"/>
                <Field 
                    id="inputCreatePost" 
                    name="password"
                    type="password"
                    placeholder="Ex: Password..."
                />
                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
}



export default Registration