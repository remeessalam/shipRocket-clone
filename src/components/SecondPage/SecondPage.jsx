import ImageCarousel from "../Carousel/Carousel";
import deliveryTrack from "../../assets/images/deliveryTrack.webp";
let tradeAchievement = [
  { heading: " 2.5 Lakh+", paragraph: " merchants nationwide" },
  { heading: "20 Crore", paragraph: "transactions every year" },
  { heading: "30K Crore", paragraph: "annual GMV powered" },
  { heading: "25 Crore", paragraph: "shipments delivered" },
];

const SecondPage = () => {
  return (
    <div className="h-[100vh] w-full justify-center pt-16">
      <ImageCarousel />
      <div className="w-[1320px] mx-auto flex flex-col mt-9">
        <div>
          <div>
            <h4 className="text-[#735ae5] text-[17px] font-normal">
              A trusted growth partner
            </h4>
          </div>
          <div>
            <h2 className="text-[#0b0757] text-[50px] font-bold">
              Lakhs of eCommerce businesses chose
            </h2>
          </div>
          <div className="text-start">
            <h1>
              <span className="text-gradient font text-[50px]">
                <span className="font-bold">Shiprocket</span> to streamline
                their customer
              </span>
              <br />{" "}
              <span className="text-[50px] text-gradient">
                journey-from shipping to returns and beyond
              </span>
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-center items-center mt-[50px]">
          <div className="w-50%">
            <ul className="grid grid-cols-2 gap-x-24 gap-y-24 justify-between">
              {tradeAchievement.map((obj) => (
                <li
                  key={obj.heading}
                  className="flex flex-col items-start text-start w-[276px]"
                >
                  <h3 className="text-[#0b0757] text-[36px] font-medium">
                    {obj.heading}
                  </h3>
                  <p className="text-[#5a5a5a] text-[20px]">{obj.paragraph}</p>
                  <div className="h-1 w-[80%] bg-border-gradient mt-3" />
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[603px] h-[343px]">
            <img src={deliveryTrack} alt="deliveryTrack" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
