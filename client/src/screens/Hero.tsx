import BannerOne from "../components/hero/BannerOne";
import BannerTwo from "../components/hero/BannerTwo";
import Header from "../components/hero/Header";

const Hero = () => {
  return (
    <div className="w-full relative bg-black">
      <Header />
      <BannerOne />
      <BannerTwo />
    </div>
  );
};

export default Hero;
