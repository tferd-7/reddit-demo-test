import { navBar } from './components/nav';
import { content } from './components/content';
import axios from 'axios';

const app = document.querySelector('#app');

const state = {
  navLinks: ['videos', 'funny', 'gifs'],
  posts: [],
}

const fetchPosts = async (hash) => {
  let posts;
  if (hash) {
    posts = (await axios.get(`/fetch-posts?subreddit=${hash.slice(1)}`)).data;
  } else {
    posts = (await axios.get('/fetch-posts')).data;
  }
  state.posts = posts.map(p => p.data);
}

window.addEventListener('hashchange', () => {
  render();
})

const render = async () => {
  app.innerHTML = '';
  app.appendChild(navBar(state.navLinks));
  await fetchPosts(window.location.hash);
  app.appendChild(content(state.posts));
  console.log(state);
}

render();