import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeList extends Component {
    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    imageClick = (event) => {
        //console.log('in imageClick');
        event.preventDefault();
        this.props.history.push('/details')
    }

    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <p>Movie Selections</p>
                <ul>
                    {this.props.reduxState.movies.map(flick => (<li key={flick.id}>{flick.title}
                        <img src={flick.poster} alt={flick.title} onClick={this.imageClick}></img>
                        </li>))}

                </ul>
            </div>
        );
    }
}



// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(HomeList);
