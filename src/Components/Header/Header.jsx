import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect } from 'react';
import { useState } from 'react';
import registered_logo from "../../assets/img/registered_logo.png"; 
import "../Header/Header.css";

const Header = () =>{
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () =>{
            window.removeEventListener("scroll", handleScroll);
        }
    },[]);

    return(
        <>
            <header className = {scrolled ? "header-scrolled": ""}>
                <div className="container">
                    <div className="row header-row">
                        <div className="col-sm-6 left-column">
                            <div>
                                <img className='logo' src={registered_logo} alt="registered-logo" />
                                <p className='company-name'>pm web designer pvt. ltd.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 right-column">
                            <nav className="navbar navbar-expand-lg">
                                <div>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/about us">About us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/blog">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/contact us">Contact us</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;