import express from "express";
import listings from "./src/routes/listings.mjs";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

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
