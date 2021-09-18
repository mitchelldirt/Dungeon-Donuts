import tavern from './imgs/tavern.jpg';
import d20 from './imgs/d20.png';
import map from './imgs/map-background.png';
import goblin from './imgs/goblin.png';
import dragon from './imgs/drag.jpg';
import mimic from './imgs/mimic.png';
import beholder from './imgs/beholder.png';
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
