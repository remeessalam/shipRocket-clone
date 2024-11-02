import carouselOne from "../../assets/images/carousel-1.png";
import carouselTwo from "../../assets/images/carousel-2.png";
import carouselThree from "../../assets/images/carousel-3.png";
import carouselFour from "../../assets/images/carousel-4.png";
import carouselFive from "../../assets/images/carousel-5.png";
import carouselSix from "../../assets/images/carousel-6.png";
import "./Carousel.css";
const ImageCarousel = () => {
  const images = [
    carouselOne,
    carouselTwo,
    carouselThree,
    carouselFour,
    carouselFive,
    carouselSix,
    // Duplicate images for smooth looping
    carouselOne,
    carouselTwo,
    carouselThree,
    carouselFour,
    carouselFive,
    carouselSix,
  ];

  return (
    <div className="overflow-hidden w-full ">
      <div
        className="flex gap-7 justify-center items-center animate-slide h-[100px]"
        style={{
          width: `${images.length * 300}px`, // Adjust based on image width and count
        }}
      >
        {images.map((src, index) => (
          <div
            className="hover:shadow-lg flex justify-center items-center border rounded-lg object-contain border-[#e1ddff] w-[258px] h-[70px]"
            key={index}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="carouselImage"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
