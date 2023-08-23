import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsStopwatch,
} from "react-icons/bs";

const BookTable = () => {
  // State variables for form fields
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary actions with the form data
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Number of People:", numOfPeople);

    // Reset form fields after submission
    setDate("");
    setTime("");
    setNumOfPeople("");
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 11; hour <= 23; hour++) {
      options.push(
        <option key={hour} value={`${hour}:00`}>
          {formatTime(hour)}
        </option>
      );
    }
    return options;
  };

  const formatTime = (hour) => {
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour > 12 ? hour - 12 : hour;
    return `${formattedHour}:00 ${ampm}`;
  };

  return (
    <Container className="table-page">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="inputBookTable"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="formTime">
              <Form.Label>
                Time <BsStopwatch />
              </Form.Label>
              <Form.Select
                as="select"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="inputBookTable"
              >
                <option value="">Choose a time</option>
                {generateTimeOptions()}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="formNumOfPeople">
              <Form.Label>Number of People</Form.Label>
              <Form.Select
                as="select"
                value={numOfPeople}
                onChange={(e) => setNumOfPeople(e.target.value)}
                required
                className="inputBookTable"
                //   style={{ height: '120px', overflowY: 'auto' }}
              >
                {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} Guests
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Button variant="primary" type="submit" className="button_book">
        <BsArrowRightShort />
        <BsArrowRightShort />
        Continued
        <BsArrowLeftShort />
        <BsArrowLeftShort />
      </Button>
    </Container>
  );
};

export default BookTable;

// <Container>
//       <Form onSubmit={handleSubmit}>
//         <Row className="mb-3">
//           <Col xs={12} md={4}>
//             <Form.Group controlId="formDate">
//               <Form.Label>Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 required
//                 className="square-field"
//               />
//             </Form.Group>
//           </Col>
//           <Col xs={12} md={4}>
//             <Form.Group controlId="formTime" >
//               <Form.Label>Time</Form.Label>
//               <Form.Select
//                 as="select"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 required
//                 className="square-field"
//               >
//                 <option value="">Choose a time</option>
//                 {generateTimeOptions()}
//               </Form.Select>
//             </Form.Group>
//           </Col>
//           <Col xs={12} md={4}>
//             <Form.Group controlId="formNumOfPeople">
//               <Form.Label>Number of People</Form.Label>
//               <Form.Select
//                 as="select"
//                 value={numOfPeople}
//                 onChange={(e) => setNumOfPeople(e.target.value)}
//                 required
//                 className="square-field"
//                 //   style={{ height: '120px', overflowY: 'auto' }}
//               >
//                 {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
//                   <option key={num} value={num}>
//                     {num} Guests
//                   </option>
//                 ))}
//               </Form.Select>
//             </Form.Group>
//           </Col>
//         </Row>
//       </Form>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Container>
