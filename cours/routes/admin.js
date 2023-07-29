const express = require("express");
const router = express.Router();

router.get("/admin/", (req, res, next) => {
  res.send(`
  <form action="/admin/return-homepage" method="POST">
  <input type="text" class="nom"><button type="submit">Ajouter</button>
</form>
    `);
});

router.post("/admin/return-homepage", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
