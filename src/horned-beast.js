import React from "react";
import "./HornedBeast.css";
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state={
      likes:0
    }
  }
handleLikes=() => {
  //increases the number of likes in the value in state
  this.setState({
    likes:this.state.likes+1
  })
  this.props.handleShowModal(this.props.description, this.props.image_url,)
}

  render() {
    return (
      <>
      <Card className="horned-beast">
          <Card.Img 
          onClick={this.handleLikes}
          title={this.props.title}
          src={this.props.image_url} 
          alt={this.props.description}
          />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>♥️{this.state.likes} likes</Card.Text>
          <Card.Text>{this.props.alt}</Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>This Beast has {this.props.horns} horns!</Card.Text>
        </Card.Body>
        {/* <Button>bootsrap button</Button> */}
      </Card>
      </>
    );
  }
};

export default HornedBeast;
