import PropTypes from "prop-types";
import Button from "../Button/Button";
import landing from "../../assets/images/download.png";
import Logo from "../../assets/Logo/shiprocket_logo.svg";
import "./landingpage.css";
import MovingAddOne from "./Component/MovingAddOne";
import MovingAddTwo from "./Component/MovingAddTwo";

const navList = [
  "Products",
  "Platfrom",
  "Pricing",
  "Partners",
  "Track Order",
  "Resources",
  "Quick",
];

let tradeAchievement = [
  { heading: " 2.5 Lakh+", paragraph: " merchants nationwide" },
  { heading: "20 Crore", paragraph: "transactions every year" },
  { heading: "30K Crore", paragraph: "annual GMV powered" },
  { heading: "25 Crore", paragraph: "shipments delivered" },
];

const LandingPage = ({ isHeaderChange }) => {
  return (
    <div className="w-[100vw] justify-center overflow-hidden h-landingPageHeight">
      <div className="absolute top-0 -z-10 w-full h-full overflow-hidden">
        <img
          className="absolute top-0 -z-10 w-full  h-full object-cover opacity-75 animate-slideImage"
          src={landing}
          alt="iamge"
        />
      </div>

      {/** HEADER LANDING PAGE */}

      <div
        className={`w-full relative bg-custom-gradient h-[224px] top-0 items-start  py-3 flex justify-center z-50 ${
          isHeaderChange ? `` : `hidden`
        }`}
      >
        <div className="flex justify-between w-[1290px]  items-center">
          <div>
            <img className="w-[170px] h-[55px]" src={Logo} alt="Logo" />
          </div>

          <div>
            <ul className="flex gap-9 items-center z-50">
              {navList.map((list, i) => (
                <li
                  className={`${
                    navList.length - 1 == i
                      ? `text-[#735ae5] font-medium`
                      : `text-[#6f6f6f] `
                  }`}
                  key={list}
                >
                  {list}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-9">
            <button>Log In</button>

            <Button style={" px-[20px] py-[10px] "} text={"Tryfor Free"} />
          </div>
        </div>
      </div>

      {/** CONDENT LANDING PAGE */}

      <div className=" flex justify-center w-full  absolute top-0 ">
        <div className="flex justify-center w-[1320px]  mt-40">
          <div className="relative flex flex-col justify-between  text-xl text-[#313131] w-[50%] h-[390px] z-20 ">
            <div>
              <h1 className="text-8xl font-extrabold opacity-100 ">
                <span className="headingText landingPageHeading">
                  Ship your
                </span>
                <br />
                <span className="landingPageHeading"> dream</span>
              </h1>
            </div>
            <div>
              <p>
                <span>
                  Create a delightfull online hourney by iptimising your
                </span>
                <br />
                <span> shipping process and everything sourround it.</span>
              </p>
            </div>
            <div>
              <Button
                style="px-[35px] py-[15px] text-xl font-medium"
                text="Sign up for free"
              />
            </div>
          </div>
          <div className="flex relative -top-[124px] w-[50%] h-full overflow-hidden  -z-0">
            <div className="overflow-scroll h-full ">
              <MovingAddOne />
            </div>
            <div>
              <MovingAddTwo />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ transform: "rotate(-3deg)" }}
        className="h-[140px] w-[105%] absolute bg-white  -bottom-11 -right-[5px]"
      ></div>
    </div>
  );
};

LandingPage.propTypes = {
  isHeaderChange: PropTypes.bool.isRequired,
};

export default LandingPage;
