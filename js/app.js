function swap(el1, el2) {
    console.log('In swap()');

    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

}
function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
let delay = 50;

const arraySize = document.querySelector(".size");
arraySize.addEventListener('input', function () {
    createNewArray(parseInt(arraySize.value));
});

const arraySpeed=document.querySelector(".speed");
arraySpeed.addEventListener("input",function(){
    delay=265-parseInt(arraySpeed.value);
})
let array = [];
createNewArray();

function createNewArray(noOfbars = 60) {
    deleteChild();
    array = [];
    for (let i = 0; i < noOfbars; i++) {
        array.push(Math.floor(Math.random() * 150) + 1);
    }
    const target = document.querySelector("#bars_div");
    for (let i = 0; i < noOfbars; i++) {
        const element = document.createElement("div");
        element.classList.add("bar_style");
        element.classList.add("bar");
        element.classList.add(`barNo${i}`);
        element.classList.add('flex-item');
        element.style.height = `${array[i] * 4}px`;
        target.appendChild(element);
    }
}
function deleteChild() {
    const bar = document.querySelector("#bars_div");
    bar.innerHTML = '';
}
const newArraybtn = document.querySelector(".new-array");
newArraybtn.addEventListener("click", function () { 
    createNewArray(arraySize.value);
    enableSizeSlider();
    enableButtons(); 
});

function disableSizeSlider(){
    document.querySelector(".size").disabled=true;
}
function disableButtons(){
    document.querySelector(".btn").disabled=true;
}
function disableBtns(){
    document.querySelector(".bubble").disabled=true;
    document.querySelector(".insertion").disabled=true;
    document.querySelector(".selection").disabled=true;
    document.querySelector(".quick").disabled=true;
    document.querySelector(".merge").disabled=true;
}
function enableButtons(){
    document.querySelector(".btn").disabled=false;
}
function enableSizeSlider(){
    document.querySelector(".size").disabled=false;
}
function enableBtns(){
    document.querySelector(".bubble").disabled=false;
    document.querySelector(".insertion").disabled=false;
    document.querySelector(".selection").disabled=false;
    document.querySelector(".quick").disabled=false;
    document.querySelector(".merge").disabled=false;
}