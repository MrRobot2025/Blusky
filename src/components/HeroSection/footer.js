import { Container, Row } from "react-bootstrap";
import './Footer.css'

const FooterPage = () => {
    return (
        <>
            <Container fluid className="bg-dark">
                <Row>
                    <hr />
                    <h3 className="text-white">
                        &copy; {new Date().getFullYear()} Copyright: <a href="/"> TeamBlueSky.com </a>
                    </h3>
                </Row>
            </Container>
        </>
    );
}

export default FooterPage