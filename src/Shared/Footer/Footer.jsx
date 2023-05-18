import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-4'>
            <footer className="footer p-10 shadow-lg text-base-content">
                <div>
                    <Link to="/" className="logo flex items-center gap-2 h-auto w-auto">
                        <h1 className='text-center text-4xl font-bold text-cyan-600   mb-6'>ToyZone</h1>
                    </Link>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;