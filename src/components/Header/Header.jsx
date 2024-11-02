import PropTypes from "prop-types";
import Logo from "../../assets/Logo/shiprocket_logo.svg";
import Button from "../Button/Button";

const navList = [
  "Products",
  "Platfrom",
  "Pricing",
  "Partners",
  "Track Order",
  "Resources",
  "Quick",
];

const Header = ({ isHeaderChange }) => {
  return (
    <div
      className={`w-full  ${
        isHeaderChange ? ` hidden` : `fixed bg-[#ffffffbf] top-0`
      }  py-3 flex justify-center bg-blend-lighten z-50`}
    >
      <div className="flex justify-between w-[1290px]  items-center">
        <div>
          <img className="w-[170px] h-[55px]" src={Logo} alt="Logo" />
        </div>

        <div>
          <ul className="flex gap-9 items-center">
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

Header.propTypes = {
  isHeaderChange: PropTypes.bool.isRequired,
};

export default Header;
