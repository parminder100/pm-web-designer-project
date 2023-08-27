import "../Banner/Banner.css";
import banner_skills_image from "../../assets/img/banner_skills_image.png";
import banner_spring1 from "../../assets/img/banner_spring1.png";
import banner_spring2 from "../../assets/img/banner_spring2.png";
import banner_spring3 from "../../assets/img/banner_spring3.png";
import banner_rain from "../../assets/img/banner_rain.png";
import banner_aboutus_image1 from "../../assets/img/banner_aboutus_image1.png";
import banner_aboutus_image2 from "../../assets/img/banner_aboutus_image2.jpg";
import banner_aboutus_image3 from "../../assets/img/banner_aboutus_image3.png";
import medal_icon from "../../assets/img/medal_icon.svg";
import sun_icon from "../../assets/img/sun_icon.svg";
import about_dot from "../../assets/img/about_dot.svg";
import about_triangle from "../../assets/img/about_triangle.svg";
import { ourServicesData } from "../OurServicesData/OurServicesData";
import { PortfolioData } from "../PortfolioData/PortfolioData";
import about_service_water_mark1 from "../../assets/img/about_service_water_mark1.png";
import about_service_water_mark2 from "../../assets/img/about_service_water_mark2.png";
import project_section_bg1 from "../../assets/img/project_section_bg1.png";
import project_section_bg2 from "../../assets/img/project_section_bg2.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { TestimonialData } from "../TestimonialData/TestimonialData";
import {useRef} from 'react';

const Banner = () =>{
    const carouselRef = useRef(null);

    const options = {
        items: 2, // Number of items to show at a time
        // loop: true, // Infinite loop
        autoplay: true, // Auto play
        autoplayTimeout: 3000, // Autoplay interval in milliseconds
        responsive: {
            0: {
                items: 1 // Number of items to show at different breakpoints
            },
            768: {
                items: 2
            },
        }
    };

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };
    return(
        <>
            {/* Banner Start */}
            <section className="banner-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-7">
                            <p className="welcome-msg">Welcome to PM Web Designer</p>
                            <h1 className="banner-heading">Web Development that Elevates Your Brand's Online Presence</h1>
                            <p className="banner-description">
                                Experience a transformative journey with <strong>pm web designer</strong>. Our web development 
                                expertise goes beyond code, crafting online solutions that amplify your 
                                brand's online identity. Through cutting-edge technology and intuitive 
                                design, we create engaging websites that leave a lasting impact
                            </p>
                            <img className="banner-spring2" src={banner_spring2} alt="banner-spring2" />
                            <img className="banner-spring1" src={banner_spring1} alt="banner-spring1" />
                        </div>
                        <div className="col-sm-5">
                            <div>
                                <img className="skill-image" src={banner_skills_image} alt="banner-skill" />
                                <img className="banner-spring3" src={banner_spring3} alt="banner-spring3" />
                                <img className="banner-rain" src={banner_rain} alt="banner-rain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner End */}

            {/* About Our Company Section Start */}
            <section className="about-our-company-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 className="about-our-company-heading">-About Our Company-</h3>
                            <h1 className="about-comapny-heading">Empowering Digital Presence</h1>
                            <p className="about-our-company-description">
                                Empowering businesses with impactful digital solutions, we are a 
                                dedicated web development company. Our passion lies in creating 
                                seamless online experiences that drive growth and deliver results.
                            </p>
                            <ul className="about-our-company-benefit">
                                <li>Innovative web development tailored to your needs.</li>
                                <li>User-centered design for intuitive navigation.</li>
                                <li>Cutting-edge solutions to enhance your online reach.</li>
                            </ul>
                            <button className="know-more-btn">know more</button>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6 left-col">
                                    <img className="w-100" src={banner_aboutus_image1} alt="banner_aboutus"/>
                                    <div className="experience-tag">
                                        <div className="tag-inner">
                                            <img src={medal_icon} alt="medal-icon" />
                                            <h5>5+ Years Experience</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 right-col">
                                    <img className="w-100" src={banner_aboutus_image2} alt="banner_aboutus2" />
                                    <img className="banner-aboutus-image3" src={banner_aboutus_image3} alt="banner_aboutus3" />
                                    <img className="sun-icon" src={sun_icon} alt="sun-icon" />
                                    <img className="about-dot-icon" src={about_dot} alt="about-dot" />
                                    <img className="about-triangle-icon" src={about_triangle} alt="about-triangle" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Our Company Section End */}

            {/* What Services Section Start */}
            <section className="what-we-offer-section">
                <img className="about-service-water-mark1-image" src={about_service_water_mark1} alt="about-service-water-mark" />
                <img className="about-service-water-mark2-image" src={about_service_water_mark2} alt="about-service-water-mark2" />
                <div className="container">
                    <div className="row section-title-row">
                        <div className="col-sm-8">
                            <div className="section-title-content">
                                <p className="section-title">-What We Offer-</p>
                                <h3>Our Best Services</h3>
                                <p className="section-title-description">
                                    Empowering seamless project management and web development 
                                    synergy, our premier solution drives innovation, collaboration, 
                                    and efficiency to deliver exceptional digital experiences
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row our-services-row">
                        {
                            ourServicesData.map((item,index)=>(
                                <div className="col-sm-4 col-md-4 our-services-col mb-4" key={index}>
                                    <div className="service-item">
                                        <div className="service-image">
                                            <img className="w-100" src={item.servicesImage1} alt="service" />
                                        </div>
                                        <div className="service-content">
                                            <div className="service-icon">
                                                <img src={item.serviceIcon} alt="service-icon" />
                                            </div>
                                            <h4>{item.serviceName}</h4>
                                            <p className="service-description">{item.serviceDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* What Services Section End */}

            {/* Our Portfolio Start */}
            <section className="our-portfolio-section">
                <img className="project-section-bg1" src={project_section_bg1} alt="project-section-bg1" />
                <img className="project-section-bg2" src={project_section_bg2} alt="project-section-bg2" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-8">
                            <div className="portfolio-section-title-content">
                                <p className="portfolio-section-title">-Portfolio-</p>
                                <h3 className="portfolio-section-title-heading">Designs That Click, Solutions That Stick</h3>
                                <p className="portfolio-section-title-description">
                                    Explore our portfolio, a mosaic of high-performance websites 
                                    reflecting our commitment to creating digital solutions that 
                                    not only impress but also drive results.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row our-project-row">
                        {
                            PortfolioData.map((item,id) =>(
                                <div key={id} className="col-sm-4 our-project-content mb-4">
                                    <div className="pokedex-project-content">
                                        <div className="pokedex-image">
                                            <img className="pokedex-project-image" src={item.projectImage} alt="pokedex-project" />
                                        </div>
                                        <div className="project-content">
                                            <p className="project-name">{item.projectName}</p>
                                            <p className="project-description">{item.projectDescription}</p>
                                            <p className="project-live-link"><a href={item.projectLiveLink} target="_blank" rel="noopener noreferrer">Live Preview</a></p>
                                            <button className="readmore-btn">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="project-view-more-btn">
                            <button className="readmore-btn">View More</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Portfolio End */}

            {/* Testimonial Start */}
            <section className="testimonial-section">
                <img className="project-section-bg1 testimonial-section-bg1" src={project_section_bg1} alt="project-section-bg1" />
                <img className="project-section-bg2 testimonial-section-bg2" src={project_section_bg2} alt="project-section-bg2" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-8">
                            <div className="testimonial-section-title-content">
                                <p className="testimonial-section-title">-Testimonial-</p>
                                <h3 className="testimonial-section-title-heading">What They’re Saying</h3>
                                <p className="testimonial-section-title-description">Trust narrated by our clients in their own words – a testament to PM Web Development's commitment to building strong partnerships and impressive digital solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row owl-row">
                        <OwlCarousel className='owl-theme' margin={10} loop ref={carouselRef} {...options}>
                            {
                                TestimonialData.map((item,id)=>(
                                    <div key={id} className="testimonial-content">
                                        <img className="testimonial-quote-icon" src={item.testimonialQuoteIcon} alt="testimonial-quote-icon" />
                                        <div className="testimonial-image">
                                            <img src={item.testimonialImage} alt="testimonial_image1" />
                                        </div>
                                        <div className="testimonial-details">
                                            <div className="testimonial-designation">
                                                <h5>{item.testimonialName}</h5>
                                                <p>{item.testimonialDesignation}</p>
                                            </div>
                                            <p>{item.testimonialDescription}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </OwlCarousel>
                        <div className="owl-navigation">
                            <div className="owl-nav-prev" onClick={handlePrevClick}>
                                <i className="fa fa-long-arrow-left"></i>
                            </div>
                            <div className="owl-nav-next" onClick={handleNextClick}>
                                <i className="fa fa-long-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonial End */}
        </>
    )
}
export default Banner;