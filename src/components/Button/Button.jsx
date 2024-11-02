import PropTypes from "prop-types";

const Button = ({ style, text, icon }) => {
  return (
    <button
      className={`bg-[#735ae5] flex items-center text-white rounded-lg ${style}`}
    >
      {text}
      {icon ? <img src={icon} alt="arrow" width={18} height={17} /> : ""}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
