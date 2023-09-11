import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  Image,
  Nav,
  Row,
  Spinner,
} from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuLogoutCom from "../components/CardMenuLogut.jsx";
import PopupExample from "../components/popupOrder";
import ROUTES from "../routes/ROUTES";
import "../css/menu.css";

const MenuLogoutPage = () => {
  const [originalCardsArr, setOriginalCardsArr] = useState(null);
  const [cardsArr, setCardsArr] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  const handleButtonClick = () => {
    navigate(ROUTES.MENU);
  };
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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filterItemsByCategory = (category) => {
    return cardsArr.filter((item) => item.category === category);
  };
  const categories = [
    "Main dishes",
    "Salads",
    "drinking",
  ];
  return (
    <Container>
      <h1 className="title"> Menu</h1>
      <Nav variant="underline" defaultActiveKey="/home" className="nav_catgory">
        <Nav.Item className="nav_item_catgory">
          <Nav.Link  eventKey="link-1" onClick={() => handleCategoryClick(null)}>All</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link
            eventKey="link-2"
            onClick={() => handleCategoryClick("drinking")}
          >
            drinking
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link
            eventKey="link-3"
            onClick={() => handleCategoryClick("Main dishes")}
          >
            Main Dishes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link
            eventKey="link-4"
            onClick={() => handleCategoryClick("Salads")}
          >
           Salads
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Row>
        <h2 className="subtitleh2">{selectedCategory}</h2>
        {selectedCategory !== null
          ? cardsArr
              .filter((item) => item.category === selectedCategory)
              .map((item) => (
                <MenuLogoutCom
                  key={item._id + Date.now()}
                  id={item._id}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))
          : 
          // categories.map((category) => (
          //     <div key={category}>
          //       <h3 className="subtitleh2">{category}</h3>
          //       {filterItemsByCategory(category).map((item) => (
          //         <MenuLogoutCom
          //           key={item._id + Date.now()}
          //           id={item._id}
          //           imageUrl={item.imageUrl}
          //           imageAlt={item.imageAlt}
          //           title={item.title}
          //           description={item.description}
          //           price={item.price}
          //         />
          //       ))}
          //     </div>
          //   ))}
          categories.map((category) => (
            <div key={category}>
              <h3 className="subtitleh2">{category}</h3>
              <div className="row">
                {filterItemsByCategory(category).map((item) => (
                  <div className="col-md-6" key={item._id + Date.now()}>
                    <MenuLogoutCom
                      id={item._id}
                      imageUrl={item.imageUrl}
                      imageAlt={item.imageAlt}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}  
      </Row>
      <PopupExample variant="warning" onClick={handleButtonClick} />
    </Container>
  );
};

export default MenuLogoutPage;

//   ? cardsArr
//       .filter((item) => item.category === selectedCategory)
//       .map((item) => (
//         <MenuLogoutCom
//           key={item._id + Date.now()}
//           id={item._id}
//           imageUrl={item.imageUrl}
//           imageAlt={item.imageAlt}
//           title={item.title}
//           description={item.description}
//           price={item.price}
//         />
//       ))
//   :cardsArr.map((item) => (
//       <MenuLogoutCom
//         key={item._id + Date.now()}
//         id={item._id}
//         imageUrl={item.imageUrl}
//         imageAlt={item.imageAlt}
//         title={item.title}
//         description={item.description}
//         price={item.price}
//       />
//     ))}

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
