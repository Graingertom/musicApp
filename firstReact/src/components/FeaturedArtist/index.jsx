import React from 'react';
import { SlideShow } from '../Slideshow';

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
            <SlideShow artist={artist}/>
            </div>
        </article>
        </>
    )
}
