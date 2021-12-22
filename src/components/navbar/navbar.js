import { Navbar, Container, Nav ,NavDropdown} from "react-bootstrap";
import logo from "../../logo.svg";
import "./navbar.css";
import {useState,useEffect} from 'react';
const NavbarComponent = () => {


  const [show, setshow] = useState(false);
  const [Cityshow, setCityshow] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 990) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})

  const showDropdown =(e)=>{
    setshow(!show);
  }

  const hideDropdown =(e)=>{
    setshow(0);
  }
  

  const CityshowDropdown =(e)=>{
    setCityshow(!Cityshow);
  }

  const CityhideDropdown =(e)=>{
    setCityshow(0);
  }
  return (
    <>
      
      <Navbar style={{marginTop:"4vh"}} expand="lg" bg="white" variant="light">
        <Container>
          {
            console.log(isMobile)
          }
          <Navbar.Brand href="/"><img alt="" className="logo" src={logo} width="50" height="50" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {!isMobile?<NavDropdown
                id="nav-dropdown-dark-example"
                title="Select a City"
                menuVariant="dark"
                className="nav-hover myDropDown"
                onMouseEnter={CityshowDropdown}
                onMouseLeave={CityhideDropdown}
                show={Cityshow}
                alignLeft
             
              >
          <NavDropdown.Item href="#action/3.1" className="text-align">Prayagraj-Jhalwa</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1" className="text-align">Prayagraj-Naini</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1" className="text-align">Prayagraj-Jhusi</NavDropdown.Item>
        </NavDropdown> : null}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='me-3 blue nav-hover ' href="/">Home</Nav.Link>
              <Nav.Link className='me-3 blue nav-hover' href="#Site">Sites</Nav.Link>
              <Nav.Link className='me-3 blue nav-hover' href="#about">About</Nav.Link>
              <Nav.Link className='me-3 blue nav-hover' href="#facility">Facility</Nav.Link>
              <Nav.Link className='me-3 blue nav-hover' href="/contact">Contact</Nav.Link>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Login"
                menuVariant="dark"
                className="nav-hover myDropDown"
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                show={show}
                alignLeft
             
              >
          <NavDropdown.Item href="/login" className="text-align">Login</NavDropdown.Item>
          <NavDropdown.Item href="/myaccount" className="text-align">My Account</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item  className="DropDownButton text-align" href="/signup">SignUp</NavDropdown.Item>
        </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;