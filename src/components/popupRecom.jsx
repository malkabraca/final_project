import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { validateRecommendationSchema } from "../validation/recommendation";

const Recommendation = () => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [name, setname] = useState("");
  const [inputState, setInputState] = useState({ recommendations: "" });
  const [inputsErrorState, setInputsErrorState] = useState(null);

  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  const id = jwt_decode(localStorage.token)._id;

  console.log("inputState", inputState);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/auth/users/" + id);
        const userid = {
          ...data,
        };
        const nameUser = userid.firstName + " " + userid.lastName;
        setname(nameUser);
      } catch (err) {
        toast.error("There is an error," + "" + err.response.data);
      }
    })();
  }, []);

  const AddRecommendation = async () => {
    try {
      await axios.patch("/auth/users/contact/" + id, inputState);
      handleClose()
    } catch (err) {
      toast.error(err.response.data);
    }
  };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const newjoiResponse = validateRecommendationSchema(newInputState);
    setInputsErrorState(newjoiResponse);
  };
  return (
    <div>
      <Button variant="warning" className="buttonhome" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              {/* <Form.Control type="Name" autoFocus /> */}
              <Form.Control type="text" value={name} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <label htmlFor="rating">Rate the restaurant:</label>
              <ReactStars
                count={5}
                onChange={handleRatingChange}
                size={24}
                activeColor="#ffd700"
                value={rating}
              />
              <Form.Label>My Recommendation</Form.Label>
              <Form.Control
                id="recommendations"
                as="textarea"
                value={inputState.recommendations}
                onChange={handleInputChange}
                rows={3}
                placeholder="my recommendation"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddRecommendation}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Recommendation;
