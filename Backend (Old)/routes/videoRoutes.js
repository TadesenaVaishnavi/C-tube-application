const express = require('express');
const router = express.Router();
const Video = require('../models/Video');



// 📌 Upload a Video

router.post('/', async (req, res) => {
  try {
    const { userId, title, description, videoUrl, thumbnailUrl, duration, privacy } = req.body;

    const newVideo = new Video({
      userId,
      title,
      description,
      videoUrl,
      thumbnailUrl,
      duration,
      privacy,
      views: 0 // default
    });

    await newVideo.save();
    res.status(201).json(newVideo);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// 🔥 Recommended Videos (by views)

router.get('/recommended', async (req, res) => {
  try {
    const videos = await Video.find().sort({ views: -1 }).lean();
    res.json(videos);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// 🆕 Latest Videos

router.get('/latest', async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// 📄 Get Single Video

router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.json(video);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// 👀 Increase View Count

router.post('/:id/view', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    video.views += 1;
    await video.save();

    res.json({
      message: 'View added',
      views: video.views
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;