const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const dimensionSelector = document.querySelector('#dims');
const colorfulSelector = document.querySelector('#colorful');
const bwSelector = document.querySelector('#blackAndWhite');
let dims = 8;

container.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
container.style.gridTemplateRows = `repeat(${dims}, 1fr)`;

function setDimensions() {
	dims = dimensionSelector.value;
	container.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${dims}, 1fr)`;
}

function createDivs(dimensions) {
	for (let i = 0; i < Math.pow(dimensions, 2); i++) {
		const tempDivs = document.createElement('div');
		tempDivs.id = `div${i}`;
		tempDivs.classList.add('highlight');
		tempDivs.style.filter = `brightness(${100}%)`;
		tempDivs.addEventListener('mouseover', function () {
			if (bwSelector.checked) {
				blackAndWhiteDivs(tempDivs);
			} else if (colorfulSelector.checked) {
				colorful(tempDivs);
			}
			divBrightness(tempDivs);
		});
		container.appendChild(tempDivs);
	}
}

function blackAndWhiteDivs(divsToBW) {
	if (divsToBW.style.backgroundColor == '') {
		divsToBW.style.backgroundColor = 'rgb(204, 204, 204)';
	}
}

function colorful(divsToColor) {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);
	if (divsToColor.style.backgroundColor == '') {
		divsToColor.style.backgroundColor = '#' + randomColor;
	}
}

function divBrightness(divsToDarken) {
	switch (divsToDarken.style.filter) {
		case `brightness(${100}%)`:
			divsToDarken.style.filter = `brightness(${80}%)`;
			break;
		case `brightness(${80}%)`:
			divsToDarken.style.filter = `brightness(${60}%)`;
			break;
		case `brightness(${60}%)`:
			divsToDarken.style.filter = `brightness(${40}%)`;
			break;
		case `brightness(${40}%)`:
			divsToDarken.style.filter = `brightness(${20}%)`;
			break;
		case `brightness(${20}%)`:
			divsToDarken.style.filter = `brightness(${0}%)`;
			break;
	}
}

function resetDivs(divsToClear) {
	for (let d of divsToClear) {
		d.style.backgroundColor = '';
		d.style.filter = `brightness(${100}%)`;
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
