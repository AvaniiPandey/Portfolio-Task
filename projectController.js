const Project = require('../Models/Project');
const { cropImage } = require('../utils/imagecropper');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { name, description, location } = req.body;
    
    let imagePath = req.file.path;
    
    // Crop image to 450x350
    const croppedPath = `uploads/cropped_${Date.now()}.jpg`;
    await cropImage(imagePath, croppedPath, 450, 350);
    
    const project = new Project({
      name,
      description,
      location,
      image: croppedPath
    });
    
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};