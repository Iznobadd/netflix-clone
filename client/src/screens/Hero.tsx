import BannerOne from "../components/hero/BannerOne";
import BannerThree from "../components/hero/BannerThree";
import BannerTwo from "../components/hero/BannerTwo";
import Header from "../components/hero/Header";

const Hero = () => {
  return (
    <div className="w-full relative bg-black">
      <Header />
      <BannerOne />
      <BannerTwo />
      <BannerThree />
    </div>
  );
};

export default Hero;
