const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const ArtistModel = require("../models").Artist;
const SongModel = require("../models").Song;

router.get("/profile/:id", async (req, res) => {
  let artist = await ArtistModel.findByPk(req.params.id, {
    include: UserModel,
  });
  res.json({ artist });
});

router.get("/", async (req, res) => {
  let artists = await ArtistModel.findAll();
  res.json({ artists });
});

router.post("/", async (req, res) => {
  let artist = await ArtistModel.create(req.body);
  res.json({ artist });
});

router.put("/:id", async (req, res) => {
  let artist = await ArtistModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ artist });
});

router.delete("/:id", async (req, res) => {
  await ArtistModel.destroy({
    where: { id: req.params.id },
  });

  res.json({
    message: `Artist with id ${req.params.id} was deleted`,
  });
});

router.post('/:id/newsong', async (req, res) => {
  const artistId = req.params.id;
	req.body.artistId = artistId;
  let song = await SongModel.create(req.body);

  let artist = await ArtistModel.findByPk(req.params.id, {
    include: SongModel
  });
  res.json({ artist });
});

module.exports = router;
