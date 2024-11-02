import PropTypes from "prop-types";
import Logo from "../../assets/Logo/shiprocket_logo.svg";
import Button from "../Button/Button";

const LandingHeader = ({ isHeaderChange }) => {
  const navList = [
    "Products",
    "Platfrom",
    "Pricing",
    "Partners",
    "Track Order",
    "Resources",
    "Quick",
  ];
  return (
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
  );
};
LandingHeader.propTypes = {
  isHeaderChange: PropTypes.bool.isRequired,
};

export default LandingHeader;
