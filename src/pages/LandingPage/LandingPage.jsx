import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import landing from "../../assets/images/download.png";
import "./landingpage.css";
import MovingAddOne from "./Component/MovingAddOne";
import MovingAddTwo from "./Component/MovingAddTwo";
import LandingHeader from "../../components/LandingHeader/LandingHeader";

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
      <LandingHeader isHeaderChange={isHeaderChange} />

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
