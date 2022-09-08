import axios from 'axios';
import React, { useState } from 'react'
import Footer from '../../../layouts/frontend/Footer'
import Navbar from '../../../layouts/frontend/Navbar'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }
    
    const submitRegister = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password
        }
        

        axios.get(`/sanctum/csrf-cookie`).then(res => {
            axios.post(`/api/register`, data).then(res => {
                if (res.data.status === 200) {
                    
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);

                    swal("Success", res.data.message, "success");
                    navigate('/');

                }
                else {
                    setRegister({ ...registerInput, error_list: res.data.validation_errors })
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
                            <h4>Create Account</h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={submitRegister}>
                                <div className='form-group mb-3'>
                                    <label>Full Name</label>
                                    <input type='text' name='name' onChange={handleInput} value={registerInput.name} className='form-control'  />
                                    <span className='text-danger'>{ registerInput.error_list.name }</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Email</label>
                                    <input type='email' name='email' onChange={handleInput} value={registerInput.email} className='form-control' />
                                    <span className='text-danger'>{ registerInput.error_list.email }</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Password</label>
                                    <input type='password' name='password' onChange={handleInput} value={registerInput.password} className='form-control' />
                                    <span className='text-danger'>{ registerInput.error_list.password }</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <button type='submit' className='btn btn-primary w-100'>Register</button>
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

export default Register