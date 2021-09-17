export default function () {
    let header = document.createElement('header');
    let nav = document.createElement('nav');
    nav.classList.add('nav');
    let homeButton = document.createElement('button');
    let menuButton = document.createElement('button');
    let contactButton = document.createElement('button');
    let homeAnchor = document.createElement('a');
    let menuAnchor = document.createElement('a');
    let contactAnchor = document.createElement('a');
    homeAnchor.textContent = 'Home';
    menuAnchor.textContent = 'Menu';
    contactAnchor.textContent = 'Contact';
    homeButton.appendChild(homeAnchor);
    menuButton.appendChild(menuAnchor);
    contactButton.appendChild(contactAnchor);
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    header.appendChild(nav);
    let content = document.getElementById('content');
    content.appendChild(header);
}