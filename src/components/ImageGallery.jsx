import React, { useState } from 'react';

const ImageGallery = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddImage = () => {
    if (imageUrl.trim() !== '') {
      setImages([...images, imageUrl]);
      setImageUrl('');
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  console.log(images, imageUrl);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Image Gallery Application</h1>
      {/* Input for adding a new image */}
      <div style={{ marginBottom: '40px' }}>
        <input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ width: '300px', padding: '8px' }}
        />
        <button
          onClick={handleAddImage}
          style={{ marginLeft: '10px', padding: '8px 16px', cursor: 'pointer' }}
        >
          Add Image
        </button>
      </div>
      {/* Display images */}
      <div
        style={{
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))',
          padding: '0 30px',
        }}
      >
        {images.map((url, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img
              src={url}
              alt={`Gallery - ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                borderTopLeftRadius: '30px',
                borderBottomRightRadius: '10px',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedImage(url)}
            />
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'red',
                color: 'white',
                cursor: 'pointer',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '10px',
                fontWeight: 600,
              }}
              onClick={() => handleDeleteImage(index)}
            >
              Delete
            </button>
          </div>
        ))}
        {/* Map over images array and display them */}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: '0',
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          id="modal"
        >
          <img
            src={selectedImage}
            alt="Selected Items"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '90%', maxWidth: '90%' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

