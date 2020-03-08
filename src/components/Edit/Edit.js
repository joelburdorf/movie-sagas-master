import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    // Renders the entire app on the DOM

    state = {
        update: {
            description: this.props.location.state.description,
            sendId: '',
            title: this.props.location.state.title,
        }
    }

    cancelBtn = () => {
        this.props.history.push({
            pathname: '/details',
            state: {
                id: this.props.location.state.id,
                title: this.props.location.state.title,
                poster: this.props.location.state.poster,
                description: this.props.location.state.description,
                genre: this.props.location.state.genre
            }
        })
    }

    handleDescriptionChange = (description, event) => {
        console.log('event happended in handleDescriptionChange', event.target.value)
        this.setState({
            update: {
                 description: event.target.value,
                 sendId: this.props.location.state.id,
                 title: this.props.location.state.title,
            }
        });
    }
    handleTitleChange = (title, event) => {
        console.log('event happended in handleTitleChange', event.target.value)
        this.setState({
            update: {
                description: this.props.location.state.description,
                sendId: this.props.location.state.id,
                title: event.target.value, 
            }
        });
    }



    saveChange = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'INPUT_UPDATE', payload: this.state.update})
        this.setState({
            update: {
                description: '',
                title: ''
            } 
        });
        this.props.history.push('/')
    }
    
    //Display the title, description, and allow user to change both
    render() {
        // console.log('in edit', this.props.location.state)
        return (
            <div className="App">
                <p>Movie Details</p>
                <h1>{this.props.location.state.title}</h1>
                <p>{this.props.location.state.description}</p>
                <form>
                    <textarea rows="5" cols="50" placeholder="Change Description" value={this.state.update.description || ""}
                        onChange={(event) => this.handleDescriptionChange('description', event)}>
                    </textarea>
                </form>
                <input placeholder="Change Title" value={this.state.update.title || ""}
                    onChange={(event) => this.handleTitleChange('title', event)}></input>
                <button onClick={this.cancelBtn}>Cancel</button>
                <button onClick={this.saveChange}>Save</button>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Edit);