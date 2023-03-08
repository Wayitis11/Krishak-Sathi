import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="myfooter">
                    <div className="our-container">
                        <div className="sec aboutus">
                            <h2>About Us</h2>
                            <p>Farmer in a small village in southeastern Nepal, ever imagined that a 
                                farmer could live a comfortable life. The farming life, she thought, was 
                                about laboring all day in the scorching sun or in the pouring rain and 
                                barely making enough to feed the family. But today, it is not only possible 
                                for her to imagine a better life.
                            </p>
                            <ul className="sci">
                                <li><Link to="https://www.facebook.com/"><FaIcons.FaFacebook className="fa fa-facebook " /></Link></li>
                                <li><Link to="https://twitter.com/"> <FaIcons.FaTwitter className="fa fa-twitter" /></Link></li>
                                <li><Link to="https://www.instagram.com/"><FaIcons.FaInstagram className="fa fa-instagram" /></Link></li>
                                <li><Link to="https://www.youtube.com/"><FaIcons.FaYoutube className="fa fa-youtube" /></Link></li>
                            </ul>
                        </div>
                        <div className="sec quicklinks">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><Link to="home">Home</Link></li>
                                <li><Link to="aboutus">About</Link></li>
                                <li><Link to="services">ProductList</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                                <li><Link to="signup">Signup</Link></li>
                                <li><Link to="signin">Signin</Link></li>

                            </ul>
                        </div>
                        <div className="sec quicklinks">
                            <h2>Shop</h2>
                            <ul>
                                <li><Link to="#">Tactor</Link></li>
                                <li><Link to="#">Vegetable</Link></li>
                                <li><Link to="#">Pestiside</Link></li>
                                <li><Link to="#">Flower</Link></li>
                                <li><Link to="#">Pet</Link></li>
                                <li><Link to="#">Dairy Product</Link></li>
                            </ul>
                        </div>
                        <div className="sec contact">
                            <h2>Contact Us</h2>
                            <ul className="info">
                                <li>
                                    <span><FaIcons.FaMarker className="fa fa-marker" /></span>
                                    <span>Gokarna-01, Kathmandu<br />
                                        MaitiNepal Road, PA 19460, <br />Nepal</span>
                                </li>
                                <li>
                                    <span><FaIcons.FaPhone className="fa fa-phone" /></span>
                                    <p><Link to="tel:+12345678900">+977 9810339346</Link><br />
                                        <Link to="tel:+12345678900">+977 9860154401</Link></p>
                                </li>
                                <li>
                                    <span><FaIcons.FaEnvelope className="fa fa-envelope" /></span>
                                    <p><Link to="https://mail.google.com/mail/u/0/#inbox">khadkarohit20@gmail.com</Link></p>
                                </li>

                            </ul>
                        </div>
                    </div>

                </footer>
                <div className="copyrightText">
                    <p>Copyright @ 2021<h8>Krishak-Shathi</h8>. All Rights Reserved.</p>
                </div>


            </>
        )
    }
}
