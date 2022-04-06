import React from "react";
import { ArtistsButton } from '../../components'
import './style.css';

export function Home() {
    return(
        <div className="artist-show">
            <h1>All the musicians</h1>

            <p>Welcome to our app, feel free to click the button below and search through our list of artists to see their discographies and lyrics to their songs!</p>
            <ArtistsButton />
        </div>
    );
};
