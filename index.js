const express = require("express");

const app = express();
const date = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name
  const track = req.query.track
  let responseObj = {
    "slack_name": slack_name,
    "current_day":  weekday[date.getDay()],
    "utc_time": date.getUTCMilliseconds(),
    "track": track,
    "github_file_url": "backend-stage-one\index.js",
    "github_repo_url": "gt_url"
  }
  responseObj.status = 200
  res.send(responseObj);
});

app.listen(5000);