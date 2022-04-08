import React, { useState } from "react";
import { ArtistNames, SlideShow, FeaturedAlbum } from "../../components";
import { ArtistData } from "../../Data/data";

export function Albums() {
    const artists = ArtistData

    const [chosenArtist, setChosenArtist] = useState();
    
    const handleArtistSelect = artistId => {
        const chosenArtist = artists.find(art => art.id === artistId);
        setChosenArtist(chosenArtist);
    };

    const [chosenAlbum, setChosenAlbum] = useState();

    const handleAlbumSelect = albumId => {
        const chosenAlbum = chosenArtist.album.find(alb => alb.id === albumId);
        setChosenAlbum(chosenAlbum);

    }
    return (
        <div className="album-show">

            <section>
                <ArtistNames handleArtistSelect={handleArtistSelect} artists={artists} />

                {chosenArtist && <SlideShow handleAlbumSelect={handleAlbumSelect} artist={chosenArtist} />}

                {chosenAlbum && <FeaturedAlbum album={chosenAlbum} />}
            </section>

        </div>
    )
}
