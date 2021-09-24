const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const dimensionSelector = document.querySelector('#dims');
let dims = 8;
container.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
container.style.gridTemplateRows = `repeat(${dims}, 1fr)`;

function setDimensions() {
	dims = dimensionSelector.value;
	container.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${dims}, 1fr)`;
}

function createDivs(dims) {
	for (let i = 0; i < Math.pow(dims, 2); i++) {
		const tempDivs = document.createElement('div');
		tempDivs.id = `div${i}`;
		tempDivs.classList.add('highlight');
		tempDivs.addEventListener('mouseover', function () {
			blackAndWhiteDivs(tempDivs);
		});
		tempDivs.style.backgroundColor = 'rgb(255, 255, 255)';
		container.appendChild(tempDivs);
	}
}

function blackAndWhiteDivs(divs1) {
	switch (divs1.style.backgroundColor) {
		case 'rgb(255, 255, 255)':
			divs1.style.backgroundColor = 'rgb(204, 204, 204)';
			break;
		case 'rgb(204, 204, 204)':
			divs1.style.backgroundColor = 'rgb(153, 153, 153)';
			break;
		case 'rgb(153, 153, 153)':
			divs1.style.backgroundColor = 'rgb(102 ,102 ,102)';
			break;
		case 'rgb(102, 102, 102)':
			divs1.style.backgroundColor = 'rgb(51, 51, 51)';
			break;
		case 'rgb(51, 51, 51)':
			divs1.style.backgroundColor = 'rgb(0, 0, 0)';
			break;
	}
}

function resetDivs(divs) {
	for (let d of divs) {
		d.style.backgroundColor = 'rgb(255, 255, 255)';
	}
}

//

createDivs(dims);

divs = document.getElementsByClassName('highlight');

reset.addEventListener('click', function () {
	resetDivs(Array.from(divs));
});

dimensionSelector.addEventListener('change', function () {
	while (divs.length.length > 0) {
		let d = divs[0];
		d.container.removeChild(d);
	}
	resetDivs(Array.from(divs));
	setDimensions();
	createDivs(dims);
});
