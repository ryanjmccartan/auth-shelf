import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddItem extends Component {

    state = {
        item: {
            description: '',
            image_url: ''
        }
    }

    // record changes to inputs
    handleChange = (event, propertyName) => {
        console.log(event.target.value);
        this.setState({
            item: {
                ...this.state.item,
                [propertyName]: event.target.value
            }
        })
    }

    // Button to Add Item
    handleAdd = () => {
        console.log('in AddButton');
        // this.props.dispatch({
        //     type: 'POST_ITEM', payload: this.state.item
        // })
        axios({
            method: 'POST',
            url: '/api/shelf',
            data: this.state.item
          }).then((response) => {
            console.log('in handleAdd', response.data);
            this.props.getShelf();
            }).catch((error) => {
            console.log('error', error);
          })

    }
    render () {
        return (
            <div>
                <p>Hello from AddItem</p>
                <input onChange={(event) => {this.handleChange(event, 'description')}} placeholder="item"></input>
                <input onChange={(event) => {this.handleChange(event, 'image_url')}} placeholder="image URL"></input>
                <button onClick={this.handleAdd}>Add Item</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.description,
  });

export default connect(mapStateToProps) (AddItem);