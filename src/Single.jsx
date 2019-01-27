
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Single.css';
import { Component } from 'react';

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      imageURL:null,
      rating : null,
      address: null,
      number: null,
      websiteURL: null,
      allItems: [],
      term: "entertainment", // can be entertainment or food
      loc: "vancouver, bc",
      limit: 10
    }
  }

  componentDidMount() {
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

  render () {
  return (
    <div class = "container">
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Restaurant Name</CardTitle>
          <CardSubtitle>Rating</CardSubtitle>
          <CardText>Address</CardText>
          <p><Button>Call</Button>
          <Button className = "button1">Website</Button></p>


        </CardBody>
      </Card>
      <p><Button className = "button2">Thumbs Up</Button>
          <Button className = "button3">Thumbs Down</Button></p>
    </div>

  );
};
}

export default Single;
