import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
 
    backBtn = (event) => {
        
        event.preventDefault();
        this.props.history.push('/')
    }

    editBtn = (event) => {
        console.log('in editBtn');
        
    }

    // Renders the entire app on the DOM
    render() {
        console.log('in details', this.props.location.state)
        return (
            <div className="App">
                <p>Movie Details</p>
                <h1>{this.props.location.state.title}</h1>
                <img src={this.props.location.state.poster}></img>
                <p>{this.props.location.state.description}</p>
                <button onClick={this.backBtn}>Back</button>
                <button onClick={this.editBtn}>Edit</button>
            </div>
        );
    }
}



// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);