import React, { useState } from "react";
import { ArtistNames, FeaturedArtist, SlideShow } from "../../components";
import './style.css';

export function Artists() {
    const [artists, setArtists] = useState([
        {id: 101, artist: "Bon Iver", musicType: "Folk", introduction: "Bon Iver is the name singer/songwriter  chose for his solo project when he retreated to a cabin in Wisconsin during 2006. He emerged from the isolation with an album -- For Emma, Forever Ago -- that became an indie folk touchstone. The gentle strumming of acoustic guitars, subtle arrangements, and 's swooning falsetto combined to create a mood that felt like backwoods  recorded by candlelight. It was a sound that resonated with a great many people, and  became something of a bearded sensation -- feted by outlets as diverse as Mojo and Late Night with David Letterman, and collaborating with  (the first of many hookups with hip-hop artists through the following years). For 2011's Bon Iver,  swung away from the hushed intimacy of the first LP in favor of a bigger, near-orchestral sound that had elements of late-night R&B as well. He then took a detour into jagged electronica on 2016's 22, A Million before blending the various streams of the Bon Iver sound into a cohesive whole on 2019's I, I, an album that featured almost 50 musicians.", album: [{title: "For Emma, Forever Ago", cover: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Bon_iver_album_cover.jpg'}, {title: "Bon Iver", cover: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Bon_iver.jpg'}], img: 'https://drive.google.com/uc?export=view&id=1Q3loxL21zBhAqynHXrTVOSocn3S-yP2b'},
        {id: 102, artist: "Frank Ocean", musicType: "R&B", introduction: "Visionary American recording artist Frank Ocean is one of the most celebrated and critically acclaimed artists of this era. His heavily lauded breakout mixtape ‘Nostalgia Ultra’ in 2011 set the tone for what would be the Grammy-Award winning record ‘Channel Orange’. After a four-year break, Ocean dropped one of the most anticipated albums of all time ‘Endless’, followed a day later by the seminal and game-changing album ‘Blonde’. Between then and now, Frank Ocean has released songs including ‘Chanel’, ‘Provider’, and ‘In My Room’ to further acclaim, plus launched the independent American luxury company, Homer.", album: [{title: "Channel Orange", cover: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'}, {title: "Nostalgia, Ultra", cover: 'https://upload.wikimedia.org/wikipedia/en/3/32/Frank_Ocean-Nostalgia_Ultra.jpeg'}], img: 'https://drive.google.com/uc?export=view&id=1qkVpXfFJWehwpa9whZJvdCDbSnXAbAg1'}
        ])

        const [ chosenArtist, setChosenArtist ] = useState();
    
        const handleArtistSelect =  artistId => {
            const chosenArtist = artists.find(art => art.id === artistId);
            setChosenArtist(chosenArtist);
        };
    return(
        <div className="artist-show">

            <section>
            <h1>All the musicians</h1>
                <ArtistNames handleArtistSelect={handleArtistSelect} artists={artists}/>

                { chosenArtist && <FeaturedArtist artist={chosenArtist}/> }

                { chosenArtist && <SlideShow artist={chosenArtist}/> }

            </section>

        </div>
    );
};
