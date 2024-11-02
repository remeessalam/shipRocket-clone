import { useEffect, useRef, useState } from "react";
import revenue from "../../../assets/images/revenue.webp";
import whatsapp from "../../../assets/images/whatsapp.webp";
import whatsapplogo from "../../../assets/images/whatsapplogo.webp";
import xlogo from "../../../assets/images/xlogo.webp";
import shoelogo from "../../../assets/images/shoelogo.webp";
import runningTruck from "../../../assets/images/runningTruck.png";
import truck from "../../../assets/images/truck.svg";
const MovingAddTwo = () => {
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 1;
  const scrollInterval = 15;

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
  const handleMouseLeave = () => setIsPaused(false);

  const [price, setPrice] = useState(0);
  const maxPrice = 60000;
  const increment = 1; // Adjust this value to control the speed of the increment
  const interval = 10; // Interval in milliseconds

  useEffect(() => {
    const priceCounter = setInterval(() => {
      setPrice((prevPrice) => {
        if (prevPrice + increment >= maxPrice) {
          return 0; // Reset to 0 when reaching max price
        }
        return prevPrice + increment;
      });
    }, interval);

    return () => clearInterval(priceCounter);
  }, []);

  const [percentage, setPercentage] = useState(1);
  const maxPercentage = 300;
  const incrementPercentage = 1; // Adjust to control the speed of the increment
  const intervalPercentage = 50; // Interval in milliseconds for a smooth update

  useEffect(() => {
    const percentageCounter = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= maxPercentage) {
          return 1; // Reset to 1 when reaching max percentage
        }
        return prevPercentage + incrementPercentage;
      });
    }, intervalPercentage);

    return () => clearInterval(percentageCounter);
  }, []);
  const [count, setCount] = useState(0);
  const maxCount = 145;
  const incrementOrder = 1; // Adjust this value to control the speed of the increment
  const intervalOrder = 50; // Interval in milliseconds

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= maxCount) {
          return 0; // Reset to 0 when reaching max count
        }
        return prevCount + incrementOrder;
      });
    }, intervalOrder);

    return () => clearInterval(countInterval);
  }, []);
  return (
    <div
      className={`h-[85vh] transition-all flex gap-5 flex-col overflow-scroll no-scrollbar -z-50 p-4 pt-[135px]`}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center gap-5 items-center w-[328px] h-[97px] py-[10px] px-[25px] rounded-full bg-white">
        <img src={revenue} alt="revenue" width={60} height={60} />
        <div>
          <h3 className="text-[#666666]">Total Revenue</h3>
          <h3 className="text-3xl font-semibold ">₹{price.toLocaleString()}</h3>
          <div className="p-1 rounded-3xl bg-green-200 w-12">
            <h3 className="text-[#1f9814] text-sm">+{percentage}%</h3>
          </div>
        </div>
      </div>
      <div className="w-[328px] h-[232px]">
        <img src={whatsapp} alt="whatsapp" />
      </div>
      <div className="flex w-[328px] justify-between h-[148px] text-white px-[10px]">
        <img src={whatsapplogo} alt="whatsapplogo" width={148} height={148} />
        <div className="flex flex-col justify-center items-center w-[148px] h-[148px] bg-gradient-circle rounded-full">
          <h3 className="text-[30px] font-bold">{count.toLocaleString()} k</h3>
          <h3 className="text-center mb-[10px] text-sm w-24">
            Order fulfilled monthly
          </h3>
        </div>
      </div>
      <div className="w-[328px] h-[67px] py-[12px] px-[25px] gap-6 flex items-center bg-white rounded-full">
        <div className="w-[43px] h-[43px] object-cover flex items-center">
          <img
            src={runningTruck}
            alt="runningTruck"
            // width={34}
            // height={43}
          />
        </div>
        <h3 className="text-[19px]">Next Day Delivery</h3>
      </div>
      <div className="w-[328px] h-[67px] py-[12px] px-[25px] gap-6 flex items-center bg-white rounded-full">
        <div className="w-[43px] h-[43px] object-cover flex items-center">
          <img
            src={truck}
            alt="runningTruck"
            // width={34}
            // height={43}
          />
        </div>
        <h3 className="text-[19px]">1 - 2 Day Delivery</h3>
      </div>
      <div>
        {" "}
        <img src={xlogo} alt="xlogo" width={328} height={183} />
      </div>
      <div>
        {" "}
        <img src={shoelogo} alt="shoelogo" width={328} height={253} />
      </div>
    </div>
  );
};

export default MovingAddTwo;
