import Card from "../../components/Card/Card";
import imageOne from "../../assets/images/cardImageOne.webp";
import imageTwo from "../../assets/images/cardImageTwo.webp";
import imageThree from "../../assets/images/cardImageThree.webp";
import Button from "../../components/Button/Button";
import arrow from "../../assets/svg/arrowRightTopWhite.svg";

const cardDetails = [
  {
    image: imageOne,
    heading: "Domestic shipping",
    paragraph:
      "Manage all channels in a single view and reach nationwide  efficiently with AI-based courier selection",
  },
  {
    image: imageTwo,
    heading: "B2B shipping",
    paragraph: "Lower your B2B and cargo shipping costs by upto 40%",
  },
  {
    image: imageThree,
    heading: "Hyperlocal delivery",
    paragraph:
      "Make intra-city deliveries in hours with our experienced courier partners",
  },
];
const ThirdPage = () => {
  return (
    <div className="pt-20 w-[1320px] mx-auto">
      <div>
        <h1 className="text-[#0b0757] text-[50px] font-bold">
          Enhance your customer experience
        </h1>{" "}
        <p className="text-[50px] font-normal mainGradientHeading">
          at every touch point
        </p>
      </div>
      <div className="mt-14">
        <h1 className="text-[50px] font-normal text-greenGradient w-56">
          Shipping
        </h1>
        <p className="text-[50px] font-normal text-[#333]">
          Keep things simple
        </p>
      </div>
      <div className="flex justify-between mt-[50px] ">
        {cardDetails.map((obj) => (
          <Card key={obj.heading} items={obj} />
        ))}
      </div>
      <div className="flex gap-4 items-center justify-center mt-[50px] bg-cart-gradient w-full p-3 border-2 border-[#a8e1f2] rounded-lg">
        {/* <img src="" alt="" /> */}
        <img
          src="https://sr-website.shiprocket.in/wp-content/uploads/2023/11/speaker.png"
          alt=""
          className="w-[28px] h-[29px] mr-[5px]"
        />
        <p className="text-[18px]">
          Experience Shiprocket in real-time with our live demo.{" "}
          <span className="font-bold">Sign-up not required for demo</span>
        </p>
        <Button
          text={"Check Live Demo"}
          style={"px-[18px] py-[8px]"}
          icon={arrow}
        />
      </div>
    </div>
  );
};

export default ThirdPage;
