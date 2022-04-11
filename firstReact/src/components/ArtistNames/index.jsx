import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ArtistNames = ({ handleArtistSelect, artists }) => {
    const goTo = useNavigate();

    return (
        <ul>
            {
                artists.artists.items.map(art => (
                    <li key={art.id} onClick={() =>{
                    goTo(`${art.name}`)
                    handleArtistSelect(art.id)}}>
                        <strong 
                        role="heading"
                        aria-label="artistName">{art.name}
                        </strong> {art.genres}
                    </li>
                ))
            }
        </ul>
    )
}
