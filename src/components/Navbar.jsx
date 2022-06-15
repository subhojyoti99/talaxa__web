import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-secondary shadow">
        <div class="container-fluid shadow">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <NavLink activeClassName="is-active" class="nav-link active text-white-50" aria-current="page" to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                <NavLink activeClassName="is-active" class="nav-link text-white-50" to="/communities">Communities</NavLink>
                </li>
                <li class="nav-item">
                <NavLink activeClassName="is-active" class="nav-link text-white-50" to="#">Account</NavLink>
                </li>
                <li class="nav-item">
                <NavLink activeClassName="is-active" class="nav-link text-white-50" to="/about">About</NavLink>
                </li>
                <li class="nav-item">
                <NavLink activeClassName="is-active" class="nav-link text-white-50" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <NavLink class="navbar-brand fw-bolder fs-4 mx-auto text-dark" to="#">TalaxA</NavLink>
            <button class="btn btn-outline-dark ms-auto px-4 rounded-pill btn-sm bg-dark text-white-50">
                <i className="fa fa-sign-in me-2"></i>Login</button>
            <button class="btn btn-outline-dark ms-2 px-4 rounded-pill bg-dark text-white-50">
                <i className="fa fa-user-plus me-2"></i>Register</button>
            </div>
        </div>
        </nav>
    </div>
  )
}
