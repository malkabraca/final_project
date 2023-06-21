import { useEffect, useState } from "react";

/* toast */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Router from "./routes/Router";
import { useSelector } from "react-redux";
import useLoggedIn from "./hooks/useLoggedIn";
import Navbarpage from "./components/Navbar"
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";


const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loggedIn = useLoggedIn();
  useEffect(() => {
    (async () => {
      await loggedIn();
      setIsLoading(false);
    })();
  }, []);

  const isDarkTheme = useSelector(
    (bigPie) => bigPie.darkThemeSlice.isDarkTheme
  );
  return (
    // <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
   <Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
        <header>
          <Navbarpage />
        </header>
        {/* <main>{isLoading ? <CircularProgress /> : <Router />}</main> */}
        <main><Router /></main>
        <Footer />
        </Container>
  );

}

export default App;
