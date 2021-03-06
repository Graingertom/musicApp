import React from "react";
import axios from "axios";
import {Buffer} from 'buffer';
import { Layout } from './layout';
import { Routes, Route } from 'react-router-dom';
import qs from 'qs';
import * as Pages from './pages'
import './App.css'
import { ArtistNames, FeaturedArtist, FeaturedAlbum } from "./components";

const App = () => {
    const client_id = process.env.SPOTIFY_API_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

    const getAuth = async () => {
        try{
            const token_url = 'https://accounts.spotify.com/api/token';
            const data = qs.stringify({'grant_type':'client_credentials'});
        
            const response = await axios.post(token_url, data, {
              headers: { 
                'Authorization': `Basic ${auth_token}`,
                'Content-Type': 'application/x-www-form-urlencoded' 
              }
            })
            return response.data.access_token;  
          }catch(error){
            console.log(error);
          }
        }

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Pages.Home />} />
                <Route path="artists" element={<Pages.Artists token={getAuth}/>} >
                    <Route index element={<ArtistNames />} />
                    <Route path=":artistId" element={<FeaturedArtist />} />
                </Route>
                <Route path="albums/:artistId/:albumId" element={<Pages.Albums token={getAuth} />} >
                    <Route index element={<FeaturedAlbum />} />
                    <Route path=":songId" element={<FeaturedAlbum />} />
                </Route>
            </Route>
        </Routes>
    )
};

export default App;
