import React from 'react';
import './Footer.css'
import foterImage from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <div className='myFooter' style={{ backgroundImage: `url(${foterImage})` }}>
            <footer className="footer p-10 text-neutral-content text-black" >
                <div>
                    <span className="footer-title">SERVICES</span>
                    <a className="link link-hover">Emargency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HELTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filing</a>
                    <a className="link link-hover">Teacth Whitening</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4  text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;