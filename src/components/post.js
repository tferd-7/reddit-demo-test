export const post = (post) => {
  const postContainer = document.createElement('div');
  postContainer.classList.add('post-container');

  const arrowContainer = document.createElement('div');
  arrowContainer.classList.add('vote-container');

  const upvote = document.createElement('img');
  upvote.classList.add('vote-icon');
  upvote.src = './assets/upvote.png';

  const voteNumber = document.createElement('span');
  voteNumber.innerText = post.ups

  const downvote = document.createElement('img');
  downvote.src = './assets/downvote.png';
  downvote.classList.add('vote-icon');

  arrowContainer.appendChild(upvote)
  arrowContainer.appendChild(voteNumber)
  arrowContainer.appendChild(downvote)
  postContainer.appendChild(arrowContainer);


  if (post.thumbnail) {
    const thumbNail = document.createElement('img');
    thumbNail.classList.add('thumb-nail');
    thumbNail.src = post.thumbnail;
    postContainer.appendChild(thumbNail);
  }

  const link = document.createElement('a');
  link.classList.add('title-link')
  link.href = `https://reddit.com${post.permalink}`;
  link.innerText = post.title;
  postContainer.appendChild(link);

  return postContainer
}