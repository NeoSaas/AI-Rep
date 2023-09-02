// LoginForm.js
import React, {useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setIsAuthenticated }) {
    const nav = useNavigate();
    const initialValues = {
        username: '',
        password: ''
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', values);
            if (response.hasOwnProperty('data')) {
                console.log(response.data);
                setIsAuthenticated(true);
                    nav('/admin');
                
            } else {
                console.error('Unexpected response:', response);
            }
        } catch (error) {
            console.error(error); 
        }
    };

    return (
        <div className="h-100 bg-inherit flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="max-w-md w-full bg-[#191921] p-8 rounded-lg shadow-md">
                {/* Logo & Company Name */}
                <div className="mb-6 text-center">
                    <img src={require('../images/logo3.png')} alt="Company Logo" className="mx-auto h-24 w-auto mb-2" />
                    <h2 className="text-2xl font-bold text-slate-200 ">NeoSaaS</h2>
                </div>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {() => (
                        <Form className="mt-8 space-y-6">
                            <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />
                            <div>
                                <Field name="username" type="text" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <Field name="password" type="password" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-white hover:text-black hover:border-black hover:outline-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Sign In
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default LoginForm;
