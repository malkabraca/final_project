import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

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

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formTime">
          <Form.Label>Time</Form.Label>
          <Form.Select 
            as="select"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Choose a time</option>
            <option value="09:00">09:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="18:00">06:00 PM</option>
          </Form.Select>
        </Form.Group>
{/* 
        <Form.Group controlId="formNumOfPeople">
          <Form.Label>Number of People</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={numOfPeople}
            onChange={(e) => setNumOfPeople(e.target.value)}
            required
          />
        </Form.Group> */}

<Form.Group controlId="formNumOfPeople">
        <Form.Label>Number of People</Form.Label>
        <Form.Select 
          as="select"
          value={numOfPeople}
          onChange={(e) => setNumOfPeople(e.target.value)}
          required
        //   style={{ height: '120px', overflowY: 'auto' }}
        >
          {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num} Guests
            </option>
          ))}
        </Form.Select>
      </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BookTable;
