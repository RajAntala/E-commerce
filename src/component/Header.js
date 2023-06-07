import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div>
            <div id="wrapper">
                <header className="header_area">

                    <div className="top_header_area">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center justify-content-end">
                                <div className="col-12 col-lg-7">
                                    <div className="top_single_area d-flex align-items-center">

                                        <div className="top_logo">
                                            <a href="#"><img src="assets/img/core-img/logo.png" alt /></a>
                                        </div>
                                        <div className="header-cart-menu d-flex align-items-center ml-auto">

                                            <div className="cart">
                                                {isAuthenticated &&
                                                    <p>{user.name}</p>
                                                }
                                                <button className='btn btn-success m-3' onClick={() => loginWithRedirect()}>
                                                    Log In
                                                </button>
                                                <button className='btn btn-danger' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                                    Log Out
                                                </button>

                                                <ul className="cart-list">
                                                    <li>
                                                        <a href="#" className="image"><img src="img/product-img/product-10.jpg" className="cart-thumb" alt /></a>
                                                        <div className="cart-item-desc">
                                                            <h6><a href="#">Women's Fashion</a></h6>
                                                            <p>1x - <span className="price">$10</span></p>
                                                        </div>
                                                        <span className="dropdown-product-remove"><i className="icon-cross" /></span>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="image"><img src="img/product-img/product-11.jpg" className="cart-thumb" alt /></a>
                                                        <div className="cart-item-desc">
                                                            <h6><a href="#">Women's Fashion</a></h6>
                                                            <p>1x - <span className="price">$10</span></p>
                                                        </div>
                                                        <span className="dropdown-product-remove"><i className="icon-cross" /></span>
                                                    </li>
                                                    <li className="total">
                                                        <span className="pull-right">Total: $20.00</span>
                                                        <a href="cart.html" className="btn btn-sm btn-cart">Cart</a>
                                                        <a href="checkout-1.html" className="btn btn-sm btn-checkout">Checkout</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main_header_area">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 d-md-flex justify-content-between">

                                    <div className="header-social-area">
                                        <a href="#"><span className="karl-level">Share</span> <i className="fa fa-pinterest" aria-hidden="true" /></a>
                                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                    </div>

                                    <div className="main-menu-area">
                                        <nav className="navbar navbar-expand-lg align-items-start">
                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#karl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i className="ti-menu" /></span></button>
                                            <div className="collapse navbar-collapse align-items-start collapse" id="karl-navbar">
                                                <ul className="navbar-nav animated" id="nav">
                                                    <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                                                    <li className="nav-item active"><a className="nav-link" href="/shop">Shoping</a></li>
                                                    {/* <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#" id="karlDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                                        <div className="dropdown-menu" aria-labelledby="karlDropdown">
                                                            <a className="dropdown-item" href='/'>Home</a>
                                                            <a className="dropdown-item" href="shop">Shop</a>
                                                            <a className="dropdown-item" href="#">Cart</a>
                                                            <a className="dropdown-item" href="#">Checkout</a>
                                                        </div>
                                                    </li> */}
                                                    <li className="nav-item"><a className="nav-link" href="/addproduct">Add Product</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/contect">Contact</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>

                                    <div className="help-line">
                                        <a href="tel:+91 9875066642"><i className="ti-headphone-alt" /> +91 98750 66642</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>

    );
}

export default Header;
