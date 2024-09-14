// Optimized javaScript implementation
// of Bubble sort
// An optimized version of Bubble Sort

async function bubbleSort()
{
	const ele=document.querySelectorAll(".bar");
	for (let i = 0; i < ele.length-1; i++)
	{
		for (let j = 0; j < ele.length - i - 1; j++)
		{
			ele[j].style.background='blue';
			ele[j+1].style.background='blue';
			if (parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
			{
				await waitforme(delay);
                swap(ele[j],ele[j+1]);
			}
			ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
		}
		ele[ele.length-i-1].style.background='green';
	}
	ele[0].style.background='green';
}
const bubblebtn=document.querySelector(".bubble");
bubblebtn.addEventListener("click",async function(){
	disableButtons();
	disableSizeSlider();
	disableBtns();
	await bubbleSort();
	enableButtons();
	enableSizeSlider();
	enableBtns();
});

