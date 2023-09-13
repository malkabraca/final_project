import {
  Button,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import { BsCardHeading, BsListUl } from "react-icons/bs";
import CardMenu from "../components/CardMenu";
import { toast } from "react-toastify";
import useQueryParams from "../hooks/useQueryParams";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonCreatCom from "../components/ButtonCreatCom";
import CompletionOfAnOrder from "../components/OrderSummaryCom";
import "../css/menu.css";
import "../css/pages.css";

const MenuPage = () => {
  const [originalCardsArr, setOriginalCardsArr] = useState(null);
  const [cardsArr, setCardsArr] = useState(null);
  const [orderIdMenu, setOrderIdMenu] = useState(null);
  const [listOrCard, setListOrCard] = useState(true);

  const navigate = useNavigate();
  let qparams = useQueryParams();
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  const id = jwt_decode(localStorage.token)._id;

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

  useEffect(() => {
    const withdrawalOfOrderId = async () => {
      try {
        const order = await axios.get("/orders/my-order-findOne/" + id);
        setOrderIdMenu(order.data);
      } catch (err) {
        toast.error(err.response._id);
      }
    };
    withdrawalOfOrderId();
  }, [orderIdMenu]);

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
      setCardsArr(
        data.filter(
          (card) => card.title.startsWith(filter)
        )
      );
      return;
    }
    if (originalCardsArr) {
      let newOriginalCardsArr = JSON.parse(JSON.stringify(originalCardsArr));
      setCardsArr(
        newOriginalCardsArr.filter(
          (card) => card.title.startsWith(filter)
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

  if (!cardsArr) {
    return <Spinner animation="border" role="status"></Spinner>;
  }


  const handelListOrCard = () => {
    setListOrCard(!listOrCard);
  };

  const categories = [
    "Main dishes",
    "Salads",
    "drinking",
  ];

  const filterItemsByCategory = (category) => {
    return cardsArr.filter((item) => item.category === category);
  };

  return (
    <Container>
      <Button
        variant="warning"
        className="buttonList"
        onClick={handelListOrCard}
      >
        {listOrCard ? <BsCardHeading /> : <BsListUl />}
      </Button>
      <div>
        <h1 className="title"> menu</h1>
        <ButtonCreatCom canCreate={payload && payload.isAdmin} />
        <Row className="mb-3">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="subtitleh2">{category}</h3>
              {filterItemsByCategory(category).map((item) => (
                <CardMenu
                  key={item._id + Date.now()}
                  id={item._id}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  orderId={orderIdMenu}
                  onDelete={handleDeleteFromInitialCardsArr}
                  onEdit={handleEditFromInitialCardsArr}
                  canEdit={payload && payload.isAdmin}
                  canDelete={payload && payload.isAdmin}
                  canEd={!(payload && payload.isAdmin)}
                  canFav={payload}
                  listOrCard={listOrCard}
                />
              ))}
            </div>
          ))}
        </Row>
      </div>
      <CompletionOfAnOrder variant="warning" orderId={orderIdMenu} />
    </Container>
  );
};

export default MenuPage;
