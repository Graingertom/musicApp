import React from 'react';

export const FeaturedArtist = ({ artist }) => {

    return ( 
        <>
        <article aria-label="featured artist" id="feature">
            <h2>{ artist.artist }</h2>
                <img className="profile" src={ artist.img }></img>
            <h3>{ artist.musicType }</h3>
            <p>
                { artist.introduction }
            </p>
        </article>
        </>
    )
}
