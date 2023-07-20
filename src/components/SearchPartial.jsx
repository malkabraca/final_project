import * as React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from 'react-bootstrap';


// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("xs")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("xs")]: {
//       width: "0ch",
//       "&:focus": {
//         width: "15ch",
//       },
//     },
//   },
// }));

const SearchPartial = () => {
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
console.log(searchInput);
  const navigate = useNavigate();
  const searchFunc = (ev) => {
    const value = ev.target.value;
    setSearchInput(value);
    const pathname = location.pathname;
    navigate(`${pathname}?filter=${searchInput}`);
    /*    searchSubmit(value);  */

    /* setSearchState(ev.target.value); */
  };
  const searchSubmit = (ev) => {
    ev.preventDefault();
    // event.stopImmediatePropagation();
    const pathname = location.pathname;
    navigate(`${pathname}?filter=${searchInput}`);
  };

  console.log(searchInput);
  return (
    // <Form onSubmit={searchSubmit}>
      <Form.Control
      // onSubmit={searchSubmit}
        // type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchInput}
        onChange={searchFunc}
      />
     
    // </Form>
  );
};

export default SearchPartial;
