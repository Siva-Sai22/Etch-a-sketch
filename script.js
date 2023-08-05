let size = prompt('Enter the size of grid');

const main_div = document.querySelector('.main_div');
const onerowstyle = 'min-width: 500px; display: flex; justify-content: center;'
const smallboxstyle = `width: ${500/size}px; height: ${500/size-2}px; background-color:#D5FFE4;`

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
    if(!eraser_active){
        e.target.style = smallboxstyle+'background-color: black;';
    }else{
        e.target.style = smallboxstyle;
    }
}

const cleargrid = document.querySelector('.cleargrid');
cleargrid.addEventListener('click',()=>clear_grid());
function clear_grid(){
    boxes.forEach(box => {
        box.style.cssText = smallboxstyle;
    });
}

pen_active = true;
eraser_active = false;

const eraser = document.querySelector('.eraser');
const pen = document.querySelector('.pen');

eraser.addEventListener('click',(e)=>{
    eraser_active = true
    e.target.classList.add('activebutton');
    pen.classList.remove('activebutton');
})

pen.addEventListener('click',(e)=>{
    eraser_active = false
    e.target.classList.add('activebutton');
    eraser.classList.remove('activebutton');
});