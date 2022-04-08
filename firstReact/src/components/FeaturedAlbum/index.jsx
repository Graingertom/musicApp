import React from 'react';

export const FeaturedAlbum = ({ album }) => {

    return ( 
        <>
        <article aria-label="featured album" id="featureAlbum">
            <h2>{ album.title }</h2>
                <img className="profile" src={ album.cover }></img>
        </article>
        </>
    )
}
