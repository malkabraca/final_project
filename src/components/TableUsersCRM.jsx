import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";

const TableUsers =({
  name,
  phone,
  email,
  city,
  street,
  houseNumber,
  createdAt,
 }) => {
 
     return (
         <tr>
           <td>{name}</td>
           <td>{phone}</td>
           <td> {email}</td>
           <td className="medieCrm">{city}</td>
           <td className="medieCrm">{street}</td>
           <td className="medieCrm">{houseNumber}</td>
           <td className="medieCrm">{createdAt}</td>
         </tr>
       );
     };
export default TableUsers;
