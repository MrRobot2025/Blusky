import {Container ,Row ,Col , Button } from "react-bootstrap";
import card from "../../static/images/card.jpg";
const Site =(props)=>{
    return(
        <Container>
         <Row className='my-5'>
            <Col md='6' className="size">
            <img src={card} alt="" />
            </Col>
            <Col md='6' className=''>
            <h2>{props.name}</h2>
            <p className='mx-5'>
              {props.des}
            </p>
            <Button variant="primary" size='lg' className='m-2'> Interested </Button>
            <Button variant="dark" size='lg' className='m-2'> More Info? </Button>
            </Col>
        </Row>
        </Container>
    );

}

export default Site;