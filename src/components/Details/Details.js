import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
 
    backBtn = () => {
        this.props.history.push('/')
    }

    //pass props with object to path /edit
    editBtn = (event) => {
        console.log('in editBtn');
        this.props.history.push({
            pathname: '/edit',
            state: {
                id: event.id,
                title: event.title,
                poster: event.poster,
                description: event.description,
                genre: event.genre
            }
        });
    };

    // Renders the entire app on the DOM
    render() {
        console.log('in details', this.props.location.state)
        return (
            <div className="App">
                <p>Movie Details</p>
                <h1>{this.props.location.state.title}</h1>
                <p>{this.props.location.state.description}</p>
                <p><b>{this.props.location.state.genre}</b></p>
                <button onClick={this.backBtn}>Back</button>
                <button onClick={() => this.editBtn(this.props.location.state)}>Edit</button>
            </div>
        );
    }
}


// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);