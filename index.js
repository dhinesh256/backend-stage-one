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
    "utc_time": date.toISOString().split('.')[0]+'Z',
    "track": track,
    "github_file_url": "https://github.com/dhinesh256/backend-stage-one/edit/master/index.js",
    "github_repo_url": "https://github.com/dhinesh256/backend-stage-one"
  }
  responseObj.status_code = 200
  res.send(responseObj);
});

app.listen(5000);
