import PropTypes from "prop-types";
import arrow from "../../assets/svg/arrowRightRop.svg";
// import imageOne from "../../assets/images/cardImageOne.webp";
const Card = ({ key, items }) => {
  let { image, heading, paragraph } = items;
  return (
    <div
      key={key}
      className="flex flex-col justify-between w-[404px] h-[612px] bg-cart-gradient rounded-xl"
    >
      <div className="px-[25px] pt-[40px]">
        <img
          src={image}
          alt=""
          width={354}
          height={326}
          //   className="min-h-[326px]"
        />
      </div>
      <div className="px-[30px] pb-[40px]">
        <div>
          <h1 className="text-[#0b0757] text-[28px] font-medium mb-3">
            {heading}
          </h1>
          <p className="text-[#5a5a5a] text-xl h-[78px] ">{paragraph}</p>
        </div>
        <div className="flex mt-6">
          <span className="text-[#735ae5] font-medium text-lg">Explore</span>
          <img src={arrow} alt="arrow" width={22} height={20} />
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  key: PropTypes.bool.isRequired,
  arrow: PropTypes.string.isRequired,
  items: PropTypes.shape({
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
