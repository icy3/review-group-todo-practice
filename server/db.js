const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "student",
  database: "jobs"
})

connection.connect(err => {
  if (err) {
    console.log(err)
  }
  console.log("connected to atabase!");
})

const addJob = (job, callback) => {
  connection.query(
    `INSERT INTO jobs (job) VALUES ("${job}")`,
    (err, data) => {
      if (err) {console.log(err)}
      else {callback(null, data)}
    }
  )
}

const deleteJob = (id, callback) => {
  console.log(id);
  connection.query(`DELETE FROM jobs WHERE id="${id}"`, (err, data) => {
    if (err) {console.log(err)}
    else {callback(null, data)}
  })
}

const getJobs = callback => {
  connection.query("SELECT * FROM jobs", (err, data) => {
    if (err) {console.log(err)}
    else {callback(null, data)}
  })
}

module.exports = { addJob, deleteJob, getJobs }