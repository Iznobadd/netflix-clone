import BannerFive from "../components/hero/BannerFive";
import BannerFour from "../components/hero/BannerFour";
import BannerOne from "../components/hero/BannerOne";
import BannerSix from "../components/hero/BannerSix";
import BannerThree from "../components/hero/BannerThree";
import BannerTwo from "../components/hero/BannerTwo";
import Faq from "../components/hero/Faq";
import Footer from "../components/hero/Footer";
import Header from "../components/hero/Header";

const Hero = () => {
  return (
    <div className="w-full relative bg-black">
      <Header />
      <BannerOne />
      <BannerTwo />
      <BannerThree />
      <BannerFour />
      <BannerFive />
      <BannerSix />
      <Faq />
      <Footer />
    </div>
  );
};

export default Hero;
