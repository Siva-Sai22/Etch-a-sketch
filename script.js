const body = document.querySelector('body');
const main_div = document.createElement('div');
for(let i=0;i<16;i++){
    const column_div = document.createElement('div');
    for(let j=0;j<16;j++){
        const row_div = document.createElement('div');
        row_div.style.cssText = 'width: 25px; height: 25px;'
        column_div.appendChild(row_div)
    }
    column_div.style.cssText = 'display: flex; width:400px; height:25px;'
    main_div.appendChild(column_div);
}

body.appendChild(main_div);