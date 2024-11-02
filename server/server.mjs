import express from "express";
import db from "./src/db/connection.mjs";
import listings from "./src/routes/listings.mjs";

const PORT = 3000;
const app = express();

app.use(express.json());

app.use("/listings", listings);

app.get("/", (req, res) => {
  res.send("Welcome to the Sample Airbnb API!");
});

app.use((err, req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured. :(");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
