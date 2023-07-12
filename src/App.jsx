import { useEffect, useState } from "react";

/* toast */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../src/css/App.css";
import Router from "./routes/Router";
import { useSelector } from "react-redux";
import useLoggedIn from "./hooks/useLoggedIn";
import Navbarpage from "./components/Navbar";
import { Container, Spinner } from "react-bootstrap";
import Footer from "./components/Footer";
import { ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// const light = {
//   palette: {
//     mode: "light",
//   },
// };

// const dark = {
//   palette: {
//     mode: "dark",
//   },
// };


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
  const theme = {
    primaryColor: isDarkTheme ? 'var(--secondary-color)' : 'var(--primary-color)',
    // Add other theme properties here
  };
  return (
    // <ThemeProvider theme={isDarkTheme ?  'var(--secondary-color)'  : 'var(--primary-color)' }>
    <ThemeProvider theme={theme}>
      <div>
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
        <main>
          {isLoading ? (
            <Spinner animation="border" variant="warning" />
          ) : (
            <Router />
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
