const express = require('express');
const { createTeam,deleteTask, assignTask, getTeamProgress, getAssignedTasks, updateTaskStatus, getTeamDetails, deleteTeam } = require('../controllers/TeamController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/teams', authMiddleware, createTeam);
router.delete('/teams', authMiddleware, deleteTeam);
router.post('/task/assign', authMiddleware, assignTask);
router.get('/team/progress', authMiddleware, getTeamProgress); 
router.get('/team/details', authMiddleware, getTeamDetails); 
router.get('/task/assigned', authMiddleware, getAssignedTasks);
router.put('/task/:taskId/status', authMiddleware, updateTaskStatus);
router.delete('/task/:taskId', authMiddleware, deleteTask);

module.exports = router;