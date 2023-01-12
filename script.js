const btnRandomColors = document.getElementById('button-random-color');
const btnClear = document.getElementById('clear-board');
const colorsPalette = document.getElementById('color-palette');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const block4 = document.getElementById('block4');
const colors = document.querySelectorAll('.color');
const pixels = document.getElementsByClassName('pixel');
block1.classList.add('selected');
let targetSelected = document.querySelector('.selected');
let targetColor = targetSelected.style.backgroundColor;

//salva cores aleatórias no LocalStorage
const save = () => {
  localStorage.setItem('colorPalette', JSON.stringify([block1.style.backgroundColor, block2.style.backgroundColor, block3.style.backgroundColor, block4.style.backgroundColor]));
};
const recoveryObject = JSON.parse(localStorage.getItem('colorPalette'));
const corAletoria = () => {
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
  return `rgb(${R}, ${G}, ${B})`;
};
function iniciateColors () {
      if (localStorage.getItem('colorPalette') != null) {
      for (index = 0; index < recoveryObject.length; index += 1) {
      colors[index].style.backgroundColor = recoveryObject[index];
    }
  }else{
    for(index = 0; index < colors.length; index += 1){
      if(colors[index] === colors[0]){
        colors[index].style.backgroundColor = 'black';
      }else{ 
        colors[index].style.backgroundColor = corAletoria();
      }
    }  
  }
  save();
}
iniciateColors();
//gera evento de click do botão Cores aleatórias
btnRandomColors.addEventListener('click', () => {
  const color1 = 'black';
  block1.style.backgroundColor = color1;
  block2.style.backgroundColor = corAletoria();
  block3.style.backgroundColor = corAletoria();
  block4.style.backgroundColor = corAletoria();
  save();
});
//gera quadro de pixels
const generateCells = () => {
  const matriz = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    for (let index1 = 0; index1 < 5; index1 += 1) {
      const cell = document.createElement('div');
      cell.className = 'pixel';
      cell.style.backgroundColor = 'rgb(255, 255, 255)';   
      cell.addEventListener('click', () => {
        targetSelected = document.querySelector('.selected');
        targetColor = targetSelected.style.backgroundColor;
        cell.style.backgroundColor = targetColor;
        savePixels ();       
      });   
      line.appendChild(cell);
    }
    matriz.appendChild(line);
  }
};
generateCells();

//gera evento de click da Paleta de Cores
const generateEventClick = () => {
  for (index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (event) => {
      if (event.target != document.querySelector('.selected')) {
        for (index = 0; index < colors.length; index += 1) {
          if (colors[index] === document.querySelector('.selected')) {
            colors[index].classList.remove('selected');
          }
        }
        event.target.classList.add('selected');
      }
      targetColor = targetSelected.style.backgroundColor;
    });
  }
};



//salva o backgroundColor dos pixels
let backgroundPixel = [];
const savePixels = () => {
  for (index = 0; index < backgroundPixel.length; index += 1){
    backgroundPixel.splice(index, 999);
  }
  for(index = 0; index < pixels.length; index += 1) {
    backgroundPixel.push(pixels[index].style.backgroundColor);    
  }
  if(localStorage.getItem('pixelBoard') != null){
    localStorage.removeItem('pixelBoard');
  }
  localStorage.setItem('pixelBoard', JSON.stringify(backgroundPixel));
}
//gera evento de click do botão Limpar
generateEventClick();
btnClear.addEventListener('click', () => {
  pixelClass = document.querySelectorAll('.pixel');
  for (index = 0; index < pixelClass.length; index += 1) {
    pixelClass[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  savePixels();
});
//recupera o backgroundColor dos pixels
const recoveryBoard = JSON.parse(localStorage.getItem('pixelBoard'));
const recoveryPixels = () => {
  if (localStorage.getItem('pixelBoard') != null){  
    for (index = 0; index < recoveryBoard.length; index += 1){
      pixels[index].style.backgroundColor = recoveryBoard[index];
    }    
  }
}
recoveryPixels();
