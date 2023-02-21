import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Alert from './Alert.jsx';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <a className="navbar__top__auth_link" onClick={logout} href="#!">Logout</a>
  )
  const guestLinks = (
    <>
      <Link className='navbar__top__auth__link' to='/login'>Login</Link>
      <Link className='navbar__top__auth__link' to='/signup'>Sign up</Link>
    </>
  )
  return (
    <>
      <nav className="navbar">
        <div className="navbar__top">
          <div className="navbar__top__logo">
            <Link className="navbar__top__logo__link" to="/" >Real Estate</Link>
          </div>
          <div className="navbar__top__auth">
            {!loading && (<> {(isAuthenticated) ? authLinks : guestLinks}</>)}
          </div>
        </div>
        <div className="navbar__bottom">
          <li className="navbar__bottom__item">
            <NavLink className="navbar__bottom__item__link" exact="/">Home</NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink className="navbar__bottom__item__link" exact="/listings">Listings</NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink className="navbar__bottom__item__link" exact="/about">About</NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink className="navbar__bottom__item__link" exact="/contact">Contact</NavLink>
          </li>
        </div>
      </nav>
      <Alert />
    </>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar);
