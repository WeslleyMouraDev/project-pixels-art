    const btnRandomColors = document.getElementById('button-random-color');
    const btnClear = document.getElementById('clear-board');
    let colorsPalette = document.getElementById('color-palette');
    const block1 = document.getElementById('block1')
    const block2 = document.getElementById('block2');
    const block3 = document.getElementById('block3');
    const block4 = document.getElementById('block4');
    const colors = document.querySelectorAll('.color');
    block1.classList.add('selected');
    

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

    btnRandomColors.addEventListener('click', () => {            
        const hex1 = (Math.random()*0xFFFFFF<<0).toString(16);
        const hex2 = (Math.random()*0xFFFFFF<<0).toString(16);
        const hex3 = (Math.random()*0xFFFFFF<<0).toString(16);
        let color1 = '#000000';
        let color2 = `#${hex1}`;
        let color3 = `#${hex2}`;
        let color4 = `#${hex3}`;
        block1.style.backgroundColor = color1;
        block2.style.backgroundColor = color2;
        block3.style.backgroundColor = color3;
        block4.style.backgroundColor = color4;                
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
                cell.addEventListener('click', () => {
                    let target = document.querySelector('.selected')
                    let targetColor = target.style.backgroundColor;
                    cell.style.backgroundColor = targetColor
                })           
                line.appendChild(cell);
            }
            matriz.appendChild(line);
        }        
    }
    generateCells()
    
    const generateEventClick = () => {
        for(index = 0; index < colors.length; index += 1){
            colors[index].addEventListener('click', (event) =>{
                if (event.target === document.querySelector('.selected')){
                    targetColor = target.style.backgroundColor;
                }
                if (event.target != document.querySelector('.selected')){
                    for(index = 0; index < colors.length; index +=1){
                        if(colors[index] === document.querySelector('.selected')){
                            colors[index].classList.remove('selected');
                        }
                    }
                    event.target.classList.add('selected');
                    
                }
                targetColor = target.style.backgroundColor;
            })
        }
    }
    generateEventClick();
    
    btnClear.addEventListener('click', () => {
        pixelClass = document.querySelectorAll('.pixel');
        for (index = 0; index < pixelClass.length; index += 1){
            pixelClass[index].style.backgroundColor = 'white';
        }
    })

      
    
    






;