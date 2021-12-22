import { Container ,Image} from "react-bootstrap";
import  "../Login/login.css";
import "./signup.css";
import logo from "../../logo.svg";
const Signup =()=>{

    return(
        <>
           
            <Container className="login-form signup">
                <Image className="login-image" src={logo}></Image>
                 <form>
                <input className="input-text" type="text" placeholder="Full name"></input><br></br>
                <input className="input-text" type="text" placeholder="email"></input><br></br>
                <input className="input-text" type="text" placeholder="username"></input><br></br>
                <input className="input-text" type="password" placeholder="password"></input><br></br> 
                <input className="input-text" type="password" placeholder="re-enter password"></input><br></br> 
                <button className="input-submit">SignUp</button><br></br>
                <p className="form-link" href="/">Already have an account?
                <a className="form-link-a" href="/login">Login</a></p><br></br>
                </form>
               
            </Container>
           
        </>
    );


}

export default Signup;