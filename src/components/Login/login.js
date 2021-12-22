import { Container ,Image} from "react-bootstrap";
import "./login.css";
import logo from "../../logo.svg";
const Login =()=>{

    return(
        <>
           
            <Container className="login-form">
                <Image className="login-image" src={logo}></Image>
                 <form>
                <input className="input-text" type="text" placeholder="email/username"></input><br></br>
                <input className="input-text" type="password" placeholder="password"></input><br></br> 
                <a className="form-link" href="/">Forgot password?</a><br></br>
                <button className="input-submit">Login</button><br></br>
                <p className="form-link" href="/">Didn't have an account?
                <a className="form-link-a" href="/signup">SignUp</a></p><br></br>
                </form>
               
            </Container>
           
        </>
    );


}

export default Login;