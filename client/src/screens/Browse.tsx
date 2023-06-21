import Navbar from "../components/browse/Navbar";
import TopMain from "../components/browse/TopMain";

function Browse() {
  return (
    <>
      <Navbar />
      <div className="min-h-[1000px] relative z-0">
        <div className="mt-[-70px] overflow-hidden pb-12">
          <TopMain />
        </div>
      </div>
    </>
  );
}

export default Browse;
