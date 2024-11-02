import { useState, useRef, useEffect } from "react";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import SecondPage from "./components/SecondPage/SecondPage";
import OfferHeading from "./components/OfferHeading/OfferHeading";

function App() {
  const [showLandingHeader, setShowLandingHeader] = useState(true);
  const markerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle header based on the visibility of the marker
        setShowLandingHeader(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 20% of the marker is visible
      }
    );

    if (markerRef.current) {
      observer.observe(markerRef.current);
    }

    return () => {
      if (markerRef.current) {
        observer.unobserve(markerRef.current);
      }
    };
  }, []);
  console.log(showLandingHeader, "alsdkfjalksdf");
  return (
    <div className="relative h-[100vh] w-[100vw] overflow-x-hidden">
      <OfferHeading markerRef={markerRef} />

      <Header isHeaderChange={showLandingHeader} />

      <LandingPage isHeaderChange={showLandingHeader} />

      <SecondPage />
    </div>
  );
}

export default App;
