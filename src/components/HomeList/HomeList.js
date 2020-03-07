import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeList extends Component {

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    imageClick = (event, flick) => {
        event.preventDefault();
        //console.log('in imageClick');
        this.props.history.push({
            pathname: '/details',
            state: {
                id: flick.id,
                title: flick.title,
                poster: flick.poster,
                description: flick.description
            }
        });
    };

    // onChange = {(event) => this.handleChange('understanding', event)} 

    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <p>Movie Selections</p>
                <ul>
                    {this.props.reduxState.movies.map(flick => (<li key={flick.id}><h1>{flick.title}</h1> <br /> <br />
                        <img src={flick.poster} alt={flick.title} onClick={(event) => this.imageClick(event, flick)}></img>
                        <br /> <br />{flick.description}<br /> <br /><br /> <br />
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
