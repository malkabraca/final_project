import { Button, Col, Form, ListGroup } from "react-bootstrap"
import ImagePopup from "./ImagePopup"
import { BsCurrencyDollar } from "react-icons/bs"

const CardMenu =({imageUrl,title,description,price,alt})=>{
    return(
        <Col xs={12} md={6}>
        <Form.Group as={Col}>
          <ListGroup className="alert">
            <ImagePopup imageUrl={imageUrl} alt={alt}/>
            <h3>{title}</h3>
            <h6> {description}</h6>
            <h5>
              {price}
              <BsCurrencyDollar />
            </h5>
            <Button variant="warning" className="alertlink" href="#">
              Add to order
            </Button>
          </ListGroup>
        </Form.Group>
      </Col>
    )
}

export default CardMenu