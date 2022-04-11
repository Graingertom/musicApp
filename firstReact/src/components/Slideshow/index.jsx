import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const SlideShow = ({ artist, token }) => {
  const [allAlbums, setAllAlbums] = useState([])
  const [chosenAlbum, setChosenAlbum] = useState();

  const chosenArtist = artist

  console.log(chosenArtist)
  
  useEffect(() => {
    const artistAlbums = async () => {
        const access_token = await token();
        try {
            let { data } = await axios.get(`https://api.spotify.com/v1/artists/${artist.id}/albums?limit=8`, {
                headers: {
                    "Authorization": `Bearer ${access_token}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });
            setAllAlbums(data.items)
        } catch (err) {
            console.warn(err);
        }
    }
    artistAlbums()
}, [])

  const handleAlbumSelect = albumId => {
    const chosenAlbum = chosenArtist.album.find(alb => alb.id === albumId);
    setChosenAlbum(chosenAlbum);
  }



  const goTo = useNavigate();
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])


  const next = () => {
    if (index === allAlbums.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(allAlbums.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (

    <div className="slideshow">
      <h1>Albums</h1>
      <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
      </div>
      {
        allAlbums.map((album, index) => (
          <div key={index}>
            <h2>{`"${album.name}"`}</h2>
            <img key={album.id} className="Imgs" src={album.images[0].url} onClick={() => {
              goTo(`../albums/${artist.name}/${album.name}`)
              handleAlbumSelect(album.id)
            }} />
          </div>
        ))
      }

    </div>

  )
}
