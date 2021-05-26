export const navBar = (links) => {
  const nav = document.createElement('nav');

  const img = document.createElement('img');
  img.id = 'reddit-logo';
  img.src = './assets/reddit-logo.png';
  nav.appendChild(img);

  const linkContainer = document.createElement('div');
  linkContainer.classList.add('nav-link-container');

  const homeLink = document.createElement('a');
  homeLink.href = `#`;
  homeLink.innerText = 'home';
  homeLink.classList.add('nav-link');
  linkContainer.appendChild(homeLink);

  links.forEach(l => {
    const _link = document.createElement('a');
    _link.href = `#${l}`;
    _link.innerText = `${l}`;
    _link.classList.add('nav-link');
    linkContainer.appendChild(_link);
  })
  
  nav.appendChild(linkContainer);
  return nav;
}