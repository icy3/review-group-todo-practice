const express = require("express")
const cors = require("cors")
const path = require("path");
const db = require("./db.js")
const app = express();
//
app.use(cors())
app.use(express.static(path.join(__dirname, "../dist")))
app.use(express.json())

const port = 5000;

app.post("/jobs", (req, res) => {
  const job = req.body.newJob
  console.log(job)
  db.addJob(job, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      res.send(data)
    }
  })
})
app.get("/jobs", (req, res) => {
  db.getJobs((err, data) => {
    if (err) {
      console.error(err)
    } else {
      res.send(data)
    }
  })
})


app.delete("/deleteJob/:id", (req, res) => {
  const id = req.params.id;
  console.log("id from server", id)
  db.deleteJob(id, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      res.send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`it is alive ${port}`)
})