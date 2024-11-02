import PropTypes from "prop-types";

const Button = ({ style, text }) => {
  return (
    <button className={`bg-[#735ae5] text-white rounded-lg ${style}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
