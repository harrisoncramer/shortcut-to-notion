import express from "express"

const PORT = 3000

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  const stringResult = JSON.stringify(req.body)
  console.log(stringResult)
  res.send("Post successful")
})

app.listen(PORT, () => {
  console.log("Port listening on 3000")
})
