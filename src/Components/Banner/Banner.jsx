import "../Banner/Banner.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "../Header/Header";
import banner_skills_image from "../../assets/img/banner_skill.png";
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
import { BlogData } from "../BlogData/BlogData";
import work_process_image1 from "../../assets/icon/work_process_image1.svg";
import work_process_image2 from "../../assets/icon/work_process_image2.svg";
import work_process_image3 from "../../assets/icon/work_process_image3.svg";
import work_process_image4 from "../../assets/icon/work_process_image4.svg";
import BlogModal from "../BlogModal/BlogModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from "../Footer/Footer";
import { useState } from "react";
import PortfolioModal from "../PortfolioModal/PortfolioModal";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Banner = () =>{
    const [showModal, setShowModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const [showPortfolioModal, setShowPortfolioModal] = useState(false);
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);

    const handlePortfolioModalOpen = (item) =>{
        setShowPortfolioModal(true);
        setSelectedPortfolio(item);
        document.body.classList.add('modal-open');
        console.log('modal opened');
    }

    const handlePortfolioModalClose = () =>{
        setShowPortfolioModal(false);
        document.body.classList.remove('modal-open');
    }

    const handleModalOpen = (item) =>{
        setShowModal(true);
        setSelectedBlog(item);
        document.body.classList.add('modal-open');
        console.log("modal opened");
    }

    const handleModalClose = () =>{
        setShowModal(false);
        document.body.classList.remove('modal-open');
    }

    const filteredBlogData = BlogData.filter((item)=> item.id < 4);

    const filteredPortfolioData = PortfolioData.filter((item)=>item.id < 4);

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

    const navigate = useNavigate();

    const navigateToBlog = () =>{
        navigate("/Blog");
    }

    const navigateToPortfolio = () =>{
        // window.scrollTo(0, 0);
        navigate("/portfolio");
    }

    // eslint-disable-next-line
    const sectionRefs = {
        // Add refs for all your sections
        aboutOurCompanySection: useRef(),
        workProcessSection: useRef(),
        servicesSection: useRef(),
        portfolioSection: useRef(),
        testimonialSection: useRef(),
        blogSection: useRef(),
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


    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    // Prevent user from right click
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };
    
        const handleKeyDown = (e) => {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                e.preventDefault();
            }
        };
    
        window.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
      
    return(
        <>
            {/* Header Start */}
            <Header />
            {/* Header End */}

            <main>
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
                <section className="about-our-company-section" ref={sectionRefs.aboutOurCompanySection}>
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
                                <button className="know-more-btn"><Link to="/aboutus">know more</Link></button>
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

                {/* Work Process Start */}
                    <section className="work-process-section" ref={sectionRefs.workProcessSection}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-sm-8">
                                    <div className="portfolio-section-title-content">
                                        <p className="portfolio-section-title work-process-section-title">-How We Work-</p>
                                        <h3 className="portfolio-section-title-heading">Our Work Process</h3>
                                        <p className="portfolio-section-title-description">
                                            Explore PM Web Development's structured process, designed to 
                                            transform your ideas into exceptional digital solutions. 
                                            From ideation to execution, we ensure a seamless journey 
                                            to success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3 mb-4">
                                    <div className="work-process-item">
                                        <img src={work_process_image1} alt="work-process1" />
                                        <h4>Research</h4>
                                    </div>
                                </div>
                                <div className="col-sm-3 mb-4">
                                    <div className="work-process-item">
                                        <img src={work_process_image2} alt="work-process2" />
                                        <h4>Idea</h4>
                                    </div>
                                </div>
                                <div className="col-sm-3 mb-4">
                                    <div className="work-process-item">
                                        <img src={work_process_image3} alt="work-process3" />
                                        <h4>Develop</h4>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="work-process-item">
                                        <img src={work_process_image4} alt="work-process4" />
                                        <h4>Launch</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                {/* Work Process End */}

                {/* What Services Section Start */}
                <section className="what-we-offer-section" ref={sectionRefs.servicesSection}>
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
                <section className="our-portfolio-section" ref={sectionRefs.portfolioSection}>
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
                                filteredPortfolioData.map((item,id) =>(
                                    <div key={id} className="col-sm-4 our-project-content mb-4">
                                        <div className="pokedex-project-content">
                                            <div className="pokedex-image">
                                                <img className="pokedex-project-image" src={item.projectImage} alt="pokedex-project" />
                                            </div>
                                            <div className="project-content">
                                                <p className="project-name">{item.projectName}</p>
                                                <p className="project-description">{item.projectDescription}</p>
                                                <p className="project-live-link"><a href={item.projectLiveLink} target="_blank" rel="noopener noreferrer">Live Preview</a></p>
                                                <div className="language-image-wrapper">
                                                    <img src={item.languageImage} alt="language-icon" />
                                                    <p>{item.languageUsed}</p>
                                                </div>
                                                <button className="readmore-btn" onClick={()=>handlePortfolioModalOpen(item)}>Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="project-view-more-btn">
                                <button className="readmore-btn" onClick={navigateToPortfolio}>View More</button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Our Portfolio End */}

                {/* Testimonial Start */}
                <section className="testimonial-section" ref={sectionRefs.testimonialSection}>
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

                {/* Blog Start */}
                <section className="blog-section">
                    <div className="container blog-section-container" ref={sectionRefs.blogSection}>
                        <div className="row justify-content-center">
                            <div className="col-sm-8">
                                <div className="testimonial-section-title-content">
                                    <p className="testimonial-section-title blog-section-title">-Our Blog-</p>
                                    <h3 className="testimonial-section-title-heading">Learn Something From Blog</h3>
                                    <p className="testimonial-section-title-description">Navigating the Digital Landscape: A Knowledge Hub by PM Web Development, Delving Deep into Insights, Trends, and Innovations Shaping the Online Sphere.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row blog-main-content-row">
                            {
                                filteredBlogData.map((item, id)=>(
                                    <div key={id} className="col-sm-4 blog-main-content-column mb-4">
                                        <div className="blog-main-content">
                                            <div className="blog-image">
                                                <img className="blog-image1" src={item.blogImage} alt="blog1" />
                                            </div>
                                            <div className="blog-content">
                                                <p className="blog-content-section-title">{item.blogTitle}</p>
                                                <h4 className="blog-heading">{item.blogHeading}</h4>
                                                <p className="blog-description">{item.blogDescription}</p>
                                                <p className="blog-readmore-btn" onClick={()=>handleModalOpen(item)}>{item.blogReadMoreBtn}</p>
                                                <div className="blog-user">
                                                    <div className="author-img">
                                                        <img className="blog-user-image" src={item.blogUserImage} alt="testimonial1" />
                                                    </div>
                                                    <div className="blog-user-designation">
                                                        <h5>{item.blogUserName}</h5>
                                                        <p>{item.blogDate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div class="project-view-more-btn"><button class="readmore-btn" onClick={navigateToBlog}>View More</button></div>
                        </div>
                    </div>
                    <BlogModal show={showModal} onClose={handleModalClose} selectedBlog={selectedBlog} />
                    <PortfolioModal show={showPortfolioModal} onClose={handlePortfolioModalClose} selectedPortfolio={selectedPortfolio} />
                </section>
                {/* Blog End */}
            </main>

            {/* Footer Start */}
            <Footer />
            {/* Footer End */}
        </>
    )
}
export default Banner;