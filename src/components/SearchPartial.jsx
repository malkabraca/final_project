import * as React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchPartial = () => {
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  // console.log(searchInput);
  const navigate = useNavigate();

  // const searchFunc = (ev) => {
  //   const value = ev.target.value;
  //   setSearchInput(value);
  //   const pathname = location.pathname;
  //   navigate(`${pathname}?filter=${searchInput}`);
  //   /*    searchSubmit(value);  */

  //   /* setSearchState(ev.target.value); */
  // };
  // const searchSubmit = (ev) => {
  //   console.log("submitted");
  //   ev.preventDefault();
  //   // event.stopImmediatePropagation();
  //   const pathname = location.pathname;
  //   navigate(`${pathname}?filter=${searchInput}`);
  // };
  const searchSubmit = (ev) => {
    console.log("submitted");
    ev.preventDefault();
    const pathname = location.pathname;
    navigate(`${pathname}?filter=${searchInput}`);
  };
  
  const handleInput = (ev) => {
    setSearchInput(ev.target.value);
    const pathname = location.pathname;
    navigate(`${pathname}?filter=${ev.target.value}`);
  };
  // console.log(searchInput);
  return (
    // <Form onSubmit={searchSubmit} className="d-flex">
    //   <Form.Control
    //     onSubmit={searchSubmit}
    //     type="search"
    //     placeholder="Search"
    //     className="me-2"
    //     aria-label="Search"
    //     value={searchInput}
    //     onChange={(e) => setSearchInput(e.target.value)}
    //   />
    //   <Button variant="outline-success" type="submit">Search</Button>
    // </Form>
    <Form onSubmit={searchSubmit}>
      <input
        type="text"
        value={searchInput}
        onInput={handleInput}
        placeholder="Search"
        className="Search"
        aria-label="Search"
      />
    </Form>
  );
};

export default SearchPartial;
