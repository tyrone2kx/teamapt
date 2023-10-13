import "./App.css";
import "animate.css";
import "./assets/fonts/fontello/css/saf.css";
import LoaderScreen from "./components/LoaderScreen";
import OurAdvantages from "./components/OurAdvantages/OurAdvantages";
import Header from "./components/Header/Header";
import Revolution from "./components/Revolutionizing/Revolution";
import Explore from "./components/Explore/Explore";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "utils/useWindowSize/useWindowSize";
import useDisclosure from "utils/useDisclosure/useDisclosure";



function App() {
  const style = useWindowSize();
  const view = useDisclosure();

  useEffect(() => {
    setTimeout(view.onOpen, 5000)
  }, [])

  return (
    <main style={style} className="overflow-scroll scrollbar-hide">
      {!view.isOpen ? (
        <LoaderScreen />
      ) : (
        <>
          <Header />
          <Section id={1} content={<OurAdvantages />} />
          <Section id={2} content={<Revolution  />} />
          <Section id={3} content={<Explore />} />
        </>
      )}
    </main>
  );
}

const Section = ({ content, id=1 }) => {
  const style = useWindowSize();
  const view = useDisclosure(true);
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView ) {
      entry.target.scrollIntoView({ behavior: "smooth", block: 'start' });
      view.onOpen()
    } else {
      setTimeout(view.onClose, 10);
    }
  }, [inView, entry]);

  return (
    <div style={style} ref={ref} className="mb-4 overflow-hidden">
      {view.isOpen && content}
    </div>
  );
};

export default App;
