import Header from "../../Header/Header";
import "../AboutUs/AboutUs.css";
import aboutus_dot from "../../../assets/img/aboutus_dot.png";
import aboutus_bannerwave from "../../../assets/img/aboutus_bannerwave.png";
import aboutus_image from "../../../assets/img/aboutus_image.jpg";
import our_journey_image from "../../../assets/img/our_journey_image.jpg";
import our_mission_image from "../../../assets/img/our_mission_image.jpg";
import Footer from "../../Footer/Footer";
import { useEffect, useRef } from 'react';

const AboutUs = () =>{
    // eslint-disable-next-line
    const sectionRefs = {
        // Add refs for all your sections
        aboutPageRightSection: useRef(),
        aboutPageLeftSection: useRef(),
        ourJourneyLeftSection: useRef(),
        ourJourneyRightSection: useRef(),
        ourMissionRightSection: useRef(),
        ourMissionLeftSection: useRef(),
        whyChooseUsSection: useRef(),
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
                <section className="about-us-banner">
                    <img className="aboutus-dot-bg" src={aboutus_dot} alt="aboutus-dot" />
                    <img className="aboutus-bannerwave-bg" src={aboutus_bannerwave} alt="aboutus_bannerwave" />
                    <div className="container aboutus-banner-content">
                        <div className="row d-flex justify-content-center align-items-center text-center">
                            <div className="col-md-6">
                                <h1 className="aboutus-banner-heading">About Us</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="aboutus-company-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 aboutus-col aboutus-page-our-company-section" ref={sectionRefs.aboutPageLeftSection}>
                                <div>
                                    <p className="about-our-company-heading our-journey-title mb-4">-About Our Company-</p>
                                    <p className="aboutus-company-description">
                                        At PM Web Development, we are more than just a technology company; 
                                        we are your dedicated partner in bringing your digital dreams to 
                                        life. With a passion for innovation and a commitment to excellence,
                                        we have been at the forefront of web development and digital 
                                        solutions since our inception.
                                    </p>
                                    <p className="aboutus-company-description mt-4">
                                        Our dedication extends beyond merely creating websites or applications. 
                                        We embrace your vision as our own, working collaboratively to craft 
                                        digital experiences that captivate and resonate with your audience. 
                                        With a team of skilled professionals who are equally enthusiastic 
                                        about technology and creativity, PM Web Development is poised to 
                                        continue pushing the boundaries of what's possible in the ever-evolving 
                                        world of digital solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 aboutus-col aboutus-page-our-company-section" ref={sectionRefs.aboutPageRightSection}>
                                <div>
                                    <img className="w-100" src={aboutus_image} alt="aboutus_image" />
                                </div>
                            </div>
                            <div className="col-sm-6 aboutus-col our-journey-image our_journey_section_content" ref={sectionRefs.ourJourneyLeftSection}>
                                <div>
                                    <img className="w-100" src={our_journey_image} alt="our_journey_image" />
                                </div>
                            </div>
                            <div className="col-sm-6 aboutus-col our-journey-content our_journey_section_content" ref={sectionRefs.ourJourneyRightSection}>
                                <p className="testimonial-section-title blog-section-title our-journey-title mb-4">-Our Journey-</p>
                                <p className="aboutus-company-description">
                                    PM Web Development started as a modest team of passionate developers who 
                                    shared a common goal – to create exceptional digital experiences. Over 
                                    the years, our journey has been nothing short of remarkable, as we've 
                                    evolved into a thriving, full-service digital agency. Our growth is a 
                                    testament to our unwavering commitment to continuous learning and our 
                                    ability to adapt to the ever-changing landscape of web development. 
                                    From the very beginning, we set out to not just meet but exceed our 
                                    clients' expectations, and that dedication remains at the core of 
                                    everything we do. We've witnessed the transformation of websites from 
                                    static pages to dynamic, interactive platforms, and we've been at the 
                                    forefront of these advancements, ensuring our clients stay ahead of 
                                    the curve.
                                </p>
                            </div>
                            <div className="col-sm-6 aboutus-col our_mission_section_content" ref={sectionRefs.ourMissionLeftSection}>
                                <p className="section-title our-journey-title mb-4">-Our Mission-</p>
                                <p className="aboutus-company-description">
                                    At the core of our ethos lies a simple yet profound mission: to empower 
                                    businesses of all sizes with the transformative potential of cutting-edge 
                                    web development and digital solutions. We hold a steadfast belief in the 
                                    remarkable power of technology to shape and materialize ideas into reality. 
                                    It's not merely a belief; it's a driving force that propels us forward. 
                                    We understand that in today's rapidly evolving digital landscape, the ability 
                                    to harness technology effectively can mean the difference between stagnation 
                                    and growth, between obscurity and prominence. We're here to ensure that you 
                                    not only survive but thrive in this dynamic ecosystem.
                                </p>
                            </div>
                            <div className="col-sm-6 aboutus-col our-mission-image our_mission_section_content" ref={sectionRefs.ourMissionRightSection}>
                                <div>
                                    <img className="w-100" src={our_mission_image} alt="our_mission_image" />
                                </div>
                            </div>
                            <div className="col-sm-12 why-choose-us-content why_choose_us_section_content" ref={sectionRefs.whyChooseUsSection}>
                                <p className="portfolio-section-title our-journey-title mb-4">-Why Choose Us?-</p>
                                <ul className="why-choose-us-list">
                                    <li>
                                        <strong>Expertise:</strong> Our team comprises highly skilled developers, 
                                        designers, and digital strategists who are experts in their respective 
                                        fields. We stay up-to-date with the latest industry trends to ensure your 
                                        project is at the forefront of technology.
                                    </li>
                                    <li>
                                        <strong>Custom Solutions:</strong> We understand that one size does not fit all. We 
                                        tailor our services to meet your unique business needs, ensuring your 
                                        digital presence stands out in the crowded online landscape.
                                    </li>
                                    <li>
                                        <strong>Client-Centric Approach:</strong> Your success is our success. We work closely 
                                        with you to understand your goals, challenges, and vision, making 
                                        sure our solutions align perfectly with your business objectives.
                                    </li>
                                    <li>
                                        <strong>Quality Assurance:</strong> We take pride in the quality of our work. Rigorous 
                                        testing and quality assurance processes are integral to everything we 
                                        do, ensuring your project is delivered flawlessly.
                                    </li>
                                    <li>
                                        <strong>Timely Delivery:</strong> We value your time and strive to meet project deadlines 
                                        without compromising on quality. Our efficient project management ensures 
                                        that your project stays on track.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Let's Work Together

            Whether you're a startup looking to establish your online presence or an established 
            enterprise seeking digital transformation, PM Web Development is your trusted partner. 
            Contact us today to discuss how we can turn your digital aspirations into reality.

            Join us on our journey of digital innovation. Together, we'll create digital solutions 
            that set you apart in the digital landscape. */}
        </>
    )
}
export default AboutUs;