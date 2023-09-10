const express = require('express');
const app = express();
const port = 3000; 

app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;
    const currentDay = getCurrentDay();
    const utcTime = getUtcTime();
    const githubFileUrl = "https://github.com/MisCynthia/Create-and-host-an-Endpoint-HNG/blob/main/server.js";
    const githubRepoUrl = "https://github.com/MisCynthia/Create-and-host-an-Endpoint-HNG";
    
    const responseData = {
        "slack_name": slackName,
        "current_day": currentDay,
        "utc_time": utcTime,
        "track": track,
        "github_file_url": githubFileUrl,
        "github_repo_url": githubRepoUrl,
        "status_code": 200
    };
    
    res.json(responseData);
});

function getCurrentDay() {
    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getUTCDay();
    return daysOfWeek[currentDayIndex];
}

function getUtcTime() {
    // Get the current UTC time in ISO format
    const currentDate = new Date();
    return currentDate.toISOString();
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
