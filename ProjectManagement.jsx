import React, { useState, useEffect } from 'react';
import { projectAPI } from '../../services/api';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    image: null
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await projectAPI.getAll();
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('location', formData.location);
    data.append('image', formData.image);

    try {
      await projectAPI.create(data);
      alert('Project added successfully!');
      setFormData({ name: '', description: '', location: '', image: null });
      fetchProjects();
    } catch (error) {
      alert('Error adding project');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await projectAPI.delete(id);
        fetchProjects();
      } catch (error) {
        alert('Error deleting project');
      }
    }
  };

  return (
    
      Project Management
      
        Add New Project
        
          <input
            type="text"
            placeholder="Project Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
          <textarea
            placeholder="Project Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
            required
          />
          Add Project
        
      

      
        All Projects
        
          
            
              Image
              Name
              Description
              Location
              Action
            
          
          
            {projects.map((project) => (
              
                
                  
                
                {project.name}
                {project.description.substring(0, 50)}...
                {project.location}
                
                  <button className="delete-btn" onClick={() => handleDelete(project._id)}>Delete
                
              
            ))}
          
        
      
    
  );
};

export default ProjectManagement;