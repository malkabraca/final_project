import { useState } from "react";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import ROUTES from "../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ImageNavbar =()=>{
    const [imag, setImag] = useState(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      );
    
      const payload = useSelector((bigPie) => bigPie.authSlice.payload);

      console.log("imag",imag);
      const id = jwt_decode(localStorage.token)._id;
      const navigate = useNavigate();
      
      useEffect(() => {
        (async () => {
          try {
            const { data } = await axios.get("/auth/users/" + id);
            const userid = {
              ...data,
            };
            console.log("userid",userid);
            const urlUser = userid.imageUrl;
            console.log("user",userid.imageUrl);
            setImag(urlUser);
          } catch (err) {
            console.log("There is an error," + "" + err.response.data);
          }
        })();
    }, [payload]);

      const profailClick = () => {
        navigate(ROUTES.PROFAIL);
      };

      return(
        <div className="profile-picture-container"  onClick={profailClick}>
        <Image
          src={imag}
          alt="Profile Picture"
          roundedCircle
          className="profile-picture"
        />
        <span className="ml-2"></span>
      </div>
      )
}
export default ImageNavbar