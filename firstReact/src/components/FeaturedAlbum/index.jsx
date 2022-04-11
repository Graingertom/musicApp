import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const FeaturedAlbum = ({ album, albumCovers, trackList }) => {

    const goTo = useNavigate();
    const artist = useParams().artistId;
    const song = useParams().songId;
    const [ lyrics, setLyrics ] = useState();
    const [chosenTrack, setChosenTrack] = useState();

    const handleTrackSelect = trackName => {
        try {
            const chosenTrack = trackList.find(track => track.name === trackName);
            setChosenTrack(chosenTrack.name)   
        } catch (err) {
            console.log(err)
        }
    }



    const getLyrics = async () => {
        console.log(song)
        try {
            let { data } = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
            setLyrics(data.lyrics)
            console.log(lyrics)
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        getLyrics();
    }, [song])
    

    return (
        <>
            <article aria-label="featured album" id="featureAlbum">
                <h2>{album.name}</h2>
                <img className="profile" src={albumCovers}></img>
                <ul>
                    {
                        trackList.map(track => (
                            <li key={track.id} onClick={() => {
                                handleTrackSelect(track.name); goTo(`./${track.name}`);
                            }}>
                                <strong
                                    role="heading"
                                    aria-label="artistName">{track.name}
                                </strong>
                            </li>
                        ))
                    }
                </ul>
                <aside>
                    <p>{lyrics}</p>
                </aside>
            </article>
        </>
    )
}
