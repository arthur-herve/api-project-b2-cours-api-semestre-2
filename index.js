const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const articleRoutes = require("./routes/article");
const adminRoutes = require("./routes/admin");

/**
 * middleware ce sont des fonctions qui ont besoin d'un chemin, l'uri
 * on récupère le req on renvoie le res
 * req => request
 * res => response
 * url cherchée = '/'
 */

app.use(bodyParser.urlencoded({ extended: false }));

app.use(articleRoutes);
app.use(adminRoutes);

app.use("/", (req, res, next) => {
  req.user = "Blablou";
  console.log("Je suis dans le premier middleware !");
  next();
});

app.use("/", (httpRequest, httpResponse, next) => {
  console.log("je suis dans un autre middleware", httpRequest.user);
  httpResponse.send(
    `<h3 style="background-color : red ; color : yellow;" >J'suis dans les backroom<h3>`
  );
});

app.listen(5500);
