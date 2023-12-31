const btnRandomColors = document.getElementById('button-random-color');
const btnClear = document.getElementById('clear-board');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const block4 = document.getElementById('block4');
const colors = document.querySelectorAll('.color');
const pixels = document.getElementsByClassName('pixel');
const btnVQV = document.getElementById('generate-board');
const input = document.getElementById('board-size');
const linesBoard = document.getElementsByClassName('line');
const invisible = document.querySelector('.invisible');
let pixelsQuantity;
block1.classList.add('selected');

const recoveryBoardPixels = localStorage.getItem('boardSize');
const recoveryBoardSize = () => {
  if (recoveryBoardPixels !== null) {
    pixelsQuantity = recoveryBoardPixels;
  }
  if (input.value === 5 || recoveryBoardPixels === null) {
    pixelsQuantity = 5;
  }
};
recoveryBoardSize();
// salva cores aleatórias no LocalStorage
const save = () => {
  // eslint-disable-next-line max-len
  localStorage.setItem('colorPalette', JSON.stringify([block1.style.backgroundColor, block2.style.backgroundColor, block3.style.backgroundColor, block4.style.backgroundColor]));
};

// Cria cores aleatórias e recupera no LocalStorage
const recoveryObject = JSON.parse(localStorage.getItem('colorPalette'));
const corAletoria = () => {
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
  return `rgb(${R}, ${G}, ${B})`;
};

function iniciateColors() {
  if (localStorage.getItem('colorPalette') != null) {
    for (let index = 0; index < recoveryObject.length; index += 1) {
      colors[index].style.backgroundColor = recoveryObject[index];
    }
  } else {
    for (let index = 0; index < colors.length; index += 1) {
      if (colors[index] === colors[0]) {
        colors[index].style.backgroundColor = 'black';
      } else {
        colors[index].style.backgroundColor = corAletoria();
      }
    }
  }
  save();
}
iniciateColors();

// Easter  Egg
const removeClass = () => {
  if (document.querySelector('.btn btn-success btn-lg') !== null) {
    invisible.classList.remove('btn', 'btn-success', 'btn-lg');
  }
  if (document.querySelector('.invisible') === null) {
    invisible.classList.add('invisible');
  }
};

const pixelsColors = [];
const removePixelColorsArray = () => {
  for (let index1 = 0; index1 < pixelsColors.length; index1 += 1) {
    pixelsColors.splice(index1, pixelsColors.length);
  }
};

const easterEgg = () => {
  const pixelClass = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelClass.length; index += 1) {
    if (pixelClass[index].style.backgroundColor !== 'rgb(255, 255, 255)') {
      pixelsColors.push(1);
    }
  }
  if (pixelsColors.length === pixelClass.length) {
    invisible.classList.add('btn', 'btn-success', 'btn-lg');
    invisible.classList.remove('invisible');
    removePixelColorsArray();
  } else {
    removePixelColorsArray();
  }
};

// gera evento de click do botão Cores aleatórias
btnRandomColors.addEventListener('click', () => {
  const color1 = 'black';
  block1.style.backgroundColor = color1;
  block2.style.backgroundColor = corAletoria();
  block3.style.backgroundColor = corAletoria();
  block4.style.backgroundColor = corAletoria();
  save();
});

// salva o backgroundColor dos pixels
const backgroundPixel = [];
const savePixels = () => {
  for (let index = 0; index < backgroundPixel.length; index += 1) {
    backgroundPixel.splice(index, 999);
  }
  for (let index = 0; index < pixels.length; index += 1) {
    backgroundPixel.push(pixels[index].style.backgroundColor);
  }
  if (localStorage.getItem('pixelBoard') != null) {
    localStorage.removeItem('pixelBoard');
  }
  localStorage.setItem('pixelBoard', JSON.stringify(backgroundPixel));
  easterEgg();
};

// gera quadro de pixels
const generateCells = () => {
  const matriz = document.querySelector('#pixel-board');
  for (let index = 0; index < pixelsQuantity; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    for (let index1 = 0; index1 < pixelsQuantity; index1 += 1) {
      const cell = document.createElement('div');
      cell.className = 'pixel';
      cell.style.backgroundColor = 'rgb(255, 255, 255)';
      cell.addEventListener('click', () => {
        const targetSelected = document.querySelector('.selected');
        const targetColor = targetSelected.style.backgroundColor;
        cell.style.backgroundColor = targetColor;
        savePixels();
      });
      line.appendChild(cell);
    }
    matriz.appendChild(line);
  }
};
generateCells();

// gera evento de click da Paleta de Cores
const generateEventClick = () => {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (event) => {
      if (event.target !== document.querySelector('.selected')) {
        for (let index1 = 0; index1 < colors.length; index1 += 1) {
          if (colors[index1] === document.querySelector('.selected')) {
            colors[index1].classList.remove('selected');
          }
        }
        event.target.classList.add('selected');
      }
    });
  }
};

// gera evento de click do botão Limpar
generateEventClick();
btnClear.addEventListener('click', () => {
  const pixelClass = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelClass.length; index += 1) {
    pixelClass[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  savePixels();
  removePixelColorsArray();
  removeClass();
});
// recupera o backgroundColor dos pixels
const recoveryBoard = JSON.parse(localStorage.getItem('pixelBoard'));
const recoveryPixels = () => {
  if (localStorage.getItem('pixelBoard') != null) {
    for (let index = 0; index < recoveryBoard.length; index += 1) {
      pixels[index].style.backgroundColor = recoveryBoard[index];
    }
  }
};
recoveryPixels();

const linesLenght = [];
const generateLinesLenght = () => {
  for (let index = 0; index < linesBoard.length; index += 1) {
    linesLenght.push(1);
  }
};

const generateNewQuantity = () => {
  recoveryBoardSize();
  if (input.value < 5) {
    pixelsQuantity = 5;
  }
  if (input.value > 50) {
    pixelsQuantity = 50;
  }
  if (input.value > 5 && input.value < 51) {
    pixelsQuantity = input.value;
  }
};
const removePixelBoardColor = () => {
  if (recoveryBoardPixels > 5 && recoveryBoardPixels !== input.value) {
    localStorage.removeItem('pixelBoard');
  }
};

const removeLines = () => {
  for (let index = 0; index < linesLenght.length; index += 1) {
    document.querySelector('.line').remove();
  }
  for (let index1 = 0; index1 < linesLenght.length; index1 += 1) {
    linesLenght.splice(index1, linesLenght.length);
  }
};

btnVQV.addEventListener('click', () => {
  if (input.value) {
    generateLinesLenght();
    removeLines();
    generateNewQuantity();
    generateCells();
    localStorage.setItem('boardSize', pixelsQuantity);
    recoveryBoardSize();
    removePixelBoardColor();
    removeClass();
  } else {
    alert('Board inválido!');
  }
});
