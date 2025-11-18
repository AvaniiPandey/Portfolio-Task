import React, { useState, useEffect } from 'react';
import { projectAPI } from '../../Services/api';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

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

  return (
    
      Our Projects
      
        {projects.map((project) => (
          
            
            
              {project.name}
              {project.location}
              {project.description}
              READ MORE
            
          
        ))}
      
    
  );
};

export default ProjectsSection;