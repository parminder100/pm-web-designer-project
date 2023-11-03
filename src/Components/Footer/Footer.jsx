import "../Footer/Footer.css";
import registered_logo from "../../assets/img/registered_logo.png";
import { useEffect, useRef } from 'react';

const Footer = () =>{
    // eslint-disable-next-line
    const sectionRefs = {
        // Add refs for all your sections
        footerSection: useRef(),
    };

    useEffect(() => {
        const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust this threshold as needed
        };

        const callback = (entries) => {
        entries.forEach((entry) => {
            const { target, isIntersecting } = entry;

            if (isIntersecting) {
            target.classList.add('animate-slide-up');
            } else {
            target.classList.remove('animate-slide-up');
            }
        });
        };

        const observer = new IntersectionObserver(callback, options);

        // Observe all the section elements
        Object.keys(sectionRefs).forEach((sectionKey) => {
        const section = sectionRefs[sectionKey].current;
        if (section) {
            observer.observe(section);
        }
        });

        return () => {
        // Clean up the observer when the component unmounts
        observer.disconnect();
        };
    }, [sectionRefs]);
    return(
        <>
            <footer ref={sectionRefs.footerSection}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 footer-col mb-4">
                                <div className="footer-item">
                                    <a href="/">
                                        <img className="logo" src={registered_logo} alt="registered-logo" />
                                    </a>
                                    <p>Empowering businesses with impactful digital solutions, we are a dedicated web development company.</p>
                                </div>
                            </div>
                            <div className="col-sm-3 footer-col mb-4">
                                <div className="footer-item">
                                    <h5>Our Services</h5>
                                    <ul className="footer-list">
                                        <li>Web Development</li>
                                        <li>Branding Solution</li>
                                        <li>Ui/Ux Design</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3 footer-col mb-4">
                                <div className="footer-item">
                                    <h5>Company</h5>
                                    <ul className="footer-list">
                                        <li><a href="./aboutus">About us</a></li>
                                        <li>Our Services</li>
                                        <li><a href="./portfolio">Our Portfolio</a></li>
                                        <li><a href="./blog">Our Blog</a></li>
                                        <li><a href="./contactus">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3 footer-col">
                                <div className="footer-item">
                                    <h5>Contact Us</h5>
                                    <ul className="address-list">
                                        <li>
                                            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0L15.75 0C16.3467 0 16.919 0.237053 17.341 0.65901C17.7629 1.08097 18 1.65326 18 2.25V11.25C18 11.8467 17.7629 12.419 17.341 12.841C16.919 13.2629 16.3467 13.5 15.75 13.5H4.96575C4.66741 13.5001 4.3813 13.6186 4.17037 13.8296L0.96075 17.0392C0.882147 17.1181 0.781932 17.1718 0.672791 17.1936C0.563649 17.2154 0.450486 17.2044 0.347624 17.1618C0.244763 17.1193 0.156827 17.0473 0.0949469 16.9547C0.0330667 16.8622 2.36417e-05 16.7534 0 16.6421L0 2.25ZM3.9375 3.375C3.78832 3.375 3.64524 3.43426 3.53975 3.53975C3.43426 3.64524 3.375 3.78832 3.375 3.9375C3.375 4.08668 3.43426 4.22976 3.53975 4.33525C3.64524 4.44074 3.78832 4.5 3.9375 4.5H14.0625C14.2117 4.5 14.3548 4.44074 14.4602 4.33525C14.5657 4.22976 14.625 4.08668 14.625 3.9375C14.625 3.78832 14.5657 3.64524 14.4602 3.53975C14.3548 3.43426 14.2117 3.375 14.0625 3.375H3.9375ZM3.9375 6.1875C3.78832 6.1875 3.64524 6.24676 3.53975 6.35225C3.43426 6.45774 3.375 6.60082 3.375 6.75C3.375 6.89918 3.43426 7.04226 3.53975 7.14775C3.64524 7.25324 3.78832 7.3125 3.9375 7.3125H14.0625C14.2117 7.3125 14.3548 7.25324 14.4602 7.14775C14.5657 7.04226 14.625 6.89918 14.625 6.75C14.625 6.60082 14.5657 6.45774 14.4602 6.35225C14.3548 6.24676 14.2117 6.1875 14.0625 6.1875H3.9375ZM3.9375 9C3.78832 9 3.64524 9.05926 3.53975 9.16475C3.43426 9.27024 3.375 9.41332 3.375 9.5625C3.375 9.71168 3.43426 9.85476 3.53975 9.96025C3.64524 10.0657 3.78832 10.125 3.9375 10.125H9.5625C9.71168 10.125 9.85476 10.0657 9.96025 9.96025C10.0657 9.85476 10.125 9.71168 10.125 9.5625C10.125 9.41332 10.0657 9.27024 9.96025 9.16475C9.85476 9.05926 9.71168 9 9.5625 9H3.9375Z"></path></svg>
                                            <a href="mailto:jdkdkdkd123789@gmail.com">jdkdkdkd123789@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row footer-row">
                            <div className="col-sm-6">
                                <p className="copy-right">© Copyright 2023 by PM Web Designer Private Limited</p>
                            </div>
                            <div className="col-sm-6">
                                <ul className="privay-policy">
                                    <li>
                                        <a href="/">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;