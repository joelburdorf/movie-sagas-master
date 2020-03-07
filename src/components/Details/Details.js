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
        return (
            <div className="App">
                <p>Movie Details</p>
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