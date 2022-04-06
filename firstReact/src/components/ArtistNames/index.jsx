import React, { useState } from 'react';

export const ArtistNames = ({ handleArtistSelect, artists }) => {
    return (
        <ul>
            {
                artists.map(art => (
                    <li key={art.id} onClick={() =>
                    handleArtistSelect(art.id)}>
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
