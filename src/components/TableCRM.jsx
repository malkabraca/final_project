import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import {
  BsCheck2,
  BsFileExcel,
  BsFileX,
  BsFillCheckSquareFill,
  BsFillFileExcelFill,
  BsUiChecks,
} from "react-icons/bs";
import { toast } from "react-toastify";
import TableOrder from "./TableOrder";

const TableCRM = ({
  bizNumber,
  name,
  phone,
  email,
  street,
  houseNumber,
  takeAway,
  orderStatus,
  createdAt,
  city,
  menuOrder,
}) => {
  const [cardsArr, setCardsArr] = useState(null);
  useEffect(() => {
    const getOrderData = async () => {
      if (!menuOrder) {
        return;
      }
      let card = [];
      try {
        const cards = await axios.get("/cards");
        menuOrder &&
          menuOrder.map((item) => {
            const matchedCard = cards.data.find((card) => card._id === item[1]);
            if (matchedCard) {
              card.push({ ...matchedCard, amount: item[0] });
            }
          });
        setCardsArr(card);
      } catch (err) {
        toast.error(err.response._id);
      }
    };
    getOrderData();
  }, [menuOrder]);
  return (
      <tr>
        <td>{bizNumber}</td>
        <td className="medieCrm">{name}</td>
        <td>{phone}</td>
        <td className="medieCrm"> {email}</td>
        <td className="medieCrm">{city}</td>
        <td className="medieCrm">{street}</td>
        <td className="medieCrm">{houseNumber}</td>
        {/* {takeAway?(<td><BsCheck2 /></td>):(<td><BsFileExcel /></td>)} */}
        {takeAway ? <td>✔️</td> : <td>❌</td>}
        {orderStatus ? <td>✔️</td> : <td>❌</td>}
        <td className="medieCrm">{createdAt}</td>
      </tr>
  );
};

export default TableCRM;
