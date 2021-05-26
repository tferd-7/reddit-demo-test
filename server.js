const express = require('express');
const path = require('path');
const chalk = require('chalk');
const axios = require('axios');
const app = express();

const PUBLIC_PATH = path.join(__dirname, './public');
const DIST_PATH = path.join(__dirname, './dist');
const PORT = process.env.PORT || 3000;

app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));
app.use(express.json());


app.get('/fetch-posts', async (req, res) => {
  let posts;
  if (req.query.subreddit) {
    posts = (await axios.get(`https://reddit.com/r/${req.query.subreddit}.json`)).data.data.children;
  } else {
    posts = (await axios.get(`https://reddit.com/.json`)).data.data.children;
  }
  res.send(posts);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log(chalk.greenBright(`Server is listening on PORT: ${PORT}`));
});
