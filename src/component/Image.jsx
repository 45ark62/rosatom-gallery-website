import "../App.css";
import galleryStore from "../store/gallery-store.js";
import axios from "axios";
import React from 'react'
import { useState,useEffect } from "react";
import Alert from 'react-bootstrap/Alert';
const Image = ({ imagePreviewOn, onClose }) => {
    const [currentImage,setCurrentImage]= useState('')
    useEffect(() => {
      setCurrentImage(imagePreviewOn);
  }, [imagePreviewOn]);
  
  const onclickPicturePreviewBack = (event) => {
    const curImageIndex = galleryStore.images.findIndex(item => item.picture_item === currentImage);
    console.log(curImageIndex)
    if (curImageIndex > 0) {
        const prevImage = galleryStore.images[curImageIndex - 1];
        setCurrentImage(prevImage.picture_item);
    } 
  };

  const onclickPicturePreviewForward = (event) => {
      const curImageIndex = galleryStore.images.findIndex(item => item.picture_item === currentImage);;
      console.log(curImageIndex);
      if( curImageIndex<galleryStore.images.length-1){
        const nextImage = galleryStore.images[curImageIndex + 1];
        setCurrentImage(nextImage.picture_item);
      }
      
  };

  return (
    <div className='imagePreviewContainer '>
     <div onClick={onClose} ><img className='closeIcon' src='https://img.icons8.com/?size=100&id=AqDEb8mCIrk9&format=png&color=000000' alt="" /></div>  
     <img className='toggerIcons ' src="https://img.icons8.com/?size=100&id=1806&format=png&color=000000" alt="Назад" onClick={onclickPicturePreviewBack}/>
     <div className="imagePreview"><img src={`${axios.defaults.baseURL}/assets/${currentImage}`} alt=""/></div>
       <img className='toggerIcons ' src="https://img.icons8.com/?size=100&id=61&format=png&color=000000" alt="Вперёд" onClick={onclickPicturePreviewForward}/>
    
   
   
       </div>
  
  )
}

export default Image