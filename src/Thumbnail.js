import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';
import './App.css';
class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }
    componentDidMount(){
        axios.get(/*'http://res.cloudinary.com/christekh/image/list/xmas.json'*/)
            .then(res => {
                console.log(res.data.resources);
                this.setState({gallery: res.data.resources});
            });
    }
  render() {
   
    return (
        <div className="flex-container">
             {
                            this.state.gallery.map(data => {
                                return (
                                    <Card key={data.public_id}>
                                        <CardImg top width="100%" src={`http://res.cloudinary.com/christekh/image/upload/${data.public_id}.jpg`} alt="Card image cap" />
                                        <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Spanis</CardText>
                                        <Button>SELECT TITLE</Button>
                                        </CardBody>
                                    </Card>
                                )
                            })
                        }
      </div>
    );
  }
}

export default Thumbnail;