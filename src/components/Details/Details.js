import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    //button to go back to HomeList component
    backBtn = () => {
        this.props.history.push('/')
    }

    //editBtn to move to Edit component and pass props with object 
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

    //access props to display title/description/genre to the DOM
    //add button to go back to HomeList component
    //add button to move to Edit component
    render() {
        console.log('in details', this.props.location.state)
        return (
            <div className="App">
                <p>Movie Details</p>
                <h1>{this.props.location.state.title}</h1>
                <p>{this.props.location.state.description}</p>
                <p><b><label>Genre:</label></b><br />{this.props.location.state.genre}</p>
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