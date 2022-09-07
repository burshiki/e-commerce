import React from 'react'
import Footer from '../../../layouts/frontend/Footer'
import Navbar from '../../../layouts/frontend/Navbar'

const Register = () => {
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
                            <form>
                                <div className='form-group mb-3'>
                                    <label>Full Name</label>
                                    <input type='text' name='name' className='form-control' value='' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Email</label>
                                    <input type='email' name='email' className='form-control' value='' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Password</label>
                                    <input type='password' name='password' className='form-control' value='' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Confirm Password</label>
                                    <input type='password' name='confirm_password' className='form-control' value='' />
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