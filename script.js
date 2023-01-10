window.onload = () => {
    const btnRandomColors = document.getElementById('button-random-color');
    let colorsPalette = document.getElementById('color-palette');
    const block2 = document.getElementById('block2');
    const block3 = document.getElementById('block3');
    const block4 = document.getElementById('block4');
    const colors = document.getElementsByClassName('color');

    const save = () => {
        localStorage.setItem('colorPalette', colorsPalette.innerHTML);
    }

    btnRandomColors.addEventListener('click', () => {        
        const hex1 = (Math.random()*0xFFFFFF<<0).toString(16);
        const hex2 = (Math.random()*0xFFFFFF<<0).toString(16);
        const hex3 = (Math.random()*0xFFFFFF<<0).toString(16);
        let color2 = `#${hex1}`;
        let color3 = `#${hex2}`;
        let color4 = `#${hex3}`;
        block2.style.backgroundColor = color2;
        block3.style.backgroundColor = color3;
        block4.style.backgroundColor = color4;                
        save()
        
    })
    
    // const save = (colors) => {
    //     if (localStorage.length === 0) {
    //     localStorage.setItem('colorPalette', colors)
    //     }
    //     if (localStorage.length != 0) {
    //         localStorage.setItem('colorPalette', `Block2: ${c2}, Block3: ${c3}, Block4: ${c4}`)
    //     }
    // }


    
    
}





;