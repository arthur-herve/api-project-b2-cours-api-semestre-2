const express = require("express");
const router = express.Router();

router.get("/articles/", (req, res, next) => {
  res.send(`
    <h1>Bienvenue dans la page articles.</h1>
    <p>C'était juste pour renvoyer un get sur la bonne URL.</p>
    `);
});

module.exports = router;
