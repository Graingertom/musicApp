import React from 'react';

export const FeaturedAlbum = ({ album, albumCovers }) => {

    console.log(album)
    console.log(albumCovers)

    return ( 
        <>
        <article aria-label="featured album" id="featureAlbum">
            <h2>{ album.name }</h2>
                <img className="profile" src={ albumCovers }></img>
        </article>
        </>
    )
}
