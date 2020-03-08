import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    // Renders the entire app on the DOM

    state = {
        update: {
            description: '',
            sendId: '',
            genre: '',
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

    handleDescriptionChange = (event, description) => {
        console.log('event happended in handleDescriptionChange', event.target.value)
        this.setState({
            update: {
                 description: event.target.value,
                 sendId: this.props.location.state.id,
            }
        });
    }
    // handleGenreChange = (event, genre) => {
    //     console.log('event happended in handleGenreChange', event.target.value)
    //     this.setState({
    //         update: {
    //             genre: event.target.value,
    //             sendId: this.props.location.state.id,
    //         }
    //     });
    // }

    saveChange = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'INPUT_UPDATE', payload: this.state.update})
        this.setState({
            update: {
                description: '',
                genre: ''
            } 
        });
        this.props.history.push('/')
    }
    
    render() {
        //console.log('in edit', this.props.location.state)
        return (
            <div className="App">
                <p>Movie Details</p>
                <h1>{this.props.location.state.title}</h1>
                <p>{this.props.location.state.description}</p>
                <form>
                    <textarea placeholder="Change Description" value={this.state.update.description}
                        onChange={(event) => this.handleDescriptionChange(event, 'description')}>

                    </textarea>
                </form>
              
                {/* <input type='text' placeholder="Change Genre" name="genre" value={this.state.update.genre}
                    onChange={(event) => this.handleGenreChange(event, 'genre')}></input> */}
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