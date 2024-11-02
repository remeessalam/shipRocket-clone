import { useState, useRef, useEffect } from "react";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import SecondPage from "./components/SecondPage/SecondPage";

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
      <div
        ref={markerRef}
        className="flex w-full  h-9 "
        style={{
          backgroundImage: `url('https://sr-website.shiprocket.in/wp-content/uploads/2023/11/stripBG.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src="https://sr-website.shiprocket.in/wp-content/uploads/2023/11/speaker.png"
          alt=""
        />
        <p>
          Recharge Now for ₹1000 & Get ₹1600* In Your Wallet. Use Code: FLAT600
          | Limited Period Offer On First Recharge
        </p>
        <h6>*T&C Apply.</h6>
        <button>Signup Now</button>
      </div>
      {/* <div className="relative"> */}
      <Header isHeaderChange={showLandingHeader} />

      <LandingPage isHeaderChange={showLandingHeader} />
      {/* </div> */}
      <SecondPage />
    </div>
  );
}

export default App;
