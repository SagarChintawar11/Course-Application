import React, {useEffect } from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
  
  useEffect(() => {
    document.title="Home"
 },[])

  
    return (
        <div>
            
        <Jumbotron className="text-center">
        <h1>Programming World @ LearnCode</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>

      {/* <Container>
          <Button color="primary">Start Using.. ></Button>
      </Container> */}
            
        </div>
    )
}

export default Home;
