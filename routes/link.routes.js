const { Router } = require("express");
const config = require("config");
const shortid = require("shortid");
const Link = require("../models/Link.model");
const auth = require("../middleware/auth.meddleware");

const router = Router();

router.post("/generate", auth, async (req, res) => {
  try {
    const baseUrl = config.get("baseUrl");
    const { from } = req.body;

    const code = shortid.generate();

    const existing = await Link.findOne({ from });

    if (existing) {
      return res.json({ link: existing });
    }
    console.log(baseURrl);
    console.log(code);
    const to = baseUrl + "/t/" + code;
    console.log(to);

    const link = new Link({
      code: code,
      to: to.toString(),
      from: from,
      owner: req.user.userId,
    });
    console.log(link);
    await link.save();

    res.status(200).json(link);
  } catch (e) {
    res.status(500).json({
      message:
        "Что-то пошло не так, попробуйте снова generate это?" + e.toString(),
    });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId }); // ???
    res.json(links);
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова почему пиво сломаль",
    });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const links = await Link.findById(req.params.id); // ???
    res.json(links);
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова, последний гет",
    });
  }
});

module.exports = router;
