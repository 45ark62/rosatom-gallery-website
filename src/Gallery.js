import "./App.css";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import axios from "axios";
import galleryStore from "./store/gallery-store";

import Image from "./component/Image";


const Gallery=observer(()=> {
  const [imagePreviewOn,setImagePreviewOn] = useState('')
  
  useEffect(() => {
    galleryStore.fetchImages();
  }, []);
  

 /* if (galleryStore.loading) {
    return <div>Loading...</div>;
  }*/
 const onclickPicturePreview= event =>{
 
  const srcForImage=event.currentTarget.id
  console.log(srcForImage)
  setImagePreviewOn(srcForImage)
 }
 const closePreview = () => {
  setImagePreviewOn(null);
}
 

  if (galleryStore.error) {
    return <div>Error: {galleryStore.error.message}</div>;
  }
  return (
    <div className="gallery">
       {galleryStore.images.map((image) => (
        <div key={image.id} id={image.picture_item} className="imageCard" onClick={onclickPicturePreview} >
          <img src={`${axios.defaults.baseURL}/assets/${image.picture_item}`} alt='' />
        </div>
      ))}
      {imagePreviewOn && <div className="isDisabled"><Image imagePreviewOn={imagePreviewOn} onClose={closePreview}/></div>}
      
    </div>
    
  );
});

export default Gallery;
