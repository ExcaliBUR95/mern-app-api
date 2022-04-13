const { Router } = require("express");
const Link = require("../models/Link.model");
const router = Router();

router.get("/:code", async (req, res) => {
  try {
    const link = await Link.findOne({ code: req.params.code });
    console.log(link);
    if (link) {
      link.clicks++;
      await link.save();
      return res.redirect(linklfrom);
    }

    res.json("ссылка не найдена(редирект1)");
  } catch (e) {
    res.status(500).json(
      {
        message: "Что-то пошло не так, попробуйте снова (redirected)",
      },
      e.toString()
    );
  }
});

module.exports = router;
