import Button from "../../components/Button/Button";
import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';



const NewExam = () => {

  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    setImages(acceptedFiles);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      await axios.post('http://your-django-backend-api/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Images uploaded successfully!');
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
    <div style={{
      backgroundColor: '#fff', 
      width: '90%',
      borderRadius: '10px',
      padding: '5px',
      paddingBottom: '20px',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
      marginBottom: '20px'
      }}> 

    <div {...getRootProps()} style={{ 
    display: 'flex', 
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px dotted #aaa',
    borderRadius: '5px',
    padding: '100px', 
    textAlign: 'center', 
    height: '100px',
    alignItems: 'center', 
    justifyContent: 'center',
    margin: '10px'
    }}>
        <input {...getInputProps()} />
        <i className='bx bxs-image' style={{ 
        fontSize: '2rem', 
        marginTop: '5px', 
        marginBottom: '10px' 
        }}></i>
        <p style={{color: '#000'}}><strong>Clique</strong> para escolher as imagens ou <strong>arraste</strong> aqui</p>
      </div>
      {images.length > 0 && (

<div>

<div style={{ 
  display: 'flex', 
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap', 
  }}>
  {images.map((image, index) => (
    <div key={index} style={{ margin: '20px' }}>
      <img
        src={URL.createObjectURL(image)}
        alt={`Thumbnail ${index}`}
        style={{ 
        width: '100px', 
        height: '100px', 
        objectFit: 'cover', 
        borderRadius: '5px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.8)' }}
      />
    </div>
  ))}
</div>

</div>
      )}
      <div style={{
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center'
        }}>
        <Button to="/Exams" width="770px">
          Salvar
        </Button>

        <Button to="/Exams" color="#333" width="770px">
          Descartar
        </Button>
      </div>
      
    </div>
    );
};

export default NewExam;
