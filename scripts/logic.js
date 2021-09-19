const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const dimensionSelector = document.querySelector('#dims');
let dims = 8;
dimensionSelector.addEventListener('change', function () {
	dims = this.value;
	container.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${dims}, 1fr)`;
	console.log(this.value);
});

container.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
container.style.gridTemplateRows = `repeat(${dims}, 1fr)`;

for (let i = 0; i < Math.pow(dims, 2); i++) {
	const divs = document.createElement('div');
	divs.id = `div${i}`;
	divs.classList.add('highlight');
	// divs.textContent = `${i}`;
	divs.style.backgroundColor = 'rgb(255, 255, 255)';
	container.appendChild(divs);

	divs.onmouseover = function () {
		switch (divs.style.backgroundColor) {
			case 'rgb(255, 255, 255)':
				divs.style.backgroundColor = 'rgb(204, 204, 204)';
				break;
			case 'rgb(204, 204, 204)':
				divs.style.backgroundColor = 'rgb(153, 153, 153)';
				break;
			case 'rgb(153, 153, 153)':
				divs.style.backgroundColor = 'rgb(102 ,102 ,102)';
				break;
			case 'rgb(102, 102, 102)':
				divs.style.backgroundColor = 'rgb(51, 51, 51)';
				break;
			case 'rgb(51, 51, 51)':
				divs.style.backgroundColor = 'rgb(0, 0, 0)';
				break;
		}
	};
	reset.addEventListener('click', function () {
		divs.style.backgroundColor = 'rgb(255, 255, 255)';
	});
}
