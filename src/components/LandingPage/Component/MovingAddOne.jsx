import calender from "../../../assets/images/calender.webp";
import user from "../../../assets/images/user.webp";
import shipment from "../../../assets/images/shipment.webp";
import earth from "../../../assets/images/earth.webp";
import sellers from "../../../assets/images/sellers.webp";
import rake from "../../../assets/images/rake.webp";
import headset from "../../../assets/images/headset.webp";
import { useEffect, useRef, useState } from "react";

const MovingAddOne = () => {
  const [sellersCount, setSellersCount] = useState(0);
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 1;
  const scrollInterval = 19; // Adjust interval for smoothness

  useEffect(() => {
    const target = 300;
    const interval = 120; // Adjust speed by changing this interval
    const increment = target / 50; // Adjust number of steps for smoothness

    const counter = setInterval(() => {
      setSellersCount((prevCount) => {
        if (prevCount < target) {
          return Math.ceil(prevCount + increment);
        } else {
          return 0;
        }
      });
    }, interval);

    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    const scrollContainer = containerRef.current;

    const autoScroll = setInterval(() => {
      if (!isPaused) {
        setScrollTop((prevScrollTop) => {
          const newScrollTop = prevScrollTop + scrollSpeed * scrollDirection;
          const scrollHeight =
            scrollContainer.scrollHeight - scrollContainer.clientHeight;

          // Check boundaries
          if (newScrollTop >= scrollHeight) {
            setScrollDirection(-1); // Reverse direction to scroll up
            return scrollHeight;
          }
          if (newScrollTop <= 0) {
            setScrollDirection(1); // Reverse direction to scroll down
            return 0;
          }
          return newScrollTop;
        });
      }
    }, scrollInterval);

    return () => clearInterval(autoScroll);
  }, [scrollDirection, isPaused]);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollTop;
    }
  }, [scrollTop]);

  const handleMouseEnter = () => setIsPaused(true); // Pause without changing direction
  const handleMouseLeave = () => setIsPaused(false); // Resume scrolling in current direction

  return (
    <div
      className={`h-[85vh] transition-all flex gap-5 flex-col overflow-scroll no-scrollbar -z-50 p-4 pt-[135px]`}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex w-[240px] h-[87px] px-[20px] py-[10px] bg-white rounded-full">
        <div className="flex flex-col justify-around">
          <h4 className="text-xs">Estimated delivery date</h4>
          <h3 className="text-4xl font-extrabold">July 17</h3>
        </div>
        <img src={calender} alt="calendar" width={60} height={67} />
      </div>
      <div className="w-[240px] h-[386px]">
        <img src={user} alt="user" />
      </div>
      <div className="w-[240px] h-[209px] relative">
        <img src={shipment} alt="shipment" />
        <img
          src={earth}
          alt="earth"
          width={120}
          height={120}
          className="absolute -bottom-[61px] right-0"
        />
      </div>
      <div className="flex flex-col items-center w-[240px] h-[147px] bg-white rounded-3xl mt-16 py-[10px] px-[25px]">
        <img src={sellers} alt="sellers" />
        <h3 className="text-4xl font-bold">{sellersCount}K+</h3>
        <h3 className="text-[#a2a2a2] text-2xl font-medium">Happy Sellers</h3>
      </div>
      <div className="w-[240px] h-[143px]">
        <img src={rake} alt="rake" />
      </div>
      <div className="w-[240px] h-[118px]">
        <img src={headset} alt="headset" />
      </div>
    </div>
  );
};

export default MovingAddOne;
