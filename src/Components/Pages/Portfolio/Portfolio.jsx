import { useState, useEffect, useRef } from "react";
import { PortfolioData } from "../../PortfolioData/PortfolioData";
import PortfolioModal from "../../PortfolioModal/PortfolioModal";
import aboutus_dot from "../../../assets/img/aboutus_dot.png";
import aboutus_bannerwave from "../../../assets/img/aboutus_bannerwave.png";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "../Portfolio/Portfolio.css";

const Portfolio = () =>{
    const [showPortfolioModal, setShowPortfolioModal] = useState(false);
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);
    const [searchProject, setSearchProject] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("all");

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

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    // Simple Solution
    // const filteredPortfolioData = PortfolioData.filter((item)=> item.id >=4);

    // const handleSearch = filteredPortfolioData.filter((item)=>item.projectName.toLowerCase().includes(searchProject.toLowerCase()));

    // const filterProjectByLanguage = (data, language)=> {
    //     return data.filter((item)=> language === 'all' || item.languageUsed === language);
    // }

    // const filteredItems = filterProjectByLanguage(handleSearch, selectedLanguage);

    const filterProjectByLanguage = (data, language)=> {
        return data.filter((item)=> language === 'all' || item.languageUsed === language);
    }

    const filteredPortfolioData = (data) => {
        return data.filter((item)=> item.id >=4);
    }

    const handleSearch = PortfolioData.filter((item)=>item.projectName.toLowerCase().includes(searchProject.toLowerCase()));


    const filteredItems = selectedLanguage === "all" ? filteredPortfolioData(handleSearch) : filterProjectByLanguage(PortfolioData, selectedLanguage);


    // For section display on scroll
    // eslint-disable-next-line
    const sectionRefs = {
        // Add refs for all your sections
        portfolioSection: useRef(),
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
            <section className="portfolio-banner">
                <img className="aboutus-dot-bg" src={aboutus_dot} alt="aboutus-dot" />
                <img className="aboutus-bannerwave-bg" src={aboutus_bannerwave} alt="aboutus_bannerwave" />
                <div className="container aboutus-banner-content">
                    <div className="row d-flex justify-content-center align-items-center text-center">
                        <div className="col-md-6">
                            <h1 className="aboutus-banner-heading">Portfolio</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-section" ref={sectionRefs.portfolioSection}>
                <div className="container">
                    <div className="row g-3 align-items-center justify-content-center mb-5">
                        <div className="col-auto">
                            <label htmlFor="searchProject" className="col-form-label">Search Project</label>
                        </div>
                        <div className="col-auto">
                            <input className="search-project-input" type="text" id="searchProject" placeholder="Search Project" value={searchProject} onChange={(e)=>setSearchProject(e.target.value)} />
                        </div>
                    </div>
                    <div className="programming-language">
                        <p className={selectedLanguage === 'all' ? "active" : ""} onClick={()=>setSelectedLanguage('all')}>All</p>
                        <p className={selectedLanguage === 'React' ? "active" : ""} onClick={()=>setSelectedLanguage('React')}>React</p>
                        <p className={selectedLanguage === 'Javascript' ? "active" : ""} onClick={()=>setSelectedLanguage('Javascript')}>Javascript</p>
                    </div>
                    <div className="row our-project-row">
                        {
                            filteredItems.map((item,id)=>(
                                <div key={id} className="col-sm-4 our-project-content mb-4">
                                    <div className="pokedex-project-content">
                                        <div className="pokedex-image">
                                            <img className="pokedex-project-image" src={item.projectImage} alt="pokedex-project" />
                                        </div>
                                        <div className="project-content">
                                            <p className="project-name portfolio-project-name">{item.projectName}</p>
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
                    </div>
                </div>
                <PortfolioModal show={showPortfolioModal} onClose={handlePortfolioModalClose} selectedPortfolio={selectedPortfolio} />
            </section>
            <Footer />
        </>
    )
}
export default Portfolio;