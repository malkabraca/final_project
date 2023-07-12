import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { logDOM } from "@testing-library/react";
import TableOrder from "./TableOrder";
import Table from "react-bootstrap/Table";

const CompletionOfAnOrder = ({ orderId }) => {
  const [totalSum, setTotalSum] = useState(0);
  const [show, setShow] = useState(false);
  const [cardsArr, setCardsArr] = useState(null);
  const [orderIdMenu, setOrderIdMenu] = useState();
  const [cardrIdMenu, setCardIdMenu] = useState({});
  const navigate = useNavigate();
  let qparams = useQueryParams();
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleShow = () => {
  //   console.log("poooo");
  //   console.log(cardsArr);
  //   if (!cardsArr) {
  //     toast.error("There are no details in the order");
  //   }
  //   else{
  //     setShow(true);
  //   }
   
  // };

  const id = jwt_decode(localStorage.token)._id;

  const completionOrderMenu = async () => {
    try {
      console.log(orderId);
      const orders = await axios.get("/orders/" + orderId);
      // console.log("orders",orders);
      const completion = orders.data.menuOrder;
      // console.log("completion",completion);
      // if (completion.length===0) {
      //   toast.error("There are no details in the order");
      // }
      return completion;
    } catch (err) {
      toast.error(err.response._id);
    }
  };

  // const getOrderData = async () => {
  //   const orderArr = await completionOrderMenu();
  //   console.log("orderArr",orderArr);
  //   if (!orderArr) {
  //     return
  //   }
  //   const firstElements = orderArr.map((array) => array[0]);
  //   const tElements = orderArr.map((array) => array[1]);
  //   let card = [];
  //   try {
  //     const cards = await axios.get("/cards");
  //     tElements.map((item) => {
  //       const matchedCard = cards.data.find((card) => card._id === item);
  //       if (matchedCard) {
  //         card = [...card, matchedCard];
  //       }
  //     });
  //     setCardsArr(card);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  const getOrderData = async () => {
    const orderArr = await completionOrderMenu();
    console.log("orderArr",orderArr);
    if (!orderArr) {
      return
    }
    // const firstElements = orderArr.map((array) => array[0]);
    // const tElements = orderArr.map((array) => array[1]);
    let card = [];
    try {
      const cards = await axios.get("/cards");
      orderArr&&orderArr.map((item) => {
        const matchedCard = cards.data.find((card) => card._id === item[1]);
        if (matchedCard) {
          card.push({...matchedCard,"amount":item[0]})
        }
      });
      setCardsArr(card);
    } catch (err) {
      console.log(err);
    }
  };
  // const totalOrder=()=>{
  //   let total= []
  //   {cardsArr && cardsArr.map((item) => (
  //     total=[...total+(item.price*item.amount)]
  //     ))}
  //     console.log(total);
  // return total
  // }

  // totalOrder()

  useEffect(() => {
    getOrderData();
  }, [show]);

  useEffect(() => {
    const calculateTotalSum = () => {
      let sum = 0;
      if (cardsArr) { 
        cardsArr.forEach((item) => {
          sum += item.price * item.amount;
        });
      }
      setTotalSum(sum);
    };
  
    calculateTotalSum();
  }, [cardsArr]);
  console.log("cardsArr", cardsArr);
  return (
    <Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>product</th>
                <th>Amount</th>
                <th>price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cardsArr &&
                cardsArr.map((item) => (
                  <TableOrder
                    key={item._id + Date.now()}
                    idCardsArr={item._id}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                  />
                ))}
             <tr>
                <td colSpan={3}>Total Sum:</td>
                <td>{totalSum +"$"}</td>
                
              </tr>
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
      <div>
        <Button
          variant="warning"
          onClick={handleShow}
          className="buttenCompletionOfAnOrder"
        >
          Completion of an order
        </Button>
      </div>
    </Container>
  );
};

export default CompletionOfAnOrder;
