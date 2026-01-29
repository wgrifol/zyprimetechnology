const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get("/github", (req, res) => {
  res.redirect("/");
});

module.exports = router;
