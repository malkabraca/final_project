import { useState } from "react";
import {
Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { BsCurrencyDollar } from "react-icons/bs";
import ImagePopup from "../components/ImagePopup";
import CardMenu from "../components/CardMenu";

const MenuPage = () => {
  /* const ImagePopup = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  }} */
 const imageUrls = [
   "../image/chefs-2.jpg",
"../image/chefs-2.jpg"
 
 ];
  
    /* const imageUrls = ["../image/chefs-2.jpg", "../image/chefs-2.jpg"]; */
console.log(imageUrls[1]);
console.log(imageUrls);

const card=[ {
  "title": "card1",
  "description": "Create a first card",
  "imageUrl": "https://cdn.xxl.thumbs.canstockphoto.co.il/%D7%99%D7%9C%D7%93%D7%94-%D7%95%D7%A7%D7%98%D7%95%D7%A8-%D7%93%D7%95%D7%92%D7%9E%D7%94-%D7%91%D7%95%D7%91%D7%94-%D7%AA%D7%9E%D7%95%D7%A0%D7%94_csp7498887.jpg",
  "imageAlt": "doll",
  "price": "150"
},
{
  "title": "card2",
  "description": "Create a first card",
  "imageUrl": "https://cdn.xxl.thumbs.canstockphoto.co.il/%D7%99%D7%9C%D7%93%D7%94-%D7%95%D7%A7%D7%98%D7%95%D7%A8-%D7%93%D7%95%D7%92%D7%9E%D7%94-%D7%91%D7%95%D7%91%D7%94-%D7%AA%D7%9E%D7%95%D7%A0%D7%94_csp7498887.jpg",
  "imageAlt": "doll",
  "price": "100"
},
{
  "title": "card3",
  "description": "Create a first card",
  "imageUrl": "https://cdn.xxl.thumbs.canstockphoto.co.il/%D7%99%D7%9C%D7%93%D7%94-%D7%95%D7%A7%D7%98%D7%95%D7%A8-%D7%93%D7%95%D7%92%D7%9E%D7%94-%D7%91%D7%95%D7%91%D7%94-%D7%AA%D7%9E%D7%95%D7%A0%D7%94_csp7498887.jpg",
  "imageAlt": "doll",
  "price": "50"
}]
  return (
    <Container>
      <h1 className="title"> menu</h1>
      <Row className="mb-3">
      {card.map((item) => (
              <CardMenu
              key={item.title}
              imageUrl = {item.imageUrl}
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