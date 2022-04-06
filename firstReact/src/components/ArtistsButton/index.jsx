import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ArtistsButton = () => {
    const goTo = useNavigate();

    return <button id="ArtistsButton" onClick={() => goTo("artists")}>Artists</button>
}
