import { createHome } from './webComponents/home.js';
import { createMenuItem, menu } from './webComponents/menu';
import createContactPage from './webComponents/contact';
import './styles.css';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let mainContent = document.getElementById('content');
mainContent.appendChild(createHome());

let homeButton = document.getElementById("homeButton")
homeButton.onclick = () => {
    removeAllChildNodes(mainContent);
    mainContent.appendChild(createHome());
};

let menuButton = document.getElementById("menuButton");
menuButton.onclick = () => {
    removeAllChildNodes(mainContent);
    mainContent.appendChild(menu());
};

let contactButton = document.getElementById("contactButton");
contactButton.onclick = () => {
    removeAllChildNodes(mainContent);
    mainContent.appendChild(createContactPage());
};
