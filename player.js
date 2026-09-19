import data from './colorsquaredata.json' with {type:'json'};
const square = document.createElement('div');
square.style.width = data.width || data[0]?.width || '150px';
square.style.height = data.height || data[0]?.height || '150px';
square.style.backgroundColor = data.color || data[0]?.color || 'grey';
square.style.position = 'absolute';
let positionX = 0;
let positionY = 0;
square.style.left = positionX + 'px';
square.style.top = positionY + 'px';
document.body.appendChild(square);
const speed = 10;
document.addEventListener('keydown', (event) => {
  if (event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft') {
    positionX -= speed;
    square.style.left = positionX + 'px';
  } 
  if (event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight') {
    positionX += speed;
    square.style.left = positionX + 'px';
  }
  if (event.key === 'w' || event.key === 'W' || event.key === 'ArrowUp') {
    positionY -= speed;
    square.style.top = positionY + 'px';
  } 
  if (event.key === 's' || event.key === 'S' || event.key === 'ArrowDown') {
    positionY += speed;
    square.style.top = positionY + 'px';
  }
});
