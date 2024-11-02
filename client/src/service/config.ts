import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

export default `http://localhost:${process.env.PORT}`;
