const express = require("express")
const cors = require("cors")
const path = require("path");
const db = require("./db.js")
const app = express();
const port = 4567
//
app.use(express.static(path.join(__dirname, "../dist")))
app.use(cors())
app.use(express.json())



app.post("/jobs", (req, res) => {
  const job = req.body.job
  console.log(task)
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




app.delete("/job/:id", (req, res) => {
  const id = req.params.id;
  console.log("id from server", id)
  db.deletejob(id, (err, data) => {
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