import "dotenv/config";
import express from "express";
import routes from "./src/routes/index.js";

const PORT = 3000;

const app = express();
routes(app);

app.listen(PORT, () => {
  console.log("servidor escutando");
})
