import React from 'react';
import HipHopCard from './HipHopCard';

class HipHop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }

    componentDidMount() {
        fetch('https://student-fun-api.herokuapp.com/api/hiphop')
            .then(response => response.json())
            .then(albums => this.setState({ albums }))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <>
                {this.state.albums.map(album => {
                    return <HipHopCard key={album.id} album={album} />
                })}
            </>
        );
    }
}

export default HipHop;