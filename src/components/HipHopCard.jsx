import React from 'react';

const HipHopCard = props => {

    const { title, artist, url, image, thumbnail_image } = props.album;

    return (
        <div className="col-md-6">
            <div className="card border border-dark rounded p-1 m-1">
                <img class="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{artist}</p>
                    <div className="d-flex justify-content-around align-items-center">
                        <a href={url} className="btn btn-primary">Buy it on Amazon</a>
                        <img src={thumbnail_image} alt="artist thumbnail" className="img-thumbnail w-25 h-25" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HipHopCard;