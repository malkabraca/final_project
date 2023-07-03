import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { BsCurrencyDollar } from "react-icons/bs";
import CardMenu from "../components/CardMenu";
import { toast } from "react-toastify";
import useQueryParams from "../hooks/useQueryParams";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MenuPage = () => {
  const [originalCardsArr, setOriginalCardsArr] = useState(null);
  const [cardsArr, setCardsArr] = useState(null);
  const navigate = useNavigate();
  let qparams = useQueryParams();
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        filterFunc(data);
      })
      .catch((err) => {
        toast.error("err from axios" + "" + err.response.data);
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
      /*
        when component loaded and states not loaded
      */
      setOriginalCardsArr(data);
      setCardsArr(
        data.filter(
          (card) =>
            card.title.startsWith(filter) || card.bizNumber.startsWith(filter)
        )
      );
      return;
    }
    if (originalCardsArr) {
      /*
        when all loaded and states loaded
      */
      let newOriginalCardsArr = JSON.parse(JSON.stringify(originalCardsArr));
      setCardsArr(
        newOriginalCardsArr.filter(
          (card) =>
            card.title.startsWith(filter) || card.bizNumber.startsWith(filter)
        )
      );
    }
  };

  useEffect(() => {
    filterFunc();
  }, [qparams.filter]);

  const handleDeleteFromInitialCardsArr = async (id) => {
    try {
      await axios.delete("/cards/" + id);
      setCardsArr((newCardsArr) =>
        newCardsArr.filter((item) => item._id != id)
      );
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  const handleEditFromInitialCardsArr = (id) => {
    const cardToEdit = cardsArr.find((card) => card._id == id);
    navigate(`/edit/${id}`, { state: { user_id: cardToEdit.user_id } });
  };
  const handleMoreInformationFromInitialCardsArr = (id) => {
    navigate(`/infor/${id}`);
  };
  if (!cardsArr) {
    return  <Spinner animation="border" role="status"></Spinner>
  }
  const deleteHome = () => {};

  // const card = [
  //   {
  //     title: "card1",
  //     description: "Create a first card",
  //     imageUrl:
  //       "https://cdn.xxl.thumbs.canstockphoto.co.il/%D7%99%D7%9C%D7%93%D7%94-%D7%95%D7%A7%D7%98%D7%95%D7%A8-%D7%93%D7%95%D7%92%D7%9E%D7%94-%D7%91%D7%95%D7%91%D7%94-%D7%AA%D7%9E%D7%95%D7%A0%D7%94_csp7498887.jpg",
  //     imageAlt: "doll",
  //     price: "150",
  //   },
  //   {
  //     title: "card2",
  //     description: "Create a first card",
  //     imageUrl:
  //       "https://cdn.xxl.thumbs.canstockphoto.co.il/%D7%99%D7%9C%D7%93%D7%94-%D7%95%D7%A7%D7%98%D7%95%D7%A8-%D7%93%D7%95%D7%92%D7%9E%D7%94-%D7%91%D7%95%D7%91%D7%94-%D7%AA%D7%9E%D7%95%D7%A0%D7%94_csp7498887.jpg",
  //     imageAlt: "doll",
  //     price: "100",
  //   },
  //   {
  //     title: "card3",
  //     description: "Create a first card",
  //     imageUrl:
  //       "https://cdn.xxl.thumbs.canstockphoto.co.il/%D7%99%D7%9C%D7%93%D7%94-%D7%95%D7%A7%D7%98%D7%95%D7%A8-%D7%93%D7%95%D7%92%D7%9E%D7%94-%D7%91%D7%95%D7%91%D7%94-%D7%AA%D7%9E%D7%95%D7%A0%D7%94_csp7498887.jpg",
  //     imageAlt: "doll",
  //     price: "50",
  //   },
  // ];
  return (
    <Container>
      <h1 className="title"> menu</h1>
      <Row className="mb-3">
        {cardsArr.map((item) => (
          <CardMenu
            key={item._id + Date.now()}
            imageUrl={item.imageUrl}
            imageAlt ={item.imageAlt}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MenuPage;
