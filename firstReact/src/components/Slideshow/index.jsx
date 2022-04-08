import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const SlideShow = ({ artist, handleAlbumSelect }) => {

    const goTo = useNavigate();
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [])

    const next = () => {
        if (index === albums.length - 1) {
          setIndex(0)
        } else {
          setIndex(index + 1)
        }
      }
      const prev = () => {
        if (index === 0) {
          setIndex(albums.length - 1)
        } else {
          setIndex(index - 1)
        }
      }

      const albums = artist.album.map((alb) => {
        return {alb}
     }
     )



  return (

        <div className="slideshow">
            <h1>Albums</h1>
          <div className="actions">
            <button onClick={prev}>👈</button>
            <button onClick={next}>👉</button>
          </div>
            <h2>{`"${albums[index].alb.title}"`}</h2>
          <img key={albums[index].alb.id} className="Imgs" src={albums[index].alb.cover} onClick={() =>{
                    goTo(`../albums/${artist.artist}/${albums[index].alb.title}`)
                    handleAlbumSelect(albums[index].alb.id)}}/>
        </div>
      
  )
}
