import { Container ,Image} from "react-bootstrap";
import "../Login/login.css";
import logo from "../../logo.svg";
import "./Contact.css";
const Contact =()=>{

    return(
        <>
           
           <Container className="login-form signup">
                <Image className="login-image" src={logo}></Image>
                 <form>
                <input className="input-text" type="text" placeholder="Full name"></input><br></br>
                <input className="input-text" type="text" placeholder="email"></input><br></br>
                <textarea name="message" className="input-text  enter-your-message" placeholder="enter your message here..." ></textarea>
                <br></br>
                <button className="input-submit" >SignUp</button><br></br>
                </form>
               
            </Container>
           
        </>
    );


}

export default Contact;