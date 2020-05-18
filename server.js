const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/items", items);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (reg, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));

  });
}
app.use(routes);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactBooksDB",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);


