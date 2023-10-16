import Header from "../../Header/Header";
import { BlogData } from "../../BlogData/BlogData";
import BlogModal from "../../BlogModal/BlogModal";
import { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import aboutus_dot from "../../../assets/img/aboutus_dot.png";
import aboutus_bannerwave from "../../../assets/img/aboutus_bannerwave.png";
import "../Blog/Blog.css";

const Blog = () =>{
    const [showModal, setShowModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

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

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    const filterBlogData = BlogData.filter((item)=> item.id >=4);
    return(
        <>
            <Header />
            <section className="blog-banner">
                <img className="aboutus-dot-bg" src={aboutus_dot} alt="aboutus-dot" />
                <img className="aboutus-bannerwave-bg" src={aboutus_bannerwave} alt="aboutus_bannerwave" />
                <div className="container aboutus-banner-content">
                    <div className="row d-flex justify-content-center align-items-center text-center">
                        <div className="col-md-6">
                            <h1 className="aboutus-banner-heading">Blog</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-section">
                <div className="container">
                    <div className="row blog-main-content-row">
                        {
                            filterBlogData.map((item, id)=>(
                                <div key={id} className="col-sm-4 blog-main-content-column mb-4">
                                    <div className="blog-main-content">
                                        <div className="blog-image">
                                            <img className="blog-image1" src={item.blogImage} alt="blog1" />
                                        </div>
                                        <div className="blog-content blog-modal-content">
                                            <p className="blog-content-section-title blog-modal-title">{item.blogTitle}</p>
                                            <h4 className="blog-heading blog-modal-heading">{item.blogHeading}</h4>
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
                    </div>
                </div>
                <BlogModal show={showModal} onClose={handleModalClose} selectedBlog={selectedBlog} />
            </section>
            <Footer />
        </>
    )
}
export default Blog;