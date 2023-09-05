import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Card,
  Image,
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
  imageAlt,
  onClick,
  isFavCards,
  onDelete,
  onEdit,
  canEdit,
  canDelete,
  canEd,
  listOrCard,
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
      if (orderdis && orderdis.data.menuOrder.find((item) => item[1] === id)) {
        // setaAmount(orderdis.data.menuOrder.item[0]);
        setIsFilled(!isFilled);
      }
      console.log("orderdis", orderdis.data.menuOrder);
    } catch (err) {
      // console.log(err.response.data);
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
    <Col xs={12} md={12}>
      {listOrCard ? (
        <Form.Group as={Col}>
          <ListGroup className="alert">
            <div className="product-list">
              <div key={id} className="product-item">
                <ImagePopup imageUrl={imageUrl} alt={imageAlt} />
                <div className="product-details">
                  <h3>{title}</h3>
                  <h6>{description}</h6>
                  <h5>
                    {price}
                    <BsCurrencyDollar />
                  </h5>
                </div>
              </div>
            </div>
            <div className="buttons-wrappera">
              <div className="buttons-wrapper">
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
                    /* onClick={handleAddToOrder} */
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
                    <BsFillCaretDownFill />
                  </Button>
                ) : (
                  ""
                )}
              </div>
              <div className="buttons-wrapper">
                {canEd ? (
                  <Button
                    variant="warning"
                    onClick={handleAddToOrder}
                    className={isFilled ? "alertlink filled" : "alertlink"}
                    /*  href="#" */
                  >
                    {isFilled ? "Added to order" : "Add to order"}
                  </Button>
                ) : (
                  ""
                )}
              </div>
              <Row>
                {canDelete ? (
                  <Button
                    variant="warning"
                    className="buttenDelEdiMenu"
                    onClick={handleDeleteBtnClick}
                  >
                    <BsTrashFill />
                  </Button>
                ) : (
                  ""
                )}
                {canEdit ? (
                  <Button
                    variant="warning"
                    className="buttenDelEdiMenu"
                    onClick={handleEditBtnClick}
                  >
                    <BsPencilFill />
                  </Button>
                ) : (
                  ""
                )}
              </Row>
            </div>
          </ListGroup>
        </Form.Group>
      ) : (
        <Form.Group as={Col}>
          <Card className="cardMenu">
            {/* <Card.Img variant="top" src={imageUrl}alt={imageAlt} /> */}
            <Image src={imageUrl} roundedCircle className="img_title" />
            <Card.Body className="cardBody">
              <Card.Title className="card_title">{title}</Card.Title>
              <Card.Text className="card_text">{description}</Card.Text>
              <h5 className="card_price">
                {price}
                <BsCurrencyDollar />
              </h5>

              {/* <Row className="mb-3"> */}
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
                  className="buttenAddMenu cardButten"
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
                  className="buttenAddMenu cardButten"
                  onClick={handleAddToOrder}
                >
                  {amount}
                </Button>
              ) : (
                ""
              )}

              {canEd ? (
                <Button
                  variant="warning"
                  className="buttenAddMenu cardButten"
                  onClick={handleMinoc}
                >
                  <BsFillCaretDownFill />
                </Button>
              ) : (
                ""
              )}
              {canEd && (
                <Button
                  variant="warning"
                  onClick={handleAddToOrder}
                  className={isFilled ? "alertlink filled" : "alertlink"}
                  href="#"
                  id="cardButten"
                >
                  {isFilled ? "Added to order" : "Add to order"}
                </Button>
              )}
              {/* </Row> */}
            </Card.Body>
          </Card>
        </Form.Group>
      )}
    </Col>

  );
};

export default CardMenu;

// <Col xs={12} md={6}>
//       {listOrCard ? (
//         <Form.Group as={Col}>
//           <ListGroup className="alert">
//             <ImagePopup imageUrl={imageUrl} alt={imageAlt} />
//             <h3>{title}</h3>
//             <h6> {description}</h6>
//             <h5>
//               {price}
//               <BsCurrencyDollar />
//             </h5>
//             <Row className="mb-3">
//               {canDelete && (
//                 <Button
//                   variant="warning"
//                   onClick={handleDeleteBtnClick}
//                   className="buttenDelEdiMenu"
//                 >
//                   <BsTrashFill />
//                 </Button>
//               )}
//               {canEdit && (
//                 <Button
//                   variant="warning"
//                   onClick={handleEditBtnClick}
//                   className="buttenDelEdiMenu"
//                 >
//                   <BsPencilFill />
//                 </Button>
//               )}
//               {canEd ? (
//                 <Button
//                   variant="warning"
//                   className="buttenAddMenu"
//                   onClick={handlePlos}
//                 >
//                   <BsFillCaretUpFill />
//                 </Button>
//               ) : (
//                 ""
//               )}
//               {canEd ? (
//                 <Button
//                   variant="warning"
//                   className="buttenAddMenu"
//                   // onClick={handleAddToOrder}
//                 >
//                   {amount}
//                 </Button>
//               ) : (
//                 ""
//               )}

//               {canEd ? (
//                 <Button
//                   variant="warning"
//                   className="buttenAddMenu"
//                   onClick={handleMinoc}
//                 >
//                   {" "}
//                   <BsFillCaretDownFill />
//                 </Button>
//               ) : (
//                 ""
//               )}
//               {canEd && (
//                 <Button
//                   variant="warning"
//                   onClick={handleAddToOrder}
//                   className={isFilled ? "alertlink filled" : "alertlink"}
//                   href="#"
//                 >
//                   {isFilled ? "Added to order" : "Add to order"}
//                 </Button>
//               )}
//             </Row>
//           </ListGroup>
//         </Form.Group>
//       ) : (
//         <Form.Group as={Col}>
//           <Card className="cardMenu">
//             {/* <Card.Img variant="top" src={imageUrl}alt={imageAlt} /> */}
//             <Image
//               src={imageUrl}
//               roundedCircle
//               style={{
//                 display: "block",
//                 margin: "0 auto",
//                 width: "150px",
//                 height: "150px",
//               }}
//             />
//             <Card.Body className="cardBody">
//               <Card.Title>{title}</Card.Title>
//               <Card.Text>{description}</Card.Text>
//               <h5>
//                 {price}
//                 <BsCurrencyDollar />
//               </h5>

//               {/* <Row className="mb-3"> */}
//               {canDelete && (
//                 <Button
//                   variant="warning"
//                   onClick={handleDeleteBtnClick}
//                   className="buttenDelEdiMenu"
//                 >
//                   <BsTrashFill />
//                 </Button>
//               )}
//               {canEdit && (
//                 <Button
//                   variant="warning"
//                   onClick={handleEditBtnClick}
//                   className="buttenDelEdiMenu"
//                 >
//                   <BsPencilFill />
//                 </Button>
//               )}
//               {canEd ? (
//                 <Button
//                   variant="warning"
//                   className="buttenAddMenu"
//                   onClick={handlePlos}
//                 >
//                   <BsFillCaretUpFill />
//                 </Button>
//               ) : (
//                 ""
//               )}
//               {canEd ? (
//                 <Button
//                   variant="warning"
//                   className="buttenAddMenu"
//                   // onClick={handleAddToOrder}
//                 >
//                   {amount}
//                 </Button>
//               ) : (
//                 ""
//               )}

//               {canEd ? (
//                 <Button
//                   variant="warning"
//                   className="buttenAddMenu"
//                   onClick={handleMinoc}
//                 >
//                   {/* {" "} */}
//                   <BsFillCaretDownFill />
//                 </Button>
//               ) : (
//                 ""
//               )}
//               {canEd && (
//                 <Button
//                   variant="warning"
//                   onClick={handleAddToOrder}
//                   className={isFilled ? "alertlink filled" : "alertlink"}
//                   // href="#"
//                 >
//                   {isFilled ? "Added to order" : "Add to order"}
//                 </Button>
//               )}
//               {/* </Row> */}
//             </Card.Body>
//           </Card>
//         </Form.Group>
//       )}
//     </Col>
