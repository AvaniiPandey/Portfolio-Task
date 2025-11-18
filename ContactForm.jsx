import React, { useState } from 'react';
import { contactAPI } from '../../services/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactAPI.create(formData);
      alert('Form submitted successfully!');
      setFormData({ fullName: '', email: '', mobile: '', city: '' });
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    
      
        Get a Free Consultation
        
        
        
        
        Get Quick Quote
      
    
  );
};

export default ContactForm;