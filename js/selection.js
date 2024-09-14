async function selectionSort()
{
    var i, j, min_idx;
    const ele=document.querySelectorAll(".bar");
    // One by one move boundary of unsorted subarray
    for (i = 0; i < ele.length-1; i++)
    {
        ele[i].style.background='blue';
        min_idx = i;
        for (j = i + 1; j < ele.length; j++){
        ele[j].style.background='red';
        await waitforme(delay);
        if(parseInt(ele[j].style.height) < parseInt(ele[min_idx].style.height)){
            console.log('In if condition height comparision');
            if(min_idx !== i){
                // new min_index is found so change prev min_index color back to normal
                ele[min_idx].style.background = 'cyan';
            }
            min_idx = j;
        } 
        else{
            // if the currnent comparision is more than min_index change is back to normal
            ele[j].style.background = 'cyan';
        }   
    }
        await waitforme(delay);
        swap(ele[min_idx],ele[i]);
        ele[min_idx].style.background='cyan';
        ele[i].style.background='green';
    }
    ele[ele.length-1].style.background='green';
}
const selectionbtn=document.querySelector(".selection");
selectionbtn.addEventListener("click",async function(){
    disableButtons();
	disableSizeSlider();
    disableBtns();
    await selectionSort();
    enableButtons();
	enableSizeSlider();
    enableBtns();
});