import axios from 'axios';
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

const Navbar = () => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {

            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');

                swal("Success",res.data.message,"success");
                navigate('/');
            }

        });
    }


    var AuthButtons = '';

    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
           <ul className='navbar-nav'>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Log In</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
           </ul>
        )
    }
    else {
        AuthButtons = (
            <li className="nav-item">
                <button type="button" onClick={handleSubmit} className="nav-link btn btn-sm">Logout</button>
            </li>
        )
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
            <Link className="navbar-brand" to="/">E-Commerce</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/collections">Collections</NavLink>
                    </li>          
                    {AuthButtons}
                </ul>
                       
            </div>
        </div>
    </nav>
  )
}

export default Navbar