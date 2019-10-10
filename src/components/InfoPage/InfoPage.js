import React, {Component} from 'react';
import axios from 'axios'; 
 
class InfoPage extends Component {

state = {
  shelf: []
}

componentDidMount() {
  this.getShelf();
}

getShelf = () => {
  axios.get('/api/shelf').then(response => {
    console.log('GET request', response.data);
    this.setState({
      shelf: response.data
    })
  }).catch(error => {
    console.log('Error with GET request client', error);
  })
}


  render() {
    return(
      <AddItem />
      <p>{JSON.stringify(this.state.shelf)}</p>
    )
  }
}

 

export default InfoPage;
