import React from 'react';
import './ImageGallery.scss';

function ImageGallery() {
    return (
        <div id="imageGallery" class="img-gal-container fade-in">
            <div class="gallery-wrap">
                <div className="img-gal gal-img1"/>
                <div className="img-gal gal-img2"/>
                <div className="img-gal gal-img3"/>
                <div className="img-gal gal-img4"/>
                <div className="img-gal gal-img5"/>
            </div>
        </div>
    )
}

export default ImageGallery