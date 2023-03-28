const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
const leadRoute = require("./routes/leadRoute");
const pdfRoute = require("./routes/pdfRoutr");
const path = require("path");

connectToMongo();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "/images")));

//Routes

app.use("/profiler", leadRoute);
app.use("/genSend", pdfRoute);

app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

app.listen(port, () => {
  console.log(`Risk Profiler app listening on port http://localhost:${port}`);
});
