window.onload = () => {
    const btnRandomColors = document.getElementById('button-random-color');
    const colorPalette = document.getElementById('color-palette');
    const block2 = document.getElementById('block2');
    const block3 = document.getElementById('block3');
    const block4 = document.getElementById('block4');
    const colors = document.getElementsByClassName('color');
    
    btnRandomColors.addEventListener('click', () => {        
                const hex1 = (Math.random()*0xFFFFFF<<0).toString(16)
                const hex2 = (Math.random()*0xFFFFFF<<0).toString(16)
                const hex3 = (Math.random()*0xFFFFFF<<0).toString(16)
                let color1 = `#${hex1}`
                let color2 = `#${hex2}`
                let color3 = `#${hex3}`
                block2.style.backgroundColor = color1
                block3.style.backgroundColor = color2
                block4.style.backgroundColor = color3
            })


    
    
}





;