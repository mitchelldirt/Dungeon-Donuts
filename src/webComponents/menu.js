export function createMenuItem(h2, src, alt, p) {
    let container = document.createElement('div');
    container.classList.add('box');
    let header = document.createElement('h2')
    header.textContent = `${h2}`;
    let image = document.createElement('img')
    image.src = `${src}`;
    image.alt = `${alt}`;
    let description = document.createElement('p');
    description.textContent = `${p}`;
    container.appendChild(header);
    container.appendChild(image);
    container.appendChild(description);
    return container;
}

export function menu() {
    let main = document.createElement('main');
    let center = document.createElement('center');
    let h1 = document.createElement('h1');
    h1.textContent = "Gaze upon thine donuts if ye dares";
    center.appendChild(h1);
    let dungDozen = createMenuItem("$10 Dungeoneers Dozen", "/src/imgs/d20.png", "Image of a twenty sided die.", "Roll a D20 to find out how many donuts you get");
    let beholder = createMenuItem("$1.50 Beholders Chocolate", "/src/imgs/beholder.png", "Picture of a beholder, a creature from dungeons and dragons.", "The chocolate Donut that stares back at you.");
    let mimic = createMenuItem("$1.50 Mimic Marshmallow", "/src/imgs/mimic.png", "Image of a mimic, a creature from dungeons and dragons.", "Shape shifts into the marshmallow donut of your dreams!");
    let goblin = createMenuItem("$1.50 Glazed Goblin", "/src/imgs/goblin.png", "Image of a goblin, a classic fantasy creature.", "Classic Monster - Classic Donut");
    let dragon = createMenuItem("$1.50 The Dragon", "/src/imgs/drag.jpg", "The Dungeon Donuts logo.");
    let tavern = createMenuItem("$1.50 The Tavern Twist", "/src/imgs/tavern.jpg", "Image of some adventurers sitting around a table in a tavern.", "Four of you are sitting around a table. Introduce yourself.");
    center.appendChild(dungDozen);
    center.appendChild(beholder);
    center.appendChild(mimic);
    center.appendChild(goblin);
    center.appendChild(dragon);
    center.appendChild(tavern);
    main.appendChild(center);
    return main;
}