import { Container ,Image} from "react-bootstrap";
import "../Login/login.css";
import logo from "../../logo.svg";
const CYP =()=>{

    return(
        <>
           
           <Container className="login-form signup">
                <Image className="login-image" src={logo}></Image>
                 <form>
                <input className="input-text" type="text" placeholder="Full name"></input><br></br>
                <input className="input-text" type="text" placeholder="email"></input><br></br>
                <input className="input-text" type="text" placeholder="email" ></input><br></br>
                <br></br>
                <button className="input-submit">SignUp</button><br></br>
                </form>
               
            </Container>
           
        </>
    );


}

export default CYP;