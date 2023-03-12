const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/toolsRoute");
const viewCount = require("./middleware/viewCount");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(viewCount);
dbConnect();

app.use("/api/v1/tools", toolsRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready for Fight");
});

app.all("*", (req, res) => {
  res.send("Route not found");
});

app.listen(PORT, () => {
  console.log("Server running at", PORT);
});
