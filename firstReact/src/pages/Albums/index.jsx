import React, { useState } from "react";
import { ArtistNames, SlideShow, FeaturedAlbum } from "../../components";
import { useParams } from "react-router-dom";
import { ArtistData } from "../../Data/data";

export function Albums() {
  const artists = ArtistData
  const urlArtist = useParams();
  const chosenArtist = artists.find(art => art.artist === urlArtist.artistId);
  console.log(chosenArtist)
  
    const chosenAlbum = chosenArtist.album.find(alb => alb.title === urlArtist.albumId);
    console.log(chosenAlbum);
    
    return (
        <div className="album-show">

            <section>
                <FeaturedAlbum album={chosenAlbum} />
            </section>

        </div>
    )
}
