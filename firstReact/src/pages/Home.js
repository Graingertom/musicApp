import React, { useState } from "react";

function App() {
    const [artists, setArtists] = useState([
    {id: 001, artist: "Bon Iver", musicType: "Folk", introduction: "Bon Iver is the name singer/songwriter  chose for his solo project when he retreated to a cabin in Wisconsin during 2006. He emerged from the isolation with an album -- For Emma, Forever Ago -- that became an indie folk touchstone."},
    {id: 001, artist: "Frank Ocean", musicType: "R&B", introduction: "Visionary American recording artist Frank Ocean is one of the most celebrated and critically acclaimed artists of this era."}
    ])

    const [ chosenArtist, setChosenArtist ] = useState();

    const handleArtistSelect =  artistId => {
        const chosenArtist = artists.find(art => art.id === artistId);
        setChosenArtist(chosenArtist);
    };

    return(
        <div className="artist-show">
            <h1>All the musicians</h1>

            <section>
                <ArtistNames handleArtistSelect={handleArtistSelect} />

                { chosenArtist && <FeaturedArtist artist={chosenArtist}/> }

            </section>

        </div>
    );
};

export default App;
