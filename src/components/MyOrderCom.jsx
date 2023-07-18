import { Col, FloatingLabel, Form } from "react-bootstrap";

const MyOrderCom = ({ item, order}) => {
  // console.log("item",item);
  // console.log("order",order);
  if (item === "orderStatus") return;
  if (item === "takeAway") return;
  return (
    // <Col xs={12} md={6}>
    //   <Form.Label as={Col} controlid={item}>
    //     <FloatingLabel
    //       controlid="floatingInput"
    //       label={item + "*"}
    //       className="mb-3"
    //     >
    //       {/* <Form.Control type={item} placeholder={item} /> */}
    //       <Form.Control
    //         name={item}
    //         id={item}
    //         type={item}
    //         className="colinput"
    //         value={order ? order[item] : ""}
    //         readOnly
    //       />
    //     </FloatingLabel>
    //   </Form.Label>
    // </Col>
    <Col xs={12} md={6}>
      <Form.Group as={Col} controlid={item}>
        <Form.Label
          className="textMyOrder"
          controlid="floatingInput"
          label={item + "*"}
          // className="mb-3"
        >{item} </Form.Label>
           <Col sm={10}>
          <Form.Control
            name={item}
            id={item}
            type={item}
            className="colinput"
            value={order ? order[item] : ""}
            readOnly
          />
          </Col>
      </Form.Group>
    </Col>
  );
};

export default MyOrderCom;