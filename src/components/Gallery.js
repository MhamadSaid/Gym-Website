/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.jpg";

function Gallery() {
  const galleryImages = [image1, image2, image3, image4, image5, image6];

  return (
    <div id="gallery" className="gallery-container lg:px-32 lg:py-64 px-0 py-0">
      <h2 className="h2 text-accent font-bold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {galleryImages.map((imageUrl, index) => (
          <div key={index} className="gallery-item">
            <img
              src={imageUrl}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-screen object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
