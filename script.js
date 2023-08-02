let size = 32;
//  prompt('Enter the size of grid');

const main_div = document.querySelector('.main_div');
const onerowstyle = 'min-width: 500px; display: flex; justify-content: center;'
const smallboxstyle = `width: ${500/size}px; height: ${500/size-2}px; border: 1px solid black;`

function makegrid(size){
    for(let i=0;i<size;i++){
        const column_div = document.createElement('div');
        column_div.classList.add('one-row');
        for(let j=0;j<size;j++){
            const row_div = document.createElement('div');
            row_div.classList.add('small_box');
            row_div.style.cssText = smallboxstyle;
            column_div.appendChild(row_div);
        }
        column_div.style.cssText = onerowstyle;
        main_div.appendChild(column_div);
    }
}
makegrid(size)

const boxes = document.querySelectorAll('.small_box');
let currently_active = false;
main_div.addEventListener('click',()=>togglepen());

function togglepen(){
    if(!currently_active){
        boxes.forEach(box => {
            box.addEventListener('mousemove',changecolor);
        })
        currently_active = true;
    }else{
        boxes.forEach(box => {
            box.removeEventListener('mousemove',changecolor);
        })
        currently_active = false;
    }
}

function changecolor(e){
    e.target.style = smallboxstyle+'background-color: black;'
}