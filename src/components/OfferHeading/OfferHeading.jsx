import PropTypes from "prop-types";

const OfferHeading = ({ markerRef }) => {
  return (
    <div
      ref={markerRef}
      className="flex w-full  h-9 justify-center items-center py-[4px]"
      style={{
        backgroundImage: `url('https://sr-website.shiprocket.in/wp-content/uploads/2023/11/stripBG.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src="https://sr-website.shiprocket.in/wp-content/uploads/2023/11/speaker.png"
        alt=""
        className="w-[28px] h-[29px] mr-[5px]"
      />
      <p className="text-[14px]">
        Recharge Now for <span className=" font-bold"> ₹1000</span> & Get{" "}
        <span className=" font-bold">₹1600*</span>
        In Your Wallet. Use Code: <span className=" font-bold">FLAT600</span> |
        Limited Period Offer On First Recharge
      </p>
      <div className="flex gap-4 ml-[20px] items-center h-[30px]">
        <h6 className="text-[13px] underline underline-offset-4 ">
          *T&C Apply.
        </h6>
        <button className="bg-white py-[3px] px-[8px] text-[14px] text-[#0b0757] border-[1px] border-[#0b0757] rounded">
          Signup Now
        </button>
      </div>
    </div>
  );
};

OfferHeading.propTypes = {
  markerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default OfferHeading;
