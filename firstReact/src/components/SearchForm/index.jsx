import React, { useState } from 'react';

export const SearchForm = () => {

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
        
        const handleSubmit = (e) => {
            e.preventDefault()
            result = formData.artist
        };

    return <form>
        <label htmlFor="artist">Search for an artist:</label>
        <input type='text' id='artist' name='artist' onChange={handleChange}></input>
        <input type='submit' onSubmit={handleSubmit}></input>

    </form>
}
