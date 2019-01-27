import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Group.css';
import ReactStars from 'react-stars';



class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "TestName",
      imageURL: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
      rating: 5,
      address: "Harman's House",
      price: "$$$$",
      phone: "604-123-4567",
    }
  }

  render() {
    const telephone = "tel:" + this.state.phone;
    return (
      <div class = "container">
        <Card className = "card"body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardImg top width="100%" src={this.state.imageURL} alt="Card image cap" />
          <CardBody>
            <CardTitle><b><font size="6">{this.state.name}</font></b></CardTitle>
            <ReactStars className = "stars" value = {this.state.rating} edit = {false}/>
            <CardSubtitle className = "subtitle">{this.state.address}</CardSubtitle>
            <p>{this.state.price}</p>
            <Button className = "phone"><a href = {telephone}>Call</a></Button>
          </CardBody>
        </Card>
        <Button className = "skip">SKIP</Button>
        <Button className = "go">LET'S GO</Button>
      </div>
    );
  }
}

export default Group;
