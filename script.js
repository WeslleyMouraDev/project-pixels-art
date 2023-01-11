    const btnRandomColors = document.getElementById('button-random-color');
    const btnClear = document.getElementById('clear-board');
    let colorsPalette = document.getElementById('color-palette');
    const block1 = document.getElementById('block1')
    const block2 = document.getElementById('block2');
    const block3 = document.getElementById('block3');
    const block4 = document.getElementById('block4');
    const colors = document.querySelectorAll('.color');    
    const pixels = document.getElementsByClassName('pixel')
    block1.classList.add('selected');
    let targetSelected = document.querySelector('.selected')
    let targetColor = targetSelected.style.backgroundColor;
    

    const save = () => {          
        localStorage.setItem('colorPalette', JSON.stringify([block1.style.backgroundColor, block2.style.backgroundColor, block3.style.backgroundColor, block4.style.backgroundColor]));        
    }

    const recoveryObject = JSON.parse(localStorage.getItem('colorPalette'));
    for(let index = 0; index < colors.length; index += 1){
        if(localStorage.getItem('colorPalette') != null){
            for(index = 0; index <recoveryObject.length; index += 1) {
                colors[index].style.backgroundColor = recoveryObject[index];
            }
        }
    }

    const corAletoria = () => {
        let R = Math.floor(Math.random() *256);
        let G = Math.floor(Math.random() *256);
        let B = Math.floor(Math.random() *256);
        return `rgb(${R}, ${G}, ${B})`;
    }   

    btnRandomColors.addEventListener('click', () => {        
        let color1 = 'rgb(0, 0, 0)';
        block1.style.backgroundColor = color1;
        block2.style.backgroundColor = corAletoria();
        block3.style.backgroundColor = corAletoria();
        block4.style.backgroundColor = corAletoria();                
        save()        
    })
    const generateCells = () => {
        const matriz = document.querySelector('#pixel-board');        
        for (let index = 0; index < 5; index += 1){
            const line = document.createElement('div');
            line.className = 'line';
            for(let index1 = 0; index1 <5; index1 += 1){
                const cell = document.createElement('div');
                cell.className = 'pixel';
                cell.style.backgroundColor = 'white';                 
                cell.addEventListener('click', () => {       
                    targetSelected = document.querySelector('.selected')
                    targetColor = targetSelected.style.backgroundColor;
                    cell.style.backgroundColor = targetColor
                })           
                line.appendChild(cell);
            }
            matriz.appendChild(line);
            
        }        
    }
    generateCells()
    
    // let pixelSave = JSON.stringify([`${pixelTeste}`])
    // const pixelTeste = pixelBackground
    // let pixelBackground = []
    // const pixelBoard = document.getElementsByClassName('pixel');          
    //     for(index = 0; index < pixelBoard.length; index += 1){
    //         pixelBackground.push(pixelBoard[index].style.backgroundColor);
        // }
        // localStorage.setItem('pixelBoard', JSON.stringify([this.pixels]));    
        // console.log(pixelSave);
        
    const generateEventClick = () => {
        for(index = 0; index < colors.length; index += 1){
            colors[index].addEventListener('click', (event) =>{
                // if (event.target === document.querySelector('.selected')){
                //     targetColor = target.style.backgroundColor;
                // }
                if (event.target != document.querySelector('.selected')){
                    for(index = 0; index < colors.length; index +=1){
                        if(colors[index] === document.querySelector('.selected')){
                            colors[index].classList.remove('selected');
                        }
                    }
                    event.target.classList.add('selected');
                    
                }
                targetColor = targetSelected.style.backgroundColor;
            })
        }
    }
    generateEventClick();
    
    btnClear.addEventListener('click', () => {
        pixelClass = document.querySelectorAll('.pixel');
        for (index = 0; index < pixelClass.length; index += 1){
            pixelClass[index].style.backgroundColor = 'rgb(255, 255, 255)';
        }
    })

      
    
    






;