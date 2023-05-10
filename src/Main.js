import React from "react";
import HornedBeast from "./horned-beast";
import data from "./data.json";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component{
  render(){

    let beasts = [];
    data.forEach((beastie, idx) => {
      beasts.push(
      <Col md={4} key={idx}>
      <HornedBeast
        title={beastie.title}
        image_url={beastie.image_url}
        description={beastie.description}
        keyword={idx}
        />
        </Col>
        );
      });
     
    return(
      <main>
        <Row>{beasts}</Row>
    </main>
    );

  }
};

export default Main;
