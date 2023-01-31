import express from "express"

const PORT = 3000

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  console.log(req.body)
  res.send("Post successful")
})

app.listen(PORT, () => {
  console.log("Port listening on 3000")
})
