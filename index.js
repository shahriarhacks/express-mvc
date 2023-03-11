const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/toolsRoute");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api/v1/tools", toolsRoutes);

app.listen(PORT, () => {
  console.log("Server running at", PORT);
});
