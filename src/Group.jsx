import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Group.css';
import ReactStars from 'react-stars';



class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: null,
      name: "TestName",
      imageURL: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
      rating: 5,
      address: "Harman's House",
      price: "$$$$",
      phone: "604-123-4567",
      index: 0,
      term: "entertainment", // can be entertainment or food
      loc: "vancouver, bc",
      limit: 10,
    }
  }

  componentDidMount() {
    console.log("this comes first");
    {this.getData()}
  }

  getData = () => {

    var url = new URL("http://localhost:3000/businesses/"),
    params = { term: this.state.term, limit: this.state.limit, loc: this.state.loc }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    fetch(url , {
      method: 'POST'
    })
    .then(results => {
      this.setState({allItems: results});
      console.log(this.state.allItems);
    })

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
            <p className = "price"><b>{this.state.price}</b></p>
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
