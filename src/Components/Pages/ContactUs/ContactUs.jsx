import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import contactus1 from "../../../assets/img/contactus1.png";
import contactus2 from "../../../assets/img/contactus2.png";
import "../../Pages/ContactUs/ContactUs.css";
import aboutus_dot from "../../../assets/img/aboutus_dot.png";
import aboutus_bannerwave from "../../../assets/img/aboutus_bannerwave.png";
import { useEffect, useRef } from "react";

const ContactUs = () =>{

    // For section display on scroll
    // eslint-disable-next-line
    const sectionRefs = {
        // Add refs for all your sections
        contactUsSection: useRef(),
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
            <Header />
            <main>
                <section className="contact-us-banner">
                    <img className="aboutus-dot-bg" src={aboutus_dot} alt="aboutus-dot" />
                    <img className="aboutus-bannerwave-bg" src={aboutus_bannerwave} alt="aboutus_bannerwave" />
                    <div className="container aboutus-banner-content">
                        <div className="row d-flex justify-content-center align-items-center text-center">
                            <div className="col-md-6">
                                <h1 className="aboutus-banner-heading">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contactus-bg" ref={sectionRefs.contactUsSection}>
                    <div className="container contactus_container">
                        <div className="row">
                            <div className="col-sm-6 contact-column">
                                <div className="contact-info-container">
                                    <h3 className="contact-heading">contact Information</h3>
                                    <p className="contact-description">Say something to start a live chat!</p>
                                    <div className="d-flex align-items-baseline text-white">
                                        <i className="fa fa-mobile-phone"></i>
                                        <p className="mobile-number">+1012 3456 789</p>
                                    </div>
                                    <div className="d-flex align-items-baseline text-white">
                                        <i className="fa fa-envelope"></i>
                                        <a href="mailto:jdkdkdkd123789@gmail.com">
                                            <p className="mobile-number">jdkdkdkd123789@gmail.com</p>
                                        </a>
                                    </div>
                                    <div className="d-flex align-items-baseline text-white">
                                        <i className="fa fa-map-marker"></i>
                                        <p className="mobile-number">132 Dartmouth Street Boston,<br /> Massachusetts 02156 United States</p>
                                    </div>
                                    <div className="map-marker-icon text-white">
                                        <p>To contact us simply mail us to <a href="mailto:jdkdkdkd123789@gmail.com">jdkdkdkd123789@gmail.com</a></p>
                                    </div>
                                    {/* <div className="d-flex social-media-icon">
                                        <div className="twitter-icon">
                                            <i className="fa fa-twitter"></i>
                                        </div>
                                        <div className="twitter-icon">
                                            <i className="fa fa-instagram"></i>
                                        </div>
                                        <div className="twitter-icon">
                                            <i className="fa fa-youtube-play"></i>
                                        </div>
                                    </div> */}
                                    <img className="contactus-image" src={contactus1} alt="contactus1.png" />
                                    <img className="circle-contactus-image" src={contactus2} alt="contactus2.png" />
                                </div>
                            </div>
                            <div className="col-sm-6 form-column">
                                <div className="form-container">
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-6 mb-5">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">First Name</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-5">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Last Name</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter last name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-5">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-5">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Phone Number</label>
                                                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone number" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 mb-5">
                                                <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">Message</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your message"></textarea>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <a href="mailto:jdkdkdkd123789@gmail.com">
                                                    <button type="button" className="submit-btn">Submit</button>
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default ContactUs;