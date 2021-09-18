import mapImg from '/workspace/Dungeon-Donuts/src/imgs/map-background.png'
export default function () {
    let main = document.createElement('main');
    let heading = document.createElement('h1');
    heading.textContent = "Adventure on by :)";
    let map = document.createElement('img');
    map.src = mapImg;
    map.alt = 'A map with multiple fantasy worlds listed on it that shows where Dungeon Donuts would be if real.';
    let mapKey = document.createElement('p');
    mapKey.textContent = "1 square = 25 miles";
    let heading2 = document.createElement('h2');
    heading2.textContent = "Give us a side quest below!";
    let address1 = document.createElement('address');
    let anchor1 = document.createElement('a');
    anchor1.classList.add('address');
    anchor1.href = "tel:+01238675309";
    anchor1.textContent = "123-867-5309";
    address1.appendChild(anchor1);
    let address2 = document.createElement('address');
    let anchor2 = document.createElement('a');
    anchor2.classList.add('address');
    anchor2.href = "mailto:DmNotGm@faerun.com";
    anchor2.textContent = "DmNotGm@faerun.com";
    address2.appendChild(anchor2);
    main.appendChild(heading);
    main.appendChild(map);
    main.appendChild(mapKey);
    main.appendChild(heading2);
    main.appendChild(address1);
    main.appendChild(address2);
    return main;
}