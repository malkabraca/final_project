import { Container } from "react-bootstrap";
import ROUTES from "../routes/ROUTES";
import CarouselHome from "../components/carosel.jsx";
import CardFood from "../components/carsd.jsx";
import Button from "react-bootstrap/Button";
import AbutHome from "../components/AbutHome";

const HomePage = () => {
  return (
    <Container>
      <CarouselHome />
      <h1 className="title">Welcome</h1>
      {/* <AbutHome /> */}
      {/* <div class="row justify-content-center">
        <div class="col-md-8"> */}
          <div className="abothome">
            <p>
              Welcome to our luxurious dairy chef restaurant, where culinary
              excellence and indulgence come together to create an extraordinary
              dining experience. Step into a world of refined elegance, where
              every detail has been meticulously crafted to cater to the most
              discerning palates. Our dairy chef restaurant offers an exquisite
              selection of dairy-based dishes that celebrate the richness and
              versatility of dairy products.
              <br></br>
               From the moment you enter, you will
              be captivated by the sophisticated ambiance that envelops the
              space. The interior design exudes opulence, with plush
              furnishings, soft lighting, and tasteful decor. As you settle into
              your seat, our knowledgeable and attentive staff will guide you
              through the culinary journey that awaits. Our dairy chef takes
              pride in sourcing only the finest ingredients, ensuring that each
              dish is a masterpiece of flavor and presentation.
            </p>
          </div>
        {/* </div>
      </div> */}
      <Button variant="warning" className="buttonhome">
        Book a table
      </Button>
      <Button variant="warning" className="buttonhome">
        takeAway
      </Button>
      <CardFood />
    </Container>
  );
};
export default HomePage;
