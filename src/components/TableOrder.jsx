import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";

const TableOrder = ({ idCardsArr, title, price,amount }) => {
  return (
        <tr>
          <td>{title}</td>
          <td>{amount}</td>
          <td>{price}$</td>
          <td>{amount*price}$</td>
        </tr>
  );
};

export default TableOrder;

//   const [cardsArr, setCardsArr] = useState(null);
//   const [orderIdMenu, setOrderIdMenu] = useState(null);
//   const [cardrIdMenu, setCardIdMenu] = useState({});
//   const navigate = useNavigate();
//   let qparams = useQueryParams();
//   const payload = useSelector((bigPie) => bigPie.authSlice.payload);
//   const id = jwt_decode(localStorage.token)._id;
//   useEffect(() => {
//     const completionOrder = async () => {
//       try {
//         const orders = await axios.get("/orders/" + id);
//         setOrderIdMenu(orders.data);
//         console.log(orders.data);
//       } catch (err) {
//         toast.error(err.response._id);
//       }
//     };
//     completionOrder();
//   }, [orderIdMenu]);
