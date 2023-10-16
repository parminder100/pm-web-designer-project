import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "../../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
import ContactUs from "../ContactUs/ContactUs";
import Portfolio from "../Portfolio/Portfolio";

const Pages = () =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Banner />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/contactus" element={<ContactUs />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Pages;