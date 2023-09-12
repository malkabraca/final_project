import axios from "axios";
import { Col, Nav, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TableCRM from "../components/TableCRM";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "../css/crm&pay.css";
import TableOrderCRM from "../components/TableOrderCRM";
import TableUsers from "../components/TableUsersCRM";
import { useNavigate } from "react-router-dom";
const CRMPage = () => {
  const [order, setOrder] = useState();
  const [table, setTable] = useState();
  const [users, setUsers] = useState();
  const [usersView, setUsersView] = useState(true);
  const [ordersView, setordersView] = useState(true);
  const [tableView, setTableView] = useState(true);
  const navigate = useNavigate();
  const handelusersView = () => {
    setUsersView(true);
    setordersView(false);
    setTableView(false);
  };

  const handelordersView = () => {
    setUsersView(false);
    setordersView(true);
    setTableView(false);
  };
  const handeltableView = () => {
    setUsersView(false);
    setordersView(false);
    setTableView(true);
  };
  const handelAll = () => {
    setUsersView(true);
    setordersView(true);
    setTableView(true);
  };

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const orders = await axios.get("/orders");
      console.log(orders.data);
      setOrder(orders.data);
    } catch (err) {
      console.log(err);
      toast.error(err.response);
    }
  };

  useEffect(() => {
    getOrdersTable();
  }, []);

  const getOrdersTable = async () => {
    try {
      const tableOrders = await axios.get("/ordersTable");
      console.log(tableOrders.data);
      setTable(tableOrders.data);
    } catch (err) {
      console.log(err);
      toast.error(err.response);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const allUsers = await axios.get("/auth/users");
      console.log(allUsers.data);
      setUsers(allUsers.data);
    } catch (err) {
      console.log(err);
      toast.error(err.response);
    }
  };
 
  const handleInfoCrm = (id) => {
    navigate(`/crm/${id}`);
  };

  return (
    <Container>
      <h1 className="title">CRM</h1>
      <Nav variant="underline" defaultActiveKey="/home" className="nav_catgory">
        <Nav.Item className="nav_item_catgory">
          <Nav.Link eventKey="link-1"  onClick={handelAll}>All</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link eventKey="link-2" onClick={handelusersView}>
            Users
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link eventKey="link-3" onClick={handelordersView}>
            Orders
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link eventKey="link-4" onClick={handeltableView}>
            Table reservations
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {ordersView ? (
        <div>
          <h3 className="subtitleh2">Orders</h3>
          <Table striped bordered hover>
            <thead className="tablacrm">
              <tr className="crmHeader">
                <th>Biz Number</th>
                <th className="medieCrm">Name</th>
                <th>Phone</th>
                <th className="medieCrm">Email</th>
                <th className="medieCrm">City</th>
                <th className="medieCrm">Street</th>
                <th className="medieCrm">House Number</th>
                <th>Take Away</th>
                <th>Order Status</th>
                <th className="medieCrm">CreatedAt</th>
              </tr>
            </thead>
            <tbody className="tablacrm">
              {order &&
                order.map((item) => (
                  <TableCRM
                    key={item._id + Date.now()}
                    id={item._id}
                    bizNumber={item.bizNumber}
                    name={item.name}
                    phone={item.phone}
                    email={item.email}
                    city={item.city}
                    street={item.street}
                    houseNumber={item.houseNumber}
                    takeAway={item.takeAway}
                    orderStatus={item.orderStatus}
                    createdAt={item.createdAt}
                    menuOrder={item.menuOrder}
                    onInfo={handleInfoCrm}
                  />
                ))}
            </tbody>
          </Table>
        </div>
      ) : (
        ""
      )}
      {tableView ? (
        <div>
          <h3 className="subtitleh2">Table reservations</h3>
          <Table striped bordered hover>
            <thead className="tablacrm">
              <tr className="crmHeader">
                <th>Biz Number</th>
                <th>Name</th>
                <th>Phone</th>
                <th className="medieCrm">Date</th>
                <th className="medieCrm">Time</th>
                <th className="medieCrm">num Of People</th>
                <th className="medieCrm">CreatedAt</th>
              </tr>
            </thead>
            <tbody className="tablacrm">
              {table &&
                table.map((item) => (
                  <TableOrderCRM
                    key={item._id + Date.now()}
                    bizNumber={item.bizNumber}
                    name={item.name}
                    phone={item.phone}
                    date={item.date}
                    time={item.time}
                    numOfPeople={item.numOfPeople}
                    createdAt={item.createdAt}
                  />
                ))}
            </tbody>
          </Table>
        </div>
      ) : (
        ""
      )}
      {usersView ?(
        <div>
      <h3 className="subtitleh2">Users</h3>
      <Table striped bordered hover>
        <thead className="tablacrm">
          <tr className="crmHeader">
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th className="medieCrm">City</th>
            <th className="medieCrm">Street</th>
            <th className="medieCrm">HouseNumber</th>
            <th className="medieCrm">CreatedAt</th>
          </tr>
        </thead>
        <tbody className="tablacrm">
          {users &&
            users.map((item) => (
              <TableUsers
                key={item._id + Date.now()}
                name={item.firstName + " " + item.lastName}
                phone={item.phone}
                email={item.email}
                city={item.city}
                street={item.street}
                houseNumber={item.houseNumber}
                createdAt={item.createdAt}
              />
            ))}
        </tbody>
      </Table>
      </div>
      ):("")}
    </Container>
  );
};
export default CRMPage;
