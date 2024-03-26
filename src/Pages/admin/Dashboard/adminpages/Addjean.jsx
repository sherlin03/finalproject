import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addjean = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert image to Base64
    const base64Image = await convertImageToBase64(formData.image);

    // Prepare form data to send to JSON Server
    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      image: base64Image,
    };

    // Send user data to JSON Server
    try {
      const response = await fetch('http://localhost:4000/jean', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User registered successfully!');
        navigate('/jean')
        // Reset form fields
        setFormData({
          username: '',
          email: '',
          password: '',
          image: null,
        });
      } else {
        console.error('Failed to register user.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  // Function to convert image file to Base64 string
  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="image">Profile Image:</label>
        <input type="file" id="image" name="image" onChange={handleImageChange} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Addjean;