import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ArtistNames = ({ handleArtistSelect, artists }) => {
    const goTo = useNavigate();
    console.log(artists)

    return (
        <ul>
            {
                artists.map(art => (
                    <li key={art.id} onClick={() =>{
                    goTo(`${art.artist}`)
                    handleArtistSelect(art.id)}}>
                        <strong 
                        role="heading"
                        aria-label="artistName">{art.artist}
                        </strong> {art.musicType}
                    </li>
                ))
            }
        </ul>
    )
}
