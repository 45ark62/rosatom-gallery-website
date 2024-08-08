import "../App.css";
import axios from "axios";
import React from 'react'

const Image = ({ imagePreviewOn, onClose }) => {
    
  return (
    <div className='imagePreviewContainer '>
    <div className="imagePreview"><img src={`${axios.defaults.baseURL}/assets/${imagePreviewOn}`} alt=""/>
    <div onClick={onClose} className='closeIcon'><img src='https://img.icons8.com/?size=100&id=v3dThkAMrXvu&format=png&color=000000' alt="" /></div>  </div>
    
    </div>
  )
}

export default Image