import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { BsFillPinAngleFill } from "react-icons/bs";
import CompSlider from "./compSlider";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
    >
      {keys.map((item) => (
      <CompSlider
       key={item._id + Date.now()}
       id={item._id}
       img={item.imageUrl}
       alt={item.imageAlt}
       recommendations={item.recommendations}
       />
       ))}
    </Carousel>
  );
};
export default Slider;

{
  /* <div>
        <div className="recommenders"></div>
        <Image
          className="imge_recommenders"
          src="../image/chefs-2.jpg"
          roundedCircle
        />
        <div className="icon_recommenders">
          <BsFillPinAngleFill />
        </div>
        <h5 className="text_recommenders">
          bbbb cdhjbj grbg yufdvyuiu resyt hvf bbbbb
        </h5>
      </div>
      <div>
        <div className="recommenders"></div>
        <Image
          className="imge_recommenders"
          src="../image/chefs-2.jpg"
          roundedCircle
        />
        <div className="icon_recommenders">
          <BsFillPinAngleFill />
        </div>
        <h5 className="text_recommenders">
          bbbb cdhjbj grbg yufdvyuiu resyt hvf bbbbb
        </h5>
      </div>
      <div>
        <div className="recommenders"></div>
        <Image
          className="imge_recommenders"
          src="../image/chefs-2.jpg"
          roundedCircle
        />
        <div className="icon_recommenders">
          <BsFillPinAngleFill />
        </div>
        <h5 className="text_recommenders">
          bbbb cdhjbj grbg yufdvyuiu resyt hvf bbbbb
        </h5>
      </div>
      <div>
        <div className="recommenders"></div>
        <Image
          className="imge_recommenders"
          src="../image/chefs-2.jpg"
          roundedCircle
        />
        <div className="icon_recommenders">
          <BsFillPinAngleFill />
        </div>
        <h5 className="text_recommenders">
          bbbb cdhjbj grbg yufdvyuiu resyt hvf bbbbb
        </h5>
      </div>
      <div>
        <div className="recommenders"></div>
        <Image
          className="imge_recommenders"
          src="../image/chefs-2.jpg"
          roundedCircle
        />
        <div className="icon_recommenders">
          <BsFillPinAngleFill />
        </div>
        <h5 className="text_recommenders">
          bbbb cdhjbj grbg yufdvyuiu resyt hvf bbbbb
        </h5>
      </div>
      <div>
        <div className="recommenders"></div>
        <Image
          className="imge_recommenders"
          src="../image/chefs-2.jpg"
          roundedCircle
        />
        <div className="icon_recommenders">
          <BsFillPinAngleFill />
        </div>
        <h5 className="text_recommenders">
          bbbb cdhjbj grbg yufdvyuiu resyt hvf bbbbb
        </h5>
      </div>
      <div>
        <div className="recommenders"></div>
        <Image
          className="imge_recommenders"
          src="../image/chefs-2.jpg"
          roundedCircle
        />
        <div className="icon_recommenders">
          <BsFillPinAngleFill />
        </div>
        <h5 className="text_recommenders">
          bbbb cdhjbj grbg yufdvyuiu resyt hvf bbbbb
        </h5>
      </div> */
}
