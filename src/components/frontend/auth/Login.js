import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../../layouts/frontend/Footer'
import Navbar from '../../../layouts/frontend/Navbar'

const Login = () => {

    const navigate = useNavigate();
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: []
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password
        }
        axios.get(`/sanctum/csrf-cookie`).then(res => {
            axios.post(`api/login`, data).then(res => {
                if (res.data.status === 200) {

                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);


                    navigate('/');

                }
                else if (res.data.status === 401) {
                    swal("Warning",res.data.messages,"warning");
                }
                else {
                    setLogin({...loginInput, error_list: res.data.validation_errors });
                }
            });
        })
    }


  return (
    <>
        <Navbar />
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-8'>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <h4>Sign In</h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group mb-3'>
                                    <label>Email</label>
                                    <input type='email' name='email' onChange={handleInput} value={loginInput.email} className='form-control' />
                                    <span className='text-danger'>{ loginInput.error_list.email }</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Password</label>
                                    <input type='password' name='password' onChange={handleInput} value={loginInput.password} className='form-control' />
                                    <span className='text-danger'>{ loginInput.error_list.password }</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <button type='submit' className='btn btn-primary w-100'>Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Login