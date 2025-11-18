const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const projectController = require('../controllers/projectController');

router.get('/', projectController.getAllProjects);
router.post('/', upload.single('image'), projectController.createProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;