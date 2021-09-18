export function createHome() {
    const main = document.createElement('main');
    let inclusivity = document.createElement('p');
    inclusivity.classList.add('emphasis');
    inclusivity.textContent = "100% Vegan";
    let inclusivity2 = document.createElement('p');
    inclusivity2.classList.add('emphasis');
    inclusivity2.textContent = "All adventurers welcome here!";
    let blurb = document.createElement('p');
    blurb.textContent = "We sell only the highest quality ingredients for the highest quality adventurers.\
    Whether you prefer the sword, bow, or staff all are welcome here at Dungeon Donuts! Ask about our free armor trimming!";
    let logo = document.createElement('img');
    logo.src = '/src/imgs/drag.jpg';
    logo.alt = "Dungeon Donuts Logo"
    let hook = document.createElement('p');
    hook.classList.add('emphasis');
    hook.textContent = "Adventure on by";
    let hook2 = document.createElement('p');
    hook2.classList.add('emphasis');
    hook2.textContent = "In person or online today!";
    main.appendChild(inclusivity)
    main.appendChild(inclusivity2)
    main.appendChild(blurb)
    main.appendChild(logo)
    main.appendChild(hook)
    main.appendChild(hook2)
    return main;
};