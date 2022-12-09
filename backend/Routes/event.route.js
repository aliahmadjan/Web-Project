const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const EventController = require('../Controllers/Event.controller')



router.post('/addevent',EventController.AddEvent)

router.get('/getevent',EventController.GetEvents)

router.get('/getevent/:id',EventController.GetSingleEvent)

router.put('/updateevent/:id',EventController.UpdateEvent)

router.delete('/deleteevent/:id',EventController.DeleteEvent)

module.exports = router;