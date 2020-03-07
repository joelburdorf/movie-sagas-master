import React, { Component } from 'react';

class Edit extends Component {
    // Renders the entire app on the DOM

    cancelBtn = () => {
        this.props.history.push({
            pathname: '/details',
            state: {
                id: this.props.location.state.id,
                title: this.props.location.state.title,
                poster: this.props.location.state.poster,
                description: this.props.location.state.description
            }
        })
    }

    handleChange = ()=>{

    }
    
    render() {
        console.log('in edit', this.props.location.state)
        return (
            <div className="App">
                <p>Movie Details</p>
                <h1>{this.props.location.state.title}</h1>
                <p>{this.props.location.state.description}</p>
                <input onChange={(event) => this.handleChange( event)}></input>
                <button onClick={this.cancelBtn}>Cancel</button>
                <button>Save</button>
            </div>
        );
    }
}

export default Edit;