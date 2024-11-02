import Logo from "../../assets/Logo/shiprocket_logo.svg";
import Button from "../Button/Button";

const landingHeader = () => {
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
    <div className="w-full  py-3 flex justify-center bg-blend-lighten z-10">
      <div className="flex justify-between w-[90%] h-[60px] items-center">
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

export default landingHeader;
