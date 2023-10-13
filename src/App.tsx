import "./App.css";
import "animate.css";
import "./assets/fonts/fontello/css/saf.css";
import LoaderScreen from "./components/LoaderScreen";
import OurAdvantages from "./components/OurAdvantages/OurAdvantages";
import Header from "./components/Header/Header";
import Revolution from "./components/Revolutionizing/Revolution";
import Explore from "./components/Explore/Explore";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { useInView, InView } from "react-intersection-observer";
import { useWindowSize } from "utils/useWindowSize/useWindowSize";
import useDisclosure from "utils/useDisclosure/useDisclosure";

const controller = new ScrollMagic.Controller();

function App() {
  const style = useWindowSize();
  const view = useDisclosure();

  return (
    <main style={style} className="overflow-scroll scrollbar-hide">
      {!view.isOpen ? (
        <LoaderScreen />
      ) : (
        <>
          <Header />
          <Section content={<OurAdvantages />} />
          <Section content={<Revolution />} />
          <Section content={<Explore />} />
        </>
      )}
    </main>
  );
}

const Section = ({ content }) => {
  const style = useWindowSize();
  const view = useDisclosure();
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      entry.target.scrollIntoView({ behavior: "smooth", block: "start" });
      view.onOpen();
    } else {
      setTimeout(view.onClose, 10);
    }
  }, [inView]);

  return (
    <div style={style} ref={ref} className="mb-2 ">
      {view.isOpen && content}
    </div>
  );
};

export default App;
