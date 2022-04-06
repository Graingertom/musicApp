import React, { useState } from 'react';

export const ArtistNames = ({ handleArtistSelect }) => {
    const [artists, setArtists] = useState([
        {id: 101, artist: "Bon Iver", musicType: "Folk", introduction: "Bon Iver is the name singer/songwriter  chose for his solo project when he retreated to a cabin in Wisconsin during 2006.", album: ["For Emma", "Album 2"]},
        {id: 102, artist: "Frank Ocean", musicType: "R&B", introduction: "Visionary American recording artist Frank Ocean is one of the most celebrated and critically acclaimed artists of this era.", album: ["Channel Orange", "Album 2"]}
        ])
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
