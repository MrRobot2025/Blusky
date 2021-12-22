import {Container} from "react-bootstrap";
import Site from "../Site/site";

const Sites = [
    {
      name:"Sudama Nagar",
      des:"lorem lopez tyuio fsafjk ka fjui aife a fhajfej"
    },
    {
      name:"Sudama Nagar",
      des:"lorem lopez tyuio fsafjk ka fjui aife a fhajfej"
    },
    {
      name:"Sudama Nagar",
      des:"lorem lopez tyuio fsafjk ka fjui aife a fhajfej"
    }
  ]

const Middle = () => {
  return (
    <>
      
      <Container id="Site">
        <h3 className="blue" style={{marginTop:"50px", marginBottom:"50px"}}>Our sites</h3>
        {
          Sites.map(
            (site,i)=>
              <Site name={site.name} des={site.des} />
            
          )
        }
      </Container>
      
    </>
  );
}

export default Middle;