
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Single.css';
import { Component } from 'react';
import ReactStars from 'react-stars';

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: null,
      index: 0,
      term: "food", // can be entertainment or food
      loc: "vancouver, bc",
      limit: 10,
      loaded: false,
    }
  }

  componentDidMount() {
    {this.getData()}
  }

  getData = () => {

    var url = new URL("http://nwhacks2019-nwhacks2019.7e14.starter-us-west-2.openshiftapps.com/businesses/"),
    params = { term: this.state.term, limit: this.state.limit, loc: this.state.loc }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    const promise = fetch(url , {
      method: 'POST'
    });

    promise.then(results => {
      results.json().then(value => {
        this.setState({allItems: value,
        loaded: true});
        console.log(this.state.loaded);
        console.log("this finishes after");
        console.log(this.state.allItems);
      })
    })
  }

  onClick = () => {
    console.log(this.state.index);
    this.setState({index: this.state.index == this.state.limit - 1 ? this.state.index : this.state.index + 1});
  }

  render () {    
    if (this.state.loaded){
      const telephone = "tel:" + this.state.allItems[this.state.index].phone;
      console.log("this will be done first");
      return (
      <div className = "container">
        <Card className = "card" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
          <CardImg top width="100%" src={this.state.allItems[this.state.index].image_url} alt="Card image cap" />
          <CardBody>
            <CardTitle className = "title"><b> <font size="6">{this.state.allItems[this.state.index].name}</font></b></CardTitle>
            <ReactStars className = "stars" value = {this.state.allItems[this.state.index].rating} edit = {false}/>
            <CardSubtitle className = "subtitle">{this.state.allItems[this.state.index].location.address1}</CardSubtitle>
            <p><b>{this.state.allItems[this.state.index].price}</b></p>
            <Button className = "call"><a href = {telephone}>Call</a></Button>
          </CardBody>
        </Card>
        <Button className = "button2"><img src="data:image/png;base64,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" height="30" width="30"/></Button>
        <Button className = "button3" onClick = {this.onClick}><img src="data:image/png;base64,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" height="30" width="30"/></Button>
      </div>);
    } else {
      console.log("not loaded");
      return <p>LOADING</p>
    }
  }
}

export default Single;
