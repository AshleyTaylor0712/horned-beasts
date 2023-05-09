import React from "react";
import "./HornedBeast.css;"

class HornedBeast extends React.Component {
  render(){
    return(
      <article className="horned-beast">
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.description}/>
        <p>{this.props.description}</p>
      </article>
    );
  }
};

export default HornedBeast;
