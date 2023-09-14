const express = require('express');
const router = express.Router();

const SongController = require('../app/controllers/SongController');

router.get('/create', SongController.create);
router.post('/store', SongController.store);
router.get('/:id/edit', SongController.edit);
router.put('/:id', SongController.update);
router.patch('/:id/restore', SongController.restore);
router.delete('/:id', SongController.destroy);
router.delete('/:id/force', SongController.forceDestroy);
router.get('/', SongController.show);

module.exports = router;
