import React from "react";
import data from "./data.json";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast";
import "./App.css";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      modalimage: '',
      formodal: ''
    };
  }

  adddescription = () => {
    this.setState({
      description: this.state.description + ''
    });
  }

  addimg_url = () => {
    this.setState({
      img_url: this.state.img_url + ''
    });
  }

  handleShowModal = (description, img_url) => {
    this.setState({
      isModalDisplaying: true,
      formodal: description,
      modalimage: img_url
    });
  }

  handleCloseModal = () => {
    this.setState({
      isModalDisplaying: false
    });
  }

  render() {
    console.log(this.state)
    return (
    <>
    <Header/>
    <Main
    handleShowModal={this.handleShowModal}
    data={data}
    SelectedBeast={SelectedBeast}
    />
    
    <SelectedBeast
    show={this.state.isModalDisplaying}
    selectedBeast={this.state.selectedBeast}
    handleCloseModal={this.handleCloseModal}
    modalimage={this.state.modalimage}
    formodal={this.state.formodal}

    />
    <Footer/>
    
    </>
    );
  }
};

export default App;
