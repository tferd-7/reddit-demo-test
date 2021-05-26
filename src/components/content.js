import { post } from './post';

export const content = (posts) => {
  const container = document.createElement('div');
  container.classList.add('content');
  posts.forEach(p => {
    container.appendChild(post(p));
  })
  return container;
}