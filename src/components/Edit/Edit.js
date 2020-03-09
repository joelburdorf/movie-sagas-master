import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    // set state to values passed down from props
    state = {
        update: {
            description: this.props.location.state.description,
            sendId: this.props.location.state.id,
            title: this.props.location.state.title,
        }
    }
//move back to /details need to pass props
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

    //function to change the title and description
    handleChange = (event, propertyName) => {
        console.log('event happended in handleChange', event.target.value)
        this.setState({
            update: { ...this.state.update,
                [propertyName]: event.target.value, 
            }
        });
    }
    //dispatch changes to Sagas to update description and title
    //then move to HomeList component
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
                        onChange={(event) => this.handleChange(event, 'description')}>
                    </textarea>
                </form>
                <input placeholder="Change Title" value={this.state.update.title || ""}
                    onChange={(event) => this.handleChange(event, 'title')}></input>
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