async function merge(arr, l, m, r)
{
	var n1 = m - l + 1;
	var n2 = r - m;

	var L = new Array(n1);
	var R = new Array(n2);

	for (var i = 0; i < n1; i++)
		{arr[l + i].style.background="orange";
		L[i] = arr[l + i].style.height;}
	for (var j = 0; j < n2; j++)
		{arr[m+1+j].style.background="yellow";
		R[j] = arr[m + 1 + j].style.height;}

	var i = 0;

	var j = 0;

	var k = l;

	while (i < n1 && j < n2) {
		await waitforme(delay);

		if(n1+n2==arr.length)
		arr[k].style.background="green";
		else
		arr[k].style.background="lightgreen";

		if (parseInt(L[i]) <= parseInt(R[j])) {
			arr[k].style.height = L[i];
			i++;
		}
		else {
			arr[k].style.height = R[j];
			j++;
		}
		
		k++;
	}

	while (i < n1) {
		await waitforme(delay);
		arr[k].style.height = L[i];
		i++;
		
		if(n1+n2==arr.length)
		arr[k].style.background="green";
		else
		arr[k].style.background="lightgreen";
		
		k++;
	}

	while (j < n2) {
		await waitforme(delay);
		arr[k].style.height = R[j];
		j++;
		
		if(n1+n2==arr.length)
		arr[k].style.background="green";
		else
		arr[k].style.background="lightgreen";
		
		k++;
	}
}

async function mergeSort(arr,l, r){
	if(l>=r){
		return;
	}
	var m =l+ parseInt((r-l)/2);
	await mergeSort(arr,l,m);
	await mergeSort(arr,m+1,r);
	await merge(arr,l,m,r);
}

const mergeBtn=document.querySelector(".merge");
mergeBtn.addEventListener("click",async function(){
	let arr=document.querySelectorAll(".bar");
	let l=0;
	let r=arr.length-1;
	disableBtns();
	disableButtons();
	disableSizeSlider();
	await mergeSort(arr,l,r);
	enableBtns();
	enableButtons();
	enableSizeSlider();
});