import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import ImagePopup from "./ImagePopup";
import {
  BsCurrencyDollar,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsPencilFill,
  BsTrashFill,
} from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const CardMenu = ({
  id,
  orderId,
  imageUrl,
  title,
  description,
  price,
  alt,
  onClick,
  isFavCards,
  onDelete,
  onEdit,
  canEdit,
  canDelete,
  canEd,
}) => {
  // const [favState, setfavState] = useState(isFavCards);
  const [amount, setaAmount] = useState(1);
  const [isFilled, setIsFilled] = useState(false);
  console.log(orderId);

  useEffect(() => {
    handleDes();
  }, []);

  const handleDes = async () => {
    try {
      const orderdis = await axios.get("/orders/" + orderId);
      // const menuid =
      //   orderdis && orderdis.data.menuOrder.find((item) => item[1] === id);
      if ( orderdis && orderdis.data.menuOrder.find((item) => item[1] === id)) {
        setIsFilled(!isFilled);
      }
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data);
    }
  };

  const handleAddToOrder = async () => {
    setIsFilled(!isFilled);
    try {
      await axios.patch("/orders/menuOrder/" + orderId, {
        card_id: id,
        amount: amount,
      });
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data);
    }
  };
  const handleDeleteBtnClick = () => {
    onDelete(id);
  };
  const handleEditBtnClick = () => {
    onEdit(id);
  };

  const handlePlos = () => {
    setaAmount((amount) => amount + 1);
  };
  const handleMinoc = () => {
    if (amount == 1) {
      return;
    }
    setaAmount((amount) => amount - 1);
  };
  const handleButtonClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <Col xs={12} md={6}>
      <Form.Group as={Col}>
        <ListGroup className="alert">
          <ImagePopup imageUrl={imageUrl} alt={alt} />
          <h3>{title}</h3>
          <h6> {description}</h6>
          <h5>
            {price}
            <BsCurrencyDollar />
          </h5>
          <Row className="mb-3">
            {canDelete && (
              <Button
                variant="warning"
                onClick={handleDeleteBtnClick}
                className="buttenDelEdiMenu"
              >
                <BsTrashFill />
              </Button>
            )}
            {canEdit && (
              <Button
                variant="warning"
                onClick={handleEditBtnClick}
                className="buttenDelEdiMenu"
              >
                <BsPencilFill />
              </Button>
            )}
            {canEd ? (
              <Button
                variant="warning"
                className="buttenAddMenu"
                onClick={handlePlos}
              >
                <BsFillCaretUpFill />
              </Button>
            ) : (
              ""
            )}
            {canEd ? (
              <Button
                variant="warning"
                className="buttenAddMenu"
                // onClick={handleAddToOrder}
              >
                {amount}
              </Button>
            ) : (
              ""
            )}

            {canEd ? (
              <Button
                variant="warning"
                className="buttenAddMenu"
                onClick={handleMinoc}
              >
                {" "}
                <BsFillCaretDownFill />
              </Button>
            ) : (
              ""
            )}
            {canEd && (
              // <Button
              //   variant="warning"
              //   onClick={handleAddToOrder}
              //   className="alertlink"
              //   href="#"
              // >
              //   Add to order
              // </Button>
              <Button
                variant="warning"
                onClick={handleAddToOrder}
                className={isFilled ? "alertlink filled" : "alertlink"}
                href="#"
              >
                {isFilled ? "Added to order" : "Add to order"}
              </Button>
            )}
          </Row>
        </ListGroup>
      </Form.Group>
    </Col>
  );
};

export default CardMenu;
