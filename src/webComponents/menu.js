import goblinImg from '/workspace/Dungeon-Donuts/src/imgs/goblin.png';
import dragonImg from '/workspace/Dungeon-Donuts/src/imgs/drag.jpg';
import mimicImg from '/workspace/Dungeon-Donuts/src/imgs/mimic.png';
import beholderImg from '/workspace/Dungeon-Donuts/src/imgs/beholder.png';
import tavernImg from '/workspace/Dungeon-Donuts/src/imgs/tavern.jpg';
import d20Img from '/workspace/Dungeon-Donuts/src/imgs/d20.png';
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
    let dungDozen = createMenuItem("$10 Dungeoneers Dozen", d20Img, "Image of a twenty sided die.", "Roll a D20 to find out how many donuts you get");
    let beholder = createMenuItem("$1.50 Beholders Chocolate", beholderImg, "Picture of a beholder, a creature from dungeons and dragons.", "The chocolate Donut that stares back at you.");
    let mimic = createMenuItem("$1.50 Mimic Marshmallow", mimicImg, "Image of a mimic, a creature from dungeons and dragons.", "Shape shifts into the marshmallow donut of your dreams!");
    let goblin = createMenuItem("$1.50 Glazed Goblin", goblinImg, "Image of a goblin, a classic fantasy creature.", "Classic Monster - Classic Donut");
    let dragon = createMenuItem("$1.50 The Dragon", dragonImg, "The Dungeon Donuts logo.", "The signature donut of Dungeon Donuts. Raspberry chocolate goodness!");
    let tavern = createMenuItem("$1.50 The Tavern Twist", tavernImg, "Image of some adventurers sitting around a table in a tavern.", "Four of you are sitting around a table. Introduce yourself.");
    center.appendChild(dungDozen);
    center.appendChild(beholder);
    center.appendChild(mimic);
    center.appendChild(goblin);
    center.appendChild(dragon);
    center.appendChild(tavern);
    let attribution1 = document.createElement('a');
    attribution1.classList.add('attribution');
    attribution1.href = "https://images.mmorpg.com/features/10169/images/Beholder1_t.png";
    attribution1.textContent = "Beholder image created by MMORPG.com";
    let attribution2 = document.createElement('a');
    attribution2.classList.add('attribution');
    attribution2.textContent = "Mimic art done by Blazbaros on DeviantArt";
    attribution2.href = "https://www.deviantart.com/blazbaros/art/Chester-the-Mimic-827963711";
    let attribution3 = document.createElement('a');
    attribution3.classList.add('attribution');
    attribution3.textContent = "Goblin art done by onlinedungeonmaster.com AKA Michael Iachini.";
    attribution3.href = "http://onlinedungeonmaster.com/goblin-minion/";
    let attribution4 = document.createElement('a');
    attribution4.classList.add('attribution');
    attribution4.textContent = "Tavern art done by Geeknative.com";
    attribution4.href = "https://images-geeknative-com.exactdn.com/wp-content/uploads/2018/09/10224528/inn_of_heroes_by_atomiiii-dc2oxlu.jpg?strip=all&lossy=1&resize=1193%2C670&ssl=1";
    let breakLine = document.createElement('br');
    let atCon1 = document.createElement('p');
    let atCon2 = document.createElement('p');
    let atCon3 = document.createElement('p');
    let atCon4 = document.createElement('p');
    atCon1.appendChild(attribution1);
    atCon2.appendChild(attribution2);
    atCon3.appendChild(attribution3);
    atCon4.appendChild(attribution4);
    center.appendChild(atCon1);
    center.appendChild(atCon2);
    center.appendChild(atCon3);
    center.appendChild(atCon4);
    main.appendChild(center);
    return main;
}