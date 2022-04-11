import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const FeaturedAlbum = ({ album, albumCovers, trackList }) => {

    const artist = useParams().artistId;
    const [chosenTrack, setChosenTrack] = useState();
    const [ trackName, setTrackName ] = useState();

    const trackNameSelect = (trackName) => {
        setTrackName(trackName)}

    useEffect(() => {
        try {
            const chosenTrack = trackList.find(track => track.name === trackName);
            setChosenTrack(chosenTrack.name)    
        } catch (err) {
            console.log(err)
        }
},
[trackName])



    const getLyrics = async () => {
        try {
            let { data } = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${chosenTrack}`)
            console.log(data)
        } catch (err) {
            console.warn(err);
        }
    }
    

    return (
        <>
            <article aria-label="featured album" id="featureAlbum">
                <h2>{album.name}</h2>
                <img className="profile" src={albumCovers}></img>
                <ul>
                    {
                        trackList.map(track => (
                            <li key={track.id} onClick={() => {
                                trackNameSelect(track.name); getLyrics()
                            }}>
                                <strong
                                    role="heading"
                                    aria-label="artistName">{track.name}
                                </strong>
                            </li>
                        ))
                    }
                </ul>
            </article>
        </>
    )
}
