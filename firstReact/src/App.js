import React from "react";
import { Layout } from './layout';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages'
import './App.css'
import { ArtistNames, FeaturedArtist } from "./components";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Pages.Home />} />
                <Route path="artists" element={<Pages.Artists />} >
                    <Route index element={<ArtistNames />} />
                    <Route path=":artistId" element={<FeaturedArtist />} />
                </Route>
            </Route>
        </Routes>      
    )
};

export default App;
