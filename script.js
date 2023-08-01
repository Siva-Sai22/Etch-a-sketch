const main_div = document.querySelector('.main_div');

for(let i=0;i<16;i++){
    const column_div = document.createElement('div');
    column_div.classList.add('one-row');
    for(let j=0;j<16;j++){
        const row_div = document.createElement('div');
        row_div.classList.add('small_box');
        column_div.appendChild(row_div);
    }
    main_div.appendChild(column_div);
}

const boxes = document.querySelectorAll('.small_box');
let currently_active = false;
main_div.addEventListener('click',()=>togglepen());

function togglepen(){
    if(!currently_active){
        boxes.forEach(box => {
            box.addEventListener('mouseover',changecolor);
        })
        currently_active = true;
    }else{
        boxes.forEach(box => {
            box.removeEventListener('mouseover',changecolor);
        })
        currently_active = false;
    }
}

function changecolor(e){
    e.target.style = 'background-color: black;'
}