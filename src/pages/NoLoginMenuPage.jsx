import { useEffect, useState } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuLogoutCom from "../components/CardMenuLogut.jsx";

const MenuLogoutPage = () => {
  const [originalCardsArr, setOriginalCardsArr] = useState(null);
  const [cardsArr, setCardsArr] = useState(null);

  const navigate = useNavigate();
  let qparams = useQueryParams();

  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        filterFunc(data);
      })
      .catch((err) => {
        toast.error("err from axios" + "" + err.response.data.msg);
      });
  }, []);
  
  const filterFunc = (data) => {
    if (!originalCardsArr && !data) {
      return;
    }
    let filter = "";
    if (qparams.filter) {
      filter = qparams.filter;
    }
    if (!originalCardsArr && data) {
      setOriginalCardsArr(data);
      setCardsArr(data.filter((card) => card.title.startsWith(filter)));
      return;
    }

    if (originalCardsArr) {
      let neworiginalCardsArr = JSON.parse(JSON.stringify(originalCardsArr));
      setCardsArr(
        neworiginalCardsArr.filter((card) => card.title.startsWith(filter))
      );
    }
  };
  useEffect(() => {
    filterFunc();
  }, [qparams.filter]);

  if (!cardsArr) {
    return <Spinner animation="grow" variant="warning" className="spiner" />;
  }

  return (
    <Container>
      <h1 className="title"> menu</h1>
      <Col md={4} lg={2} sm={6}>
      {cardsArr.map((item) => (
          <MenuLogoutCom
            key={item._id + Date.now()}
            id={item._id}
            imageUrl={item.imageUrl}
            imageAlt={item.imageAlt}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </Col>
    </Container>
  );
};

export default MenuLogoutPage;

// import {
//   Button,
//   Card,
//   Col,
//   Container,
//   Form,
//   Image,
//   ListGroup,
//   Row,
//   Spinner,
// } from "react-bootstrap";
// import { BsCurrencyDollar } from "react-icons/bs";
// import CardMenu from "../components/CardMenu";
// import { toast } from "react-toastify";
// import useQueryParams from "../hooks/useQueryParams";
// import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import ButtonCreatCom from "../components/ButtonCreatCom";
// import CompletionOfAnOrder from "../components/OrderSummaryCom";
// import CardMenuLogut from "../components/CardMenuLogutjsx";

// const LogutMenuPage = () => {
//   const [originalCardsArr, setOriginalCardsArr] = useState(null);
//   const [cardsArr, setCardsArr] = useState(null);

//   const navigate = useNavigate();
//   let qparams = useQueryParams();

//   useEffect(() => {
//     axios
//       .get("/cards")
//       .then(({ data }) => {
//         filterFunc(data);
//       })
//       .catch((err) => {
//         toast.error("err from axios" + "" + err.response.data);
//       });
//   }, []);

//   const filterFunc = (data) => {
//     if (!originalCardsArr && !data) {
//       return;
//     }
//     let filter = "";
//     if (qparams.filter) {
//       filter = qparams.filter;
//     }
//     if (!originalCardsArr && data) {
//       /*
//       when component loaded and states not loaded
//       */
//       setOriginalCardsArr(data);
//       setCardsArr(
//         data.filter(
//           (card) =>
//             card.title.startsWith(filter) || card.bizNumber.startsWith(filter)
//         )
//       );
//       return;
//     }
//     if (originalCardsArr) {
//       /*
//         when all loaded and states loaded
//         */
//       let newOriginalCardsArr = JSON.parse(JSON.stringify(originalCardsArr));
//       setCardsArr(
//         newOriginalCardsArr.filter(
//           (card) =>
//             card.title.startsWith(filter) || card.bizNumber.startsWith(filter)
//         )
//       );
//     }
//   };

//   useEffect(() => {
//     filterFunc();
//   }, [qparams.filter]);

//   const handleMoreInformationFromInitialCardsArr = (id) => {
//     navigate(`/infor/${id}`);
//   };
//   if (!cardsArr) {
//     return <Spinner animation="border" role="status"></Spinner>;
//   }

//   return (
//     <Container>
//       <h1 className="title"> menu</h1>
//       <Row className="mb-3">
//         {cardsArr.map((item) => (
//           <CardMenuLogut
//             key={item._id + Date.now()}
//             id={item._id}
//             imageUrl={item.imageUrl}
//             imageAlt={item.imageAlt}
//             title={item.title}
//             description={item.description}
//             price={item.price}
//           />
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default LogutMenuPage;
