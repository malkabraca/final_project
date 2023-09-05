import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { BsFillPinAngleFill } from "react-icons/bs";
import CompSlider from "./compSlider";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Slider = () => {
  const [inputState, setInputState] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       // const { data } = await axios.get("/auth/users");
  //       // console.log("data", data);
  //       // let newInputState = {
  //       //   ...data,
  //       // };
  //       const allUser = await axios.get("/auth/users");
  //       console.log("data", allUser.data);
  //       setInputState(allUser.data);
  //     } catch (err) {
  //       toast.error("There is an error," + "" + err.response.data);
  //     }
  //   })();
  // }, []);
  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    try {
      const allUser = await axios.get("/auth/users");
      console.log(allUser.data);
      setInputState(allUser.data);
    } catch (err) {
      console.log(err);
      toast.error(err.response);
    }
  };

  console.log(inputState);
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
    // <Carousel
    //   responsive={responsive}
    //   infinite={true}
    //   autoPlay={true}
    //   autoPlaySpeed={1500}
    // >
    //   {inputState && Array.isArray(inputState)  &&
    //     inputState.map((item) => (
    //       <CompSlider
    //         key={item._id + Date.now()}
    //         id={item._id}
    //         img={item.imageUrl}
    //         alt={item.imageAlt}
    //         recommendations={item.recommendations}
    //       />
    //     ))}
    //  </Carousel>

    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
    >
      {/* {inputState &&
        inputState.map((item) => ( */}
      {inputState
        .filter((item) => item.recommendations !== "")
        .map((item) => (
          <div key={item._id + Date.now()}>
            <div className="div_recommenders">
              <div className="recommenders"></div>
              <Image
                className="imge_recommenders"
                src={item.imageUrl}
                roundedCircle
                alt={item.imageAlt}
              />
              <div className="icon_recommenders">
                <BsFillPinAngleFill />
              </div>
              <h5 className="text_recommenders">{item.recommendations}</h5>
            </div>
          </div>
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
