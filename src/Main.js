import React from "react";
import HornedBeast from "./horned-beast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component{
  render(){

    let beasts = this.props.data.map((beastie, idx) => {
      return(<HornedBeast
        title={beastie.title}
        image_url={beastie.image_url}
        description={beastie.description}
        keyword={idx}
        handleShowModal={this.props.handleShowModal}
        />)
      });
     
    return(
      <main>
        <Row>
          {beasts}
          </Row>
    </main>
    );

  }
};

export default Main;
