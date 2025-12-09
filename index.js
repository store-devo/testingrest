import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "ini halaman utama" });
});

app.get("/products", (req, res) => {
  res.status(200).json({
    msg: "ini halaman product",
    product1: "product1",
    product2: "product2",
  });
});

app.listen(3000, () => {
  console.log("server runing");
});
