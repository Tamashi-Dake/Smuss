const Song = require("../models/songs");
// const { mongooseToObject } = require('../../util/mongoose');

// const { clientPromise } = require("../../../lib/mongodb")

class SongController {
  // [GET] /songs/:slug
  show(req, res, next) {
    Song.find({})
      .then((songs) => res.json(songs))
      .catch((err) => next(err));
    // const client = await clientPromise;
    // const db = client.db("testDB");

    // const songs = await db
    //     .collection("songs")
    //     .find({})
    //     .sort({ metacritic: -1 })
    //     .limit(10)
    //     .toArray();

    // res.json(songs);
    // slug: req.params.slug
    // (song) =>
    // res.render('songs/show', {
    //     song: mongooseToObject(song),
    // }),
  }

  // [GET] /songs/create
  create(req, res, next) {
    res.render("songs/create");
  }

  // [POST] /songs/store
  store(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const song = new Song(req.body);
    song
      .save()
      .then(() => res.redirect("/me/stored/songs"))
      .catch((error) => {});
  }

  // [GET] /songs/:id/edit
  edit(req, res, next) {
    Song.findById(req.params.id)
      .then((song) =>
        res.render("songs/edit", {
          song: mongooseToObject(song),
        })
      )
      .catch(next);
  }

  // [PUT] /songs/:id
  update(req, res, next) {
    Song.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/songs"))
      .catch(next);
  }

  // [DELETE] /songs/:id
  destroy(req, res, next) {
    Song.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [DELETE] /songs/:id/force
  forceDestroy(req, res, next) {
    Song.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [PATCH] /songs/:id/restore
  restore(req, res, next) {
    Song.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new SongController();
