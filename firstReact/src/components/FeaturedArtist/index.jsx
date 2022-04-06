import React from 'react';

export const FeaturedArtist = ({ artist }) => {
    return ( 
        <>
        <article aria-label="featured artist" id="feature">
            <div>
                <img src={ artist.img }></img>
            </div>
            <div>
            <h2>{ artist.artist }</h2>
            <h3>{ artist.musicType }</h3>
            <p>
                { artist.introduction }
            </p>
            <ul>
                <li>{ artist.album[0] }</li>
                <li>{ artist.album[1] }</li>
            </ul>
            </div>
        </article>
        </>
    )
}
