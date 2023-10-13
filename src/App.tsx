import "./App.css";
import "animate.css";
import "./assets/fonts/fontello/css/saf.css";
import LoaderScreen from "./components/LoaderScreen";
import OurAdvantages from "./components/OurAdvantages/OurAdvantages";
import Header from "./components/Header/Header";
import Revolution from "./components/Revolutionizing/Revolution";
import Explore from "./components/Explore/Explore";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "utils/useWindowSize/useWindowSize";
import useDisclosure from "utils/useDisclosure/useDisclosure";

function App() {
  const style = useWindowSize();
  const view = useDisclosure();
  const [activeTime, setActiveTime] = useState<number>(0);

  useEffect(() => {
    setTimeout(view.onOpen, 5000);
    window.scrollTo({top: 200, behavior: 'smooth'})
  }, []);

  return (
    <main style={style} className="overflow-scroll scrollbar-hide">
      {!view.isOpen ? (
        <LoaderScreen />
      ) : (
        <>
          <Header />
          <Section
            id={1}
            content={<OurAdvantages />}
          />
          <Section
            id={2}
            content={<Revolution />}
          />
          <Section
            id={3}
            content={<Explore />}
          />
        </>
      )}
    </main>
  );
}

const Section = ({ content, id = 1, }) => {
  const style = useWindowSize();
  const view = useDisclosure(true);
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    console.log({ id, inView, entry });
    if (inView ) {
      // window.scrollTo({ behavior: "smooth", top:window.scrollY + entry?.boundingClientRect?.y ?? 0 });
      view.onOpen();
    } else {
      setTimeout(view.onClose, 10);
    }
  }, [inView]);

  return (
    <div style={style} ref={ref} className="mb-4 overflow-hidden">
      {view.isOpen && content}
    </div>
  );
};

export default App;
