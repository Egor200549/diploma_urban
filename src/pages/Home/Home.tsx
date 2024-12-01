import About from "../../components/About/About";
import Catalog from "../../components/Catalog/Catalog";
import Intro from "../../components/Hero/Hero";
import Team from "../../components/Team/Team";
import SwiperComponent from "../../components/Swiper/Swiper";
import Faq from "../../components/Faq/Faq";
import Contacts from "../../components/Contacts/Contacts";
import Insta from "../../components/Insta/Insta";

const Home = () => {
    return (
        <>
            <Intro />
            <Catalog />
            <About />
            <SwiperComponent />
            <Team />
            <Faq />
            <Contacts />
            <Insta />
        </>
    )
}

export default Home;