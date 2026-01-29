const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`ZyPrime Technology server running on http://localhost:${PORT}`);
});
