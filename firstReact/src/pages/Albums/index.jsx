import React, { useState, useEffect } from "react";
import { ArtistNames, SlideShow, FeaturedAlbum } from "../../components";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Albums({ token }) {
    const [chosenAlbum, setChosenAlbum] = useState([]);
    const [coverImage, setCoverImage ] = useState([])
    const albumId = useParams().albumId;
    console.log(albumId)

    useEffect(() => {
    const artistAlbums = async () => {
    const access_token = await token();
        try {
            let { data } = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
                headers: {
                    "Authorization": `Bearer ${access_token}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });
            setChosenAlbum(data)
            setCoverImage(data.images[0].url)
        } catch (err) {
            console.warn(err);
        }
    }
    artistAlbums()
}, [])

    let albumCovers = coverImage
    
    return (
        <div className="album-show">

            <section>
                <FeaturedAlbum album={chosenAlbum} albumCovers={albumCovers} />
            </section>

        </div>
    )
}
