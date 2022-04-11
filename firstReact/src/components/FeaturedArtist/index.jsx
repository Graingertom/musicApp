import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Albums } from '../../pages';

export const FeaturedArtist = ({ artist, token }) => {

    const [chosenAlbum, setChosenAlbum] = useState();

    const chosenArtist = artist

    const handleAlbumSelect = albumId => {
        const chosenAlbum = chosenArtist.album.find(alb => alb.id === albumId);
        setChosenAlbum(chosenAlbum);
    }

    return (
        <>
            <article aria-label="featured artist" id="feature">
                <h2>{artist.name}</h2>
                <img className="profile" src={artist.images[1].url}></img>
                <h3>{artist.genres[0]}</h3>
                <p>
                    {artist.introduction}
                </p>
            </article>
        </>
    )
}
