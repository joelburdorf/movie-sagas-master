import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeList extends Component {
    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <p>This is HomeList</p>
                <ul>
                    {this.props.reduxState.movies.map(flick => (<li key={flick.id}>{flick.title}
                        <img src={flick.poster}></img>
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
