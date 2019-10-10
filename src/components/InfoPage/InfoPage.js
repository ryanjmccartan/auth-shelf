import React, {Component} from 'react';
import axios from 'axios';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

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

deleteItem = (id) => {
  axios.delete('api/shelf' + id).then(response => {
    console.log('DELETE request', response.data);
  }).catch(error => {
    console.log('Error with DELETE request', error);
  })
}


  render() {
    return(
      <ul>{this.state.shelf.map(item => {
        return <li>{item.description}
                  <button onClick={this.deleteItem(item.id)}>Delete</button>
                  <br/>
                  <img src={item.image_url}/> 
               </li>
      })}
      </ul>
    )
  }
}


export default InfoPage;
