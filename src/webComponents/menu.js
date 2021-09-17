function createMenuItem(h2, src, alt, p) {
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
}

function menu() {
    
}