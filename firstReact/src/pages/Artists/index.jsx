import React, { useState } from "react";
import { ArtistNames, FeaturedArtist, SlideShow } from "../../components";
import { ArtistData } from "../../Data/data";
import './style.css';

export function Artists() {
    const artists = ArtistData

        const [ chosenArtist, setChosenArtist ] = useState();
    
        const handleArtistSelect =  artistId => {
            const chosenArtist = artists.find(art => art.id === artistId);
            setChosenArtist(chosenArtist);
        };
    return(
        <div className="artist-show">

            <section>
            <h1>All the musicians</h1>
                <ArtistNames handleArtistSelect={handleArtistSelect} artists={artists}/>

                { chosenArtist && <FeaturedArtist artist={chosenArtist}/> }

                { chosenArtist && <SlideShow artist={chosenArtist}/> }

            </section>

        </div>
    );
};
