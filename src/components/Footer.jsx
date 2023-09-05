import React from "react";
import { Container, Image } from "react-bootstrap";
import {
  BsEnvelopeAt,
  BsGeoAlt,
  BsStopwatch,
  BsTelephone,
  BsWhatsapp,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "../css/navbar&foter.css";

const handleClick = () => {
  const whatsappNumber = "+972552540326";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20want%20to%20chat%20with%20you!`;

  window.open(whatsappUrl, "_blank");
};
const handleMapClick = () => {
  const address = "HASENYOR,2 Sons Street, Tiberias";
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
  window.open(url, "_blank");
};

const renderTooltip = (props) => {
  const currentTime = new Date().getHours();
  const isOpen = currentTime >= 11 && currentTime <= 23;
  const tooltipContent = isOpen ? "Open" : "Closed";

  return (
    <Tooltip id="button-tooltip" {...props}>
      {tooltipContent}
    </Tooltip>
  );
};

const openEmailBox = () => {
  const subject = encodeURIComponent("Regarding Your Inquiry");
  const url =
    "https://mail.google.com/mail/?view=cm&to=chani.wolpo@gmail.com&su=" +
    subject;
  window.open(url);
};
const Footer = () => {
  return (
    <footer className="footer">
      <Container className="center-content">
        <div className="center-content">
          <Image className="logo_footer" src="../image/logo1.png" />

          <h6 className="name_footer">Italian Restaurant</h6>
          <div className="div_footer">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Link>
                <BsStopwatch className="icon_footer" />
              </Link>
            </OverlayTrigger>

            <p className="text_footer">
              Open Hours: Monday-Saturday: 11:00 AM - 23:00 PM
            </p>
          </div>
          <div className="div_footer">
            <Link>
              <BsGeoAlt className="icon_footer" onClick={handleMapClick} />
            </Link>
            <p className="text_footer">
              Location: HASENYOR,2 Sons Street, Tiberias
            </p>
          </div>
          <div className="div_footer">
            <Link>
              <BsWhatsapp className="icon_footer" onClick={handleClick} />
            </Link>

            <p className="text_footer">phone:0502800840</p>
          </div>
          <div className="div_footer">
            {/* <Link>
              <BsEnvelopeAt className="icon_footer" />
            </Link> */}
            <Link onClick={openEmailBox}>
              <BsEnvelopeAt className="icon_footer" />
            </Link>
            <p className="text_footer">m0773004446@gmail.com</p>
          </div>

          <br></br>
          <p className=" text_footer">© 2023 .Malki Goldaber</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

// const Footer = () => {
//   const [isOpen,setIsOpen]=useState(false)

//   const currentHour = new Date().getHours();

//     // Check if the current time is between 11 AM and 11 PM
//     if (currentHour >= 11 && currentHour < 23) {
//       setIsOpen(!isOpen)
//     }

// console.log(isOpen);
//   const whatsappNumber = "+972552540326";
//   const emailAddress = "malkisafer@gmail.com";
//   // Open WhatsApp
//   const handleWhatsAppClick = () => {
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20want%20to%20chat%20with%20you!`;

//     // Open WhatsApp in a new tab
//     window.open(whatsappUrl, "_blank");
//   };

//   const handleMapClick = () => {
//     const address = "HASENYOR,2 Sons Street, Tiberias";
//     const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//       address
//     )}`;
//     window.open(url, "_blank");
//   };

//   const renderTooltip = (props) => (
//     <Tooltip id="button-tooltip" {...props}>
//      {isOpen ? "Open" : "Closed"}
//     </Tooltip>
//   );
//   return (
//     <footer className="bg-light py-3">
//       <Container>
//         <p className="text-center text-muted">
//           © 2023 .malki goldaber
//           <BsEnvelopeAt />
//           <BsTelephone />
//           <BsWhatsapp onClick={handleWhatsAppClick} />
//           <BsGeoAlt onClick={handleMapClick} />
//         </p>
//         {/* <OverlayTrigger
//       placement="right"
//       delay={{ show: 250, hide: 400 }}
//       overlay={renderTooltip}
//     >
//       <Link><BsStopwatch /></Link>
//     </OverlayTrigger> */}
//         <OverlayTrigger
//           placement="right"
//           delay={{ show: 250, hide: 400 }}
//           overlay={renderTooltip}
//         >
//           <Button variant="success">Hover me to see</Button>
//         </OverlayTrigger>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
