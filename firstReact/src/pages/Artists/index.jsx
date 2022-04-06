import React, { useState } from "react";
import { ArtistNames, FeaturedArtist } from "../../components";
import './style.css';

export function Artists() {
    const [artists, setArtists] = useState([
        {id: 101, artist: "Bon Iver", musicType: "Folk", introduction: "Bon Iver is the name singer/songwriter  chose for his solo project when he retreated to a cabin in Wisconsin during 2006.", album: ["For Emma", "Album 2"], img: 'https://drive.google.com/uc?export=view&id=1Q3loxL21zBhAqynHXrTVOSocn3S-yP2b'},
        {id: 102, artist: "Frank Ocean", musicType: "R&B", introduction: "Visionary American recording artist Frank Ocean is one of the most celebrated and critically acclaimed artists of this era.", album: ["Channel Orange", "Album 2"], img: 'https://drive.google.com/uc?export=view&id=1qkVpXfFJWehwpa9whZJvdCDbSnXAbAg1'}
        ])

        const [ chosenArtist, setChosenArtist ] = useState();
    
        const handleArtistSelect =  artistId => {
            const chosenArtist = artists.find(art => art.id === artistId);
            setChosenArtist(chosenArtist);
        };
    return(
        <div className="artist-show">

            <section>
            <h1>All the musicians</h1>
                <ArtistNames handleArtistSelect={handleArtistSelect} />

                { chosenArtist && <FeaturedArtist artist={chosenArtist}/> }

            </section>

        </div>
    );
};
