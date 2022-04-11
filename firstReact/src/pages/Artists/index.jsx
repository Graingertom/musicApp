import React, { useState, useEffect } from "react";
import { ArtistNames, FeaturedArtist, SlideShow } from "../../components";
import axios from 'axios';
import './style.css';

export function Artists({ token }) {

    const [result, setResult ] = useState();

    const initialFormData = Object.freeze({
        artist: ""
      });
    
      
      const [formData, updateFormData] = useState(initialFormData);
      
      const handleChange = (e) => {
          updateFormData({
              ...formData,
              [e.target.name]: e.target.value.trim()
            });
        };
        
            const [artists, setArtists] = useState();

        
        const handleSubmit = async(e) => {
            e.preventDefault()
            const result = formData.artist
            setResult(result)
            const access_token = await token();
            try {
                let { data } = await axios.get(`https://api.spotify.com/v1/search?q=${result}&type=artist`, {
                    headers: {
                        "Authorization" : `Bearer ${access_token}`,
                        "Accept": "application/json",
                "Content-Type": "application/json",
                    }
                });
                console.log(data)
                setArtists(data)
            } catch (err) {
                console.warn(err);
            }            
        };

    console.log(artists)

    const [chosenArtist, setChosenArtist] = useState();

    const handleArtistSelect = artistId => {
        const chosenArtist = artists.artists.items.find(art => art.id === artistId);
        setChosenArtist(chosenArtist);
    };
    return (
        <div className="artist-show">

            <section>
                <h1>All the musicians</h1>

                <form>
                    <label htmlFor="artist">Search for an artist:</label>
                    <input type='text' id='artist' name='artist' onChange={handleChange}></input>
                    <input type='submit' onClick={handleSubmit}></input>

                </form>

                {artists && <ArtistNames handleArtistSelect={handleArtistSelect} artists={artists} />}

                {chosenArtist && <FeaturedArtist artist={chosenArtist}/>}

                {chosenArtist && <SlideShow artist={chosenArtist} token={token} />}

            </section>

        </div>
    );
};
