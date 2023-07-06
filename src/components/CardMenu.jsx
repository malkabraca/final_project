import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  ListGroup,
} from "react-bootstrap";
import ImagePopup from "./ImagePopup";
import { BsCurrencyDollar, BsPencilFill, BsTrashFill } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";

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
}) => {
  // const [favState, setfavState] = useState(isFavCards);

  const handleAddToOrder = async () => {
    try {
      await axios.patch("/orders/menuOrder/" + orderId, { card_id: id });
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  const handleDeleteBtnClick = () => {
    onDelete(id);
  };
  const handleEditBtnClick = () => {
    onEdit(id);
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
            <Button
              variant="warning"
              onClick={handleDeleteBtnClick}
              className="alertlink"
            >
              <BsTrashFill />
            </Button>
            <Button
              variant="warning"
              onClick={handleEditBtnClick}
              className="alertlink"
            >
              <BsPencilFill />
            </Button>
            <Button
              variant="warning"
              onClick={handleAddToOrder}
              className="alertlink"
              href="#"
            >
              Add to order
            </Button>
          </ListGroup>
        </Form.Group>
      </Col>
  );
};

export default CardMenu;
