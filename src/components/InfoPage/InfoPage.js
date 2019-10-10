import React, {Component} from 'react';
import axios from 'axios'; 
import AddItem from '../AddItem/AddItem';
 
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
      <div>
      <AddItem />
      <ul>{this.state.shelf.map(item => {
        return <li>{item.description}
                  <button onClick={this.deleteItem(item.id)}>Delete</button>
                  <br/>
                  <img src={item.image_url}/> 
               </li>
      })}
      </ul>
      </div>
    )
  }
}

 

export default InfoPage;
