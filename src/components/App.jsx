import React from 'react';
import HipHop from './HipHop';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Luke's Dope React Project</h1>
                            <p className="lead">His Top 5 Hip Hop Albums</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <HipHop />
            </div>
        </div>
    );
};

export default App;