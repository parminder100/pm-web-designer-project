import our_services_image1 from "../../assets/img/our_services_image1.jpg";
import our_services_image2 from "../../assets/img/our_services_image2.jpg";
import our_services_image3 from "../../assets/img/our_services_image3.jpg";
import web_development_service_icon from "../../assets/icon/web_development_service_icon.svg";
import brand_solution_icon from "../../assets/icon/brand_solution_icon.svg";
import uiux_icon from "../../assets/icon/uiux_icon.svg";

export const ourServicesData = [
    {
        id: 1,
        servicesImage1: our_services_image1,
        serviceIcon: web_development_service_icon,
        serviceName: "Website Devolopment",
        serviceDescription: "We craft captivating and functional websites that elevate your online presence, merging creativity with cutting-edge technology."
    },
    {
        id: 2,
        servicesImage1: our_services_image2,
        serviceIcon: brand_solution_icon,
        serviceName: "Branding Solution",
        serviceDescription: "We transform businesses into distinctive brands through strategic storytelling, design, and identity to leave a lasting impact in the market."
    },
    {
        id: 3,
        servicesImage1: our_services_image3,
        serviceIcon: uiux_icon,
        serviceName: "Ui/Ux Design",
        serviceDescription: "We create intuitive and visually engaging UI/UX designs that enhance user journeys, enriching digital interactions with a blend of usability."
    },
]