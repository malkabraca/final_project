// import { BsFillPinAngleFill } from "react-icons/bs"
// import Image from "react-bootstrap/Image";
// import Carousel from "react-multi-carousel";

// const CompSlider=({img,alt,recommendations})=>{
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };
// return(
//   <Carousel
//   responsive={responsive}
//   infinite={true}
//   autoPlay={true}
//   autoPlaySpeed={1500}
// >
//     <div className="div_recommenders">
//     <div className="recommenders"></div>
//     <Image
//       className="imge_recommenders"
//       src={img}
//       roundedCircle
//       alt={alt}
//     />
//     <div className="icon_recommenders">
//       <BsFillPinAngleFill />
//     </div>
//     <h5 className="text_recommenders">
//      {recommendations}
//     </h5>
//   </div>
//   </Carousel>
// )
// }
// export default CompSlider



import { BsFillPinAngleFill } from "react-icons/bs"
import Image from "react-bootstrap/Image";
import { Container, Row } from "react-bootstrap";

const CompSlider=({img,alt,recommendations})=>{
return(
<div>
<div className="div_recommenders">
    <div className="recommenders"></div>
    <Image
      className="imge_recommenders"
      src={img}
      roundedCircle
      alt={alt}
    />
    <div className="icon_recommenders">
      <BsFillPinAngleFill />
    </div>
    <h5 className="text_recommenders">
     {recommendations}
    </h5>
    </div>
    </div>
)
}
export default CompSlider