import React from "react";
import { ArtistsButton } from '../../components'
import './style.css';

export function Home() {
    return (
        <>
            <div className="artist-show">
                <div id="imgDisplay">
                <img src='https://images.unsplash.com/photo-1518296911585-f13a34dee26e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
                </div>

                <div id="txtDisplay">

                <h1>All the musicians</h1>


                <p>Welcome to our app, feel free to click the button below and search through our list of artists to see their discographies and lyrics to their songs!</p>
                <ArtistsButton />
                    
                </div>

            </div>
        </>
    );
};
